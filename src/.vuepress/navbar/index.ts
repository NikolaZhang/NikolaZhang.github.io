import {navbar} from "vuepress-theme-hope";


export const zhNavbar = navbar([
    "/",
    {
        text: "Posts",
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
        children: [
            {
                text: "笔记",
                link: "/posts/note/"
            }
        ]
    },
    {
        text: "fun",
        children: [
            {
                text: "番剧",
                link: "/bangumi/"
            },
            {
                text: "推荐",
                link: "/share/"
            }
        ]
    },
    {
        text: "server",
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
