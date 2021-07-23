/*
 * @Author: your name
 * @Date: 2021-07-23 18:13:13
 * @LastEditTime: 2021-07-23 18:29:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/12_模拟express路由/module/route.js
 */
const url = require('url')

let G = {}
let app = (req,res)=> {
  let pathname = url.parse(req.url).pathname
  if (G[pathname]) {
    G[pathname](req,res)
  }else {
    res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end('页面不存在');
  }
}
app.get = (str,cb)=>{
  G[str] = cb
}

module.exports = app