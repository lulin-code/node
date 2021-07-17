/*
 * @Author: your name
 * @Date: 2021-07-17 14:40:59
 * @LastEditTime: 2021-07-17 15:50:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/06_文件操作/6.1练习/app.js
 */

// 1.判断服务器上面有没有upload目录。如果没有创建这个目录，如果有的话不做操作。 
const fs = require('fs')
const path = './upload'

const mkdir = (dir)=> {
  fs.mkdir(dir,(err)=> {
    if (err) return console.log(err)
    console.log('创建成功')
  })
}

fs.stat(path,(err,data)=> {
  if (err) return mkdir(path)
  if (data.isDirectory()) {
    console.log('目录已存在')
  }else {
    fs.unlink(path,(err)=> {
      if (!err) {
        mkdir(path)
      }
    })
  }
})
