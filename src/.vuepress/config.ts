import theme from "./theme.js";
import {defineUserConfig} from "vuepress";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default defineUserConfig({
    base: "/",
    theme,
    shouldPrefetch: false,
    plugins: [
        docsearchPlugin({
            // 配置项
        }),
      
    ],
});
