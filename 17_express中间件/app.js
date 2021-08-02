/*
 * @Author: your name
 * @Date: 2021-08-02 14:32:05
 * @LastEditTime: 2021-08-02 14:40:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/17_express中间件/static/app.js
 */
const express = require('express')
const app = express()

// 内置中间件
app.use(express.static('static'))

// 应用级中间件
app.use((req,res,next)=> {
  console.log(new Date)
  next()
})

app.get("/", (req, res) => {
  res.send("首页")
})

app.get("/login", (req, res) => {
  res.send("执行登录")
})

// 路由级中间件（用的比较少）
app.get('news/add',(req,res,next)=> {
  console.log('增加新闻')
  next()
})

app.get("/news/:id", (req, res) => {
  res.send("新闻动态路由")
})

app.use((req,res,next)=> {
  res.status(404).send('404')
})

app.listen(3000)