import theme from "./theme.js";
import {defineUserConfig} from "vuepress";

import {searchPlugin} from "@vuepress/plugin-search";
// import {photoSwipePlugin} from "vuepress-plugin-photo-swipe";

export default defineUserConfig({
    base: "/",
    theme,
    shouldPrefetch: false,
    plugins: [
        searchPlugin({
            maxSuggestions: 10,
        }),
        // photoSwipePlugin({}),
    ],
});
