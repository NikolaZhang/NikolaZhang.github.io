import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar";
import {zhSidebar} from "./sidebar";

export default hopeTheme({
    hostname: "https://nikolazhang.github.io",
    author: {
        name: "我小叮当、",
        url: "https://nikolazhang.github.io",
    },
    iconAssets: "iconfont",
    logo: "/head.svg",
    repo: "https://github.com/NikolaZhang/nikolazhang.github.io",
    docsDir: "docs",
    pageInfo: ["Date", "Original", "Category", "Tag", "Word", "ReadingTime"],
    blog: {
        name: "我小叮当、",
        avatar: "/head.svg",
        roundAvatar: true,
        description: "全人类的幻想乡",
        sidebarDisplay: "none",
        timeline: "朝花夕拾",
        articlePerPage: 10,
        articleInfo: ["Date", "Original", "Category", "Tag", "Word", "ReadingTime"],
        intro: "/",
        medias: {
            Email: "mailto:nikolazhang@163.com",
            Gitee: "https://gitee.com/NikolaZhang",
            GitHub: "https://github.com/NikolaZhang",
            QQ: "http://wpa.qq.com/msgrd?v=3&uin=2869581218&site=qq&menu=yes",
            Wechat: "/wechat.jpg",
        },
    },
    // navbar
    navbar: zhNavbar,
    // sidebar
    sidebar: zhSidebar,
    footer: "nikola | 鲁ICP备20000559号-1",
    displayFooter: true,
    // page meta
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },
    encrypt: {
        config: {
            "/demo/encrypt.html": ["nikola"],
            "/zh/demo/encrypt.html": ["nikola"],
        },
    },
    plugins: {
        blog: {
            excerpt: false
        },
        // If you don't need comment feature, you can remove following option
        // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
        // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
        comment: {
            provider: "Waline",
            serverURL: "http://comment.nikolazhang.top/",
            meta: ['nick', 'mail', 'link'],
            requiredMeta: ['nick'],
            reaction: true,
            emoji: [
                '//unpkg.com/@waline/emojis@1.1.0/bilibili',
                '//unpkg.com/@waline/emojis@1.1.0/bmoji',
                '//unpkg.com/@waline/emojis@1.1.0/alus',
                '//unpkg.com/@waline/emojis@1.1.0/qq',
                '//unpkg.com/@waline/emojis@1.1.0/tieba',
                '//unpkg.com/@waline/emojis@1.1.0/tw-emoji',
                '//unpkg.com/@waline/emojis@1.1.0/weibo',
            ],
            // emojiCDN: 'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/',
            // // 表情title和图片映射
            // emojiMaps: Object.assign(
            //     require('./emoji/bilibili_2333'),
            //     require('./emoji/bilibili_face'),
            //     require('./emoji/bilibili_hotKey'),
            //     require('./emoji/bilibili_littleTv'),
            //     require('./emoji/bilibili_tv_gif'),
            //     // require('./emoji/huomiao'),
            //     // require('./emoji/qq')
            // )

        },

        // Disable features you don't want here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            imgSize: true,
            include: true,
            katex: true,
            lazyLoad: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommanded",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommanded",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },
        pwa: {
            favicon: "/favicon.ico",
            cacheHTML: true,
            cachePic: true,
            appendBase: true,
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
                        name: "Demo",
                        short_name: "Demo",
                        url: "/demo/",
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
});
