---
original: true
title: 虚拟机多环境高度配置化
time: 2021-12-07
tags: 
  - vbox
  - docker
category: docker
description: 虚拟机多环境高度配置化 
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 平时开发总是离不开各种环境, 甚至在公司摸鱼学习有一个自己的环境, 回到家也有一套环境. 一个新的环境就要重新配置, 总是在解决相同的问题, 实在是索然无味. 如果你也有和我一样的痛点那么这篇文章可能会比较适合你.

## 思路

使用docker进行环境和服务的部署. 本文章的解决方案已经开源到[gitee](https://gitee.com/NikolaZhang/vm-config)

## 准备

1. 拉取该仓库的配置到本地

    ```shell
    git clone https://gitee.com/NikolaZhang/vm-config.git
    ```

2. 安装docker

    ```shell
    # 使用ubuntu
    apt install docker.io
    ```

3. 拉取docker镜像

    ```shell
    docker pull xxxxx
    ```

    你可能需要如下镜像:
    - efak: registry.cn-shanghai.aliyuncs.com/nikola-docker/efak-nikola:1.0
    - kafka: registry.cn-shanghai.aliyuncs.com/nikola-docker/kafka-nikola
    - zookeeper registry.cn-shanghai.aliyuncs.com/nikola-docker/zookeeper-nikola
    - redis
    - mysql

4. 创建网络环境
    为了隔离各个环境之前ip的差别, 最好使用自定义的名称进行隔离.

    ```shell
    docker network create nikola-net
    ```

    通过nikola-net这个桥接网络, 容器可以通过各自的网络别名进行访问.  
    运行容器时设置`--network nikola-net --network-alias=容器网络别名`即可

5. 编辑环境配置
    我们的环境配置有以下几种：
    - 环境变量文件：在vm-config根目录下的env_xxx这样的文件名
    - docker容器挂载的配置文件，配置文件目录需要在环境变量中配置

    注意环境中的配置参数,编辑后不是直接生效的, 需要执行`source xxx`才可以.
    你需要什么环境的配置，直接source对应的文件即可

## zookeeper部署

`vm-config/docker/zookeeper`目录下,`zookeeper.sh`为启动zookeeper容器的脚本. 直接执行即可.

```shell
./zookeeper-1.sh
```

使用`docker ps`发现容器状态为`Up`, ok

## kafka 部署

kafka的启动脚本在`vm-config/docker/kafka/`目录下.
注意执行之前需要配置环境信息

1. 使用`source 你的配置文件`, 使配置生效.
2. 执行下面的脚本就可以启动kafka了

    ```shell
    ./kafka-env.sh
    ```

## mysql部署

执行下面的命令即可启动mysql

```shell
./mysql-1.sh
```

## efak 部署

efak用于kafka的监控.它的启动需要依赖zookeeper,kafka,mysql
请检查容器状态, 确保以上环境启动正确.

1. 配置环境信息, 并使用source使配置生效
    `vm-config`目录中的你的配置文件中需要配置:
     - `EFAK_LOG_FILE`: 为efak日志文件的全路径
     - `EFAK_CONF_FILE`: 为2中你的配置文件的全路径
2. 执行`./efak.sh`即可启动efak
3. 到你的浏览器中输入: 你的ip:8048即可
初始账号:admin  密码:123456

### efak docker镜像的构建

efak的镜像是通过程序包进行构建的, 以下为构建过程

1. 从[efak官网](http://download.kafka-eagle.org/)下载efak程序包, 解压
2. 编辑dockerfile

    ```shell
    FROM  java:8
    COPY efak-web-2.0.8 /home/efak
    ENV KE_HOME=/home/efak
    EXPOSE 8048
    RUN chmod 777 /home/efak/*
    CMD ["bash","-c","/home/efak/bin/ke.sh start && tail -f /dev/null"]
    ```

3. 执行`docker build -t efak-nikola .`完成镜像构建.
4. docker tag efak-nikola registry.cn-shanghai.aliyuncs.com/nikola-docker/efak-nikola:[version]
5. docker push registry.cn-shanghai.aliyuncs.com/nikola-docker/efak-nikola:[version]

p.s.: 4,5两步用于完成阿里云容器镜像推送

## redis部署

执行如下命令:

```shell
./redis-1.sh
```

## 外部访问

当使用外部程序访问容器时, 比如kafka会出现kafka-1无法解析的问题, 需要在你的hosts文件中添加

```text
虚拟机ip kafka-1
```

## 部署脚本

以efak的部署脚本为例:

```shell
#!/bin/bash
if [ "x$EFAK_LOG_FILE" = "x" ]; then
  echo please run source env_xxx to init environment!
  exit 1
fi
containerName=efak-web
shellPath=$(dirname $0)
$shellPath/../../common/docker_container_remove.sh $containerName

echo start efak-nikola > $EFAK_LOG_FILE
docker run -d -p 8048:8048 --restart=always \
    --name $containerName \
    --network nikola-net \
    --network-alias efak-1 \
    -v $EFAK_LOG_FILE:/home/efak/logs/log.log \
    -v $EFAK_CONF_FILE:/home/efak/conf/system-config.properties \
    registry.cn-shanghai.aliyuncs.com/nikola-docker/efak-nikola:1.0
```

`EFAK_LOG_FILE`: 为日志文件路径, 该文件会挂载到容器中作为日志输出, 该配置需要在你的变量配置文件中设置, 并且使用source命令使其生效.
脚本第一步是去检测该配置是否存在, 如果不存在表示没有执行过source命令.

`docker_container_remove.sh`: 是容器移除的脚本. 该脚本会检测容器是否正在运行, 如果运行中则将其停止. 之后再将其删除, 以便下次重新创建.  
脚本具体内容见下:

```shell
#!/bin/bash

containerName=$1
# 判断容器是否存在
containerExist=`docker ps -a | grep $containerName`
if [ -n "$containerExist" ]; then
    # 容器是否为运行状态
    echo 容器正在运行
    containerStatus=`docker container inspect $containerName --format="{{.State.Running}}"`
    if [ "$containerStatus" = "true" ]; then
        docker stop $containerName
        echo 停止容器
    fi
    echo 删除容器
    docker rm $containerName
fi
echo 创建容器....
```

后面的是efak docker容器的创建命令, 大致内容如下:

1. 容器在后台运行
2. 映射主机端口8048
3. 容器会自动重启
4. 容器名称为`efak-web`
5. 使用`nikola-net`网络, 在该网络下使用efak-1可以访问容器
6. 挂载日志和配置文件
7. 指定镜像

## 总结

1. 首先source你的环境变量(如果需要的话)
2. 修改容器配置文件(如果需要的话)
3. 创建网络 docker network create nikola-net
4. 执行容器启动脚本
5. 外部环境配置hosts

像zookeeper mysql redis kafka 你只要执行第3,4步即可,  
efak你需要执行第1,3,4步(如果需要改配置第2步也不可少)
