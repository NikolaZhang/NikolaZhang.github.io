import{_ as o}from"./app-1QxuzPzL.js";var n={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"http://comment.nikolazhang.top/",meta:["nick","mail","link"],requiredMeta:["nick"],reaction:!0,emoji:["//unpkg.com/@waline/emojis@1.1.0/bilibili","//unpkg.com/@waline/emojis@1.1.0/bmoji","//unpkg.com/@waline/emojis@1.1.0/alus","//unpkg.com/@waline/emojis@1.1.0/qq","//unpkg.com/@waline/emojis@1.1.0/tieba","//unpkg.com/@waline/emojis@1.1.0/tw-emoji","//unpkg.com/@waline/emojis@1.1.0/weibo"]};const t=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-1QxuzPzL.js").then(i=>i.W),__vite__mapDeps([]));return e({serverURL:n.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{t as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
