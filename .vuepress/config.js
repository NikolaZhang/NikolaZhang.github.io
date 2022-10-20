const { config } = require("vuepress-theme-hope");

module.exports = config({
    title: "我小叮当、",
    base: '/blog-nikola/',
    description: "全人类的幻想乡",
    sidebar: "auto",

    dest: "./dist",

    head: [
        ["meta",
            {
                name: "referrer", content: "no-referrer"
            }
        ],
        [
            "link",
            {
                rel: 'stylesheet',
                href: "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
            },
        ],
        [
            "script",
            { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
        ],
        [
            "script",
            {
                src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
            },
        ],
        [
            "script",
            { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
        ],
    ],

    themeConfig: {
        iconPrefix: "fas fa-",
        logo: "/head.svg",
        hostname: "https://blog.nikolazhang.top",
        author: "我小叮当、",
        repo: "https://github.com/NikolaZhang/blog-nikola",
        displayAllHeaders: true,
        activeHeaderLinks: true,
        search: true,
        searchPlaceholder: "Search...",
        searchMaxSuggestions: 10,
        blog: {
            blogger: "我小叮当、",
            avatar: "/head.svg",
            roundAvatar: true,
            sidebarDisplay: 'mobile',
            timeline: "朝花夕拾",
            perPage: 10,
            intro: "/intro/",
            links: {
                Gitee: "https://gitee.com/NikolaZhang",
                Github: "https://github.com/NikolaZhang",
                Wechat: "/wechat.jpg",
                QQ: "2869581218",
                Email: "nikolazhang@163.com"
            },
        },
        // typescript: true,
        nav: [
            { text: "Blog Home", link: "/", icon: "home" },
            ...require("./config/nav_default")
        ],

        sidebar: {
            "/": [
                "",
                "home",
                "slides",
            ],
        },

        footer: {
            display: true,
            content: "nikola | 鲁ICP备20000559号-1",
        },

        comment: require("./config/comment"),

        copyright: true,

        git: {
            timezone: "Asia/Shanghai",
        },

        mdEnhance: {
            enableAll: true,
        },
        pwa: {
            favicon: "/favicon.ico",
            cachePic: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Guide",
                        short_name: "Guide",
                        url: "/guide/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },

    },

    plugins: [
        ["vuepress-plugin-auto-sidebar", {}],
        // ["fulltext-search", {}],
        ["add-this", { pubid: 'ra-60b1d14dd8bb114b', }],
    ],

});
