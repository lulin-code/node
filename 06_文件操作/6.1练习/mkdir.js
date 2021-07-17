/*
 * @Author: your name
 * @Date: 2021-07-17 15:54:35
 * @LastEditTime: 2021-07-17 16:16:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/06_文件操作/6.1练习/app.js
 */

// wwwroot文件夹下面有images css js 以及index.html, 找出 wwwroot目录下面的所有的目录，然后放在一个数组中

const fs = require('fs');
const { get } = require('http');
const path = './wwwroot'
let dirArr = [];
fs.readdir(path,(err,data)=> {
  if(err) return console.log(err)
  (function getDir(i) {
    if (i ==data.length) {
     return console.log(dirArr);
    }
    fs.stat(path + '/' + data[i], (error,stats)=> {
      if (stats.isDirectory()) {
        dirArr.push(data[i])
      }
      getDir(i + 1)
    })
  })(0)
})
