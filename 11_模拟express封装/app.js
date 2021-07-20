/*
 * @Author: your name
 * @Date: 2021-07-20 14:32:02
 * @LastEditTime: 2021-07-20 14:36:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/11_模拟express封装/app.js
 */
const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const path = require('path');

http.createServer(function (req, res) {
  routes.static(req, res, 'static');
  let pathname = url.parse(req.url).pathname.replace("/", "");
  let extname = path.extname(pathname);
  if (!extname) {   //如果有后缀名的话让静态web服务去处理 
    try {
      routes[pathname](req, res);
    } catch (error) {
      routes['err'](req, res);
    }
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');