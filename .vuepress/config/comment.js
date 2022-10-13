module.exports = {
    type: 'valine',
    el: '#valine-vuepress-comment',
    appId: 'qAVFKUfEt4etAYmdCwMaXL7o-gzGzoHsz',
    appKey: 'dMvLljvHYdgzKj5mgP6BzI1Y',
    path: '<%- frontmatter.title %>',
    visitor: true,
    highlight: true,
    recordIP: true,
    enableQQ: true,
    requiredFields: ['nick'],
    pageSize: 10,
    avatar: 'retro',
    placeholder: '说点啥吧 =￣ω￣=',
    emojiCDN: 'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/',
    // 表情title和图片映射
    emojiMaps: Object.assign(
        require('./emoji/bilibili_2333'),
        require('./emoji/bilibili_face'),
        require('./emoji/bilibili_hotKey'),
        require('./emoji/bilibili_littleTv'),
        require('./emoji/bilibili_tv_gif'),
        // require('./emoji/huomiao'),
        // require('./emoji/qq')
    )
}

// 自定义表情
//https://www.antmoe.com/posts/284f2e1c/index.html
// https://emotion.xiaokang.me/#/