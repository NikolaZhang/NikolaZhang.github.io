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
            icon: "note",
            prefix: "notes/",
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
