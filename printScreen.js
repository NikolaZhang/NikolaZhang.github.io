// const share = require('./.vuepress/config/data/share');

const page = require('webpage').create();
// 加载页面
page.open("http://linux.51yip.com/", function () {
    page.render('51yip');
    phantom.exit();
})

// for (const category in share) {
//     share[category].forEach(item => {
//         if(item.link) {
//             console.log(item.link)
//             page.open("http://linux.51yip.com/", function () {
//                 page.render('pictures/' + item.title);
//             })
//         }
//     });
// }

// how to use:
// cnpm install phantomjs -g 
// open terminal under root
// phantomjs printScreen.js
