/*
 * @Author: your name
 * @Date: 2021-07-23 18:24:46
 * @LastEditTime: 2021-07-23 18:26:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/03_express_router.js
 */

let http = require('http');
const app = require('./module/route')
http.createServer(app).listen(3000);


console.log('Server running at http://127.0.0.1:3000/');
//配置路由
app.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  res.end('首页');
})

//配置路由
app.get('/login', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  res.end('执行登录操作');
})

//配置路由
app.get('/news', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  res.end('新闻页面');
})