import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            text: "文章",
            icon: "article",
            prefix: "posts/",
            children: "structure",
        },
        {
            text: "笔记",
            icon: "footnote",
            prefix: "notes/",
            children: "structure",
        },
        {
            text: "开源项目",
            icon: "ability",
            prefix: "open_source/",
            children: "structure",
        },
        {
            text: "分享",
            icon: "share",
            prefix: "shares/",
            children: "structure",
        },
    ],
});
