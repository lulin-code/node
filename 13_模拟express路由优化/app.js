/*
 * @Author: your name
 * @Date: 2021-07-26 15:41:43
 * @LastEditTime: 2021-07-26 15:47:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/13_模拟express路由优化/app.js
 */
const http = require("http");
const app = require('./moudule/route.js');
const ejs = require("ejs");

//注册web服务
http.createServer(app).listen(3000);

//配置路由
app.get('/', function (req, res) {
  res.send("首页")
})

//配置路由
app.get('/login', function (req, res) {
  // res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  // res.end('执行登录操作');
  ejs.renderFile("./views/form.ejs", {}, (err, data) => {
    res.send(data)
  })
})

app.post('/doLogin', function (req, res) {
  console.log(req.body);
  res.send(req.body)
})