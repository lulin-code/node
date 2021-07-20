/*
 * @Author: your name
 * @Date: 2021-07-20 14:22:57
 * @LastEditTime: 2021-07-20 15:01:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/11_模拟express封装/module/routes.js
 */
const fs = require('fs');
const path = require('path');
const url = require('url');
const ejs = require('ejs');

let getFileMime = function (extname) {
  let data = fs.readFileSync('./data/mime.json')
  let mimeObj = JSON.parse(data.toString())
  return mimeObj[extname]
}

let app = {
  static: (req, res, staticPath) => {
    let pathname = url.parse(req.url).pathname;
    let extname = path.extname(pathname)

    if (pathname != '/favicon.ico' && extname) {
      try {
        let data = fs.readFileSync('./' + staticPath + pathname);
        if (data) {
          let mime = getFileMime(extname);
          res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
          res.end(data);
        }
      } catch (error) {
      }
    }
  },
  login: (req, res) => {
    ejs.renderFile('./views/form.ejs', {}, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end(data)
    })
  },
  news: (req, res) => {
    res.end('news')
  },
  doLogin: (req, res) => {
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk;
    })
    req.on('end', () => {
      console.log(postData);
      res.end(postData);
    })
  },
 
  test: (req,res)=> {
    let pathname = url.parse(req.url).pathname;
  
    res.end(pathname)
  }, 
  err: (req, res) => {
    res.end('404');
  },

}
module.exports = app;