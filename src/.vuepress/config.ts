import theme from "./theme.js";
import {defineUserConfig} from "vuepress";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default defineUserConfig({
    base: "/",
    theme,
    shouldPrefetch: false,
    plugins: [
        docsearchPlugin({
            appId: 'YIS8DY4LNY',
            apiKey: 'b008387bae095c0a5dc485d0a3e62b67',
            indexName: ''
        }),
      
    ],
});
