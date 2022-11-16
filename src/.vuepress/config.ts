import theme from "./theme.js";
import {defineUserConfig} from "vuepress";
import {searchPlugin} from "@vuepress/plugin-search";
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";

export default defineUserConfig({
    base: "/",
    theme,
    shouldPrefetch: false,
    plugins: [
        searchPlugin({
            maxSuggestions: 10,
        }),
        // photoSwipePlugin({}),

        // 自定义插件
        registerComponentsPlugin({
            // 配置项
            componentsPatterns: ["components/**/*.vue"]
        }),
    ],
});
