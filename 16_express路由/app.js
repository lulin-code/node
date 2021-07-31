/*
 * @Author: your name
 * @Date: 2021-07-31 14:50:33
 * @LastEditTime: 2021-07-31 15:08:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/16_express路由/app.js
 */
const express = require('express')
const app = express()

app.get('/',(req,res)=> {
  res.send('你好，express')
})

app.get('/article',(req,res)=> {
  res.send('新闻页面')
})

app.get('/login',(req,res)=> {
  res.send('登录')
})

app.get('/register',(req,res)=> {
  res.send('注册页面')
})

app.post('doLogin',(req,res)=> {
  console.log('执行登录')
  res.send('执行登录')
})

//put：主要用于修改数据
app.put('editUser',(req,res)=> {
  console.log("修改用户")
  res.send("修改用户")
})

//delete：主要用于删除数据
app.delete('deleteUser',(req,res)=> {
  console.log("执行删除")
  res.send("执行删除")
})

// 路由里面配置多级目录
app.get("/admin/user/add", (req, res) => {
  res.send("admin user add")
})

//动态路由  配置路由的时候也要注意顺序
app.get('article/:id',(req,res)=> {
  let id = req.params['id']
  res.send(`动态路由 ${id}`)
})

// git 传值
app.get('product',(req,res)=> {
  let query = req.query
  console.log(query)
  res.send(`product- ${query.id}`)
})

app.listen(3000)