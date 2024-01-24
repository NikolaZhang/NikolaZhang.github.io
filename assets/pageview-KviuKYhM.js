import{_ as a}from"./app-iJkouRwV.js";var n={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://blog-comment-app-git-main-nikolazhang.vercel.app/",meta:["nick","mail","link"],requiredMeta:["nick"],reaction:!0,emoji:["//unpkg.com/@waline/emojis@1.1.0/bilibili","//unpkg.com/@waline/emojis@1.1.0/bmoji","//unpkg.com/@waline/emojis@1.1.0/alus","//unpkg.com/@waline/emojis@1.1.0/qq","//unpkg.com/@waline/emojis@1.1.0/tieba","//unpkg.com/@waline/emojis@1.1.0/tw-emoji","//unpkg.com/@waline/emojis@1.1.0/weibo"]};const t=async()=>{try{const{pageviewCount:e}=await a(()=>import("./app-iJkouRwV.js").then(i=>i.W),__vite__mapDeps([]));return e({serverURL:n.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{t as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
