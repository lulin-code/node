/*
 * @Author: your name
 * @Date: 2021-08-02 16:06:29
 * @LastEditTime: 2021-08-02 17:43:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/19_cookie/app.js
 */
const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

// 配置cookieParser中间件
app.use(cookieParser('lulin'))

app.get('/',(req,res)=> {
  //设置cookie  如果cookie没有过期的话，关闭浏览器后重新打开,cookie不会销毁
  // res.cookie('username','zhangsan',{maxAge:1000 * 60 * 60})

  // 设置可访问cookie的路由
  // res.cookie('username', 'zhangsan', { maxAge: 1000 * 60 * 60, path:'/article' })

  //多个域名共享cookie  aaa.itying.com   bbb.itying.com 
  // res.cookie("username","zhangsan1111",{maxAge:1000*60*60,domain:".itying.com"})

  // cookie加密
  res.cookie("username", "zhangsan", { maxAge: 1000 * 60 * 60, signed: true })

  res.send("你好 express aaa")
})

app.get('/article',()=> {
  let username = req.cookies.username
  console.log(username)
  res.send(`新闻页面--${username}`)
})

app.get('/user',(req,res)=> {
  let username = req.cookies.username
  console.log(username)
  res.send(`用户--${username}`)
})

app.get('/product',(req,res)=> {
  let username = req.signedCookies.username
  console.log(username)
  res.send(`product--${username}`)
})
app.listen(port)
