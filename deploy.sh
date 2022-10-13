# 脚本用来部署到服务器指定目录

#!/bin/bash

# 需要配置服务器以及部署的文件目录
SERVER="au20root"
SERVER_PATH="/home/nikola/app/blog"

yarn install
yarn docs:build
echo [`date`] ==== project build successful, ^.^/


tar -zcf dist.tar.gz -C dist .

echo dist compress successful

ssh $SERVER "rm -rf $SERVER_PATH/*;"

scp dist.tar.gz $SERVER:$SERVER_PATH

ssh $SERVER "tar -zxf $SERVER_PATH/dist.tar.gz -C $SERVER_PATH; rm -f $SERVER_PATH/dist.tar.gz"
echo [`date`] ==== send dist files successful ^.^/

echo [`date`] ==== deploy success, yahoo, wry~, wry~ ^.^/

rm -f dist.tar.gz
rm -rf dist 

