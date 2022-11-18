import {navbar} from "vuepress-theme-hope";


export const zhNavbar = navbar([
    "/",
    {
        text: "文章",
        icon: "edit",
        prefix: "/posts/",
        children: [
            {
                text: "博客搭建相关",
                link: "blog/"
            },
            {
                text: "数据库",
                link: "database/"
            },
            {
                text: "elasticsearch",
                link: "elasticsearch/"
            },
            {
                text: "git",
                link: "git/"
            },
            {
                text: "golang",
                link: "golang/"
            },
            {
                text: "hashmap",
                link: "hashmap/"
            },
            {
                text: "jenkins",
                link: "jenkins/"
            },
            {
                text: "leetcode",
                link: "leetcode/"
            },
            {
                text: "linux",
                link: "linux/"
            },
            {
                text: "markdown",
                link: "markdown/"
            },
            {
                text: "mybatis",
                link: "mybatis/"
            },
            {
                text: "设计模式",
                link: "pattern/"
            },
            {
                text: "springboot",
                link: "springboot/"
            },
            {
                text: "springcloud",
                link: "springcloud/"
            },
            {
                text: "线程",
                link: "thread/"
            },
            {
                text: "工具",
                link: "tools/"
            },
            {
                text: "虚拟机",
                link: "vm/"
            },
            {
                text: "日志",
                link: "log/"
            }
        ],
    },
    {
        text: "笔记",
        icon: "book",
        prefix: "/notes/",
        children: [
            {
                text: "网络",
                link: "web-net/"
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
