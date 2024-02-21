import {navbar} from "vuepress-theme-hope";


export const zhNavbar = navbar([
    "/",
    {
        text: "文章",
        icon: "edit",
        prefix: "/posts/",
        children: [
            {
                text: "文章目录",
                link: ""
            }
        ],
    },
    {
        text: "笔记",
        icon: "page",
        prefix: "/notes/",
        children: [
            {
                text: "网络",
                link: "web-net/"
            }
        ]
    },
    {
        text: "开源项目",
        icon: "ability",
        prefix: "/open_source/",
        children: [
            {
                text: "我的vscode插件",
                link: "vscode-plugin/"
            },
            {
                text: "容器环境配置",
                link: "docker-env/"
            },
            {
                text: "java学习",
                link: "java-learn/"
            },
            {
                text: "python工具",
                link: "python-tools/"
            }
        ]
    },
    {
        text: "分享",
        icon: "share",
        prefix: "/shares/",
        children: [
            {
                text: "工具",
                link: "tools/"
            },
            {
                text: "番剧",
                link: "bangumis/"
            },
        ]
    },
    {
        text: "server",
        icon: "book",
        children: [
            {
                text: "nps",
                link: "http://nps.nikolazhang.top"
            },
            {
                text: "efak",
                link: "http://efak.nikolazhang.top"
            },
        ]
    }
]);
