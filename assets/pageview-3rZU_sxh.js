import{_ as r}from"./app-Y4FVIHIl.js";const o=async()=>{try{const{pageviewCount:e}=await r(()=>import("./pageview_vuepress-plugin-comment2-XPXQPciS.js"),__vite__mapDeps([]));return e({serverURL:COMMENT_OPTIONS.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
