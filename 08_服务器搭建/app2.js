/*
 * @Author: your name
 * @Date: 2021-07-19 17:40:41
 * @LastEditTime: 2021-07-19 17:40:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/08_服务器搭建/app2.js
 */
/*
 * @Author: your name
 * @Date: 2021-07-19 14:07:07
 * @LastEditTime: 2021-07-19 17:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/08_服务器搭建/app.js
 */

const http = require('http');
const fs = require('fs')
const url = require('url')
const path = require('path')
const common = require('./module/common.js')



http.createServer((req, res) => {
  let pathName = url.parse(req.url).pathname;
  pathName = pathName == '/' ? '/index.html' : pathName

  // 获取后缀名path.extname()
  let extname = path.extname(pathName)

  // 读取文件
  if (pathName != '/favicon.ico') {

    fs.readFile('./static' + pathName, async (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end('404这个页面不存在');
      }
      let mime = await common.getFileMime(extname);
      res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
      res.end(data);
    })
  }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');