import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  theme,
  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      maxSuggestions: 10,
    }),
  ],
});
