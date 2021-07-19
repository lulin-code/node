/*
 * @Author: your name
 * @Date: 2021-07-19 09:55:59
 * @LastEditTime: 2021-07-19 10:23:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/07_流读取写入/app.js
 */

// 管道流

const fs = require('fs')

let readStream = fs.createReadStream('./data/aaa.jpg')
let writeStream = fs.createWriteStream('./aaa.jpg')

readStream.pipe(writeStream)

