/*
 * @Author: your name
 * @Date: 2021-07-19 09:55:59
 * @LastEditTime: 2021-07-19 10:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/07_流读取写入/app.js
 */

const fs = require('fs')
let readStream = fs.createReadStream('./data/input.txt')

let count = 0
let str = ''

readStream.on('data',(data)=> {
  str += data
  count ++
})

readStream.on('end',()=> {
  console.log(str)
  console.log(count)
})

readStream.on('error',(err)=>{
  console.log(err)
})