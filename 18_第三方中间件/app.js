/*
 * @Author: your name
 * @Date: 2021-08-02 14:53:08
 * @LastEditTime: 2021-08-02 15:06:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/18_第三方中间件/app.js
 */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const ejs = require('ejs')

// 配置模板引擎
app.engine("html", ejs.__express)
app.set("view engine", "html")

// 配置静态web目录
app.use(express.static('static'))

// 配置第三方中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=> {
  res.send('首页')
})

app.get('/login',(req,res)=> {
  res.render("login", {})
})

app.post('/doLogin',(req,res)=> {
  let body = req.body
  console.log(body)
  res.send(`执行提交${body.username}`)
})

app.listen(port, () => console.log(`Example app listening on port port!`))