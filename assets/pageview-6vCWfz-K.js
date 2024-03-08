import{_ as o}from"./app-_Q4FBYRc.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://vercel-blog-comment.nikolazh.eu.org/",meta:["nick","mail","link"],requiredMeta:["nick"],reaction:!0,emoji:["//unpkg.com/@waline/emojis@1.1.0/bilibili","//unpkg.com/@waline/emojis@1.1.0/alus","//unpkg.com/@waline/emojis@1.1.0/qq","//unpkg.com/@waline/emojis@1.1.0/tieba","//unpkg.com/@waline/emojis@1.1.0/tw-emoji","//unpkg.com/@waline/emojis@1.1.0/weibo"]};const r=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-_Q4FBYRc.js").then(i=>i.W),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{r as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
