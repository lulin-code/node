/*
 * @Author: your name
 * @Date: 2021-07-19 09:55:59
 * @LastEditTime: 2021-07-19 10:20:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/07_流读取写入/app.js
 */

const fs = require('fs')

let str = ''
for (let i = 0; i < 1000; i++) {
  str += '我是从数据库获取的数据，我要保存起来'
}

let writeStream = fs.createWriteStream('./data/output.txt')
writeStream.write(str)

writeStream.end();  //标记文件末尾

writeStream.on('finish',()=> {
  console.log('写入成功')
})

