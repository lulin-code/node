/*
 * @Author: your name
 * @Date: 2021-07-19 14:07:07
 * @LastEditTime: 2021-07-19 15:03:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/08_服务器搭建/app.js
 */

const http = require('http');
const fs = require('fs')



http.createServer((req, res) => {
  let pathName = req.url

  pathName = pathName == '/' ? '/index.html' : pathName

  // 读取文件
  if (pathName != '/favicon.ico') {

    fs.readFile('./static' + pathName, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end('404这个页面不存在');
      }
      res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end(data);
    })
  }

}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
