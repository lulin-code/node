/*
 * @Author: your name
 * @Date: 2021-07-17 17:00:46
 * @LastEditTime: 2021-07-17 17:12:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/06_文件操作/6.2async/app.js
 */
//练习：wwwroot文件夹下面有images css js 以及index.html , 找出 wwwroot目录下面的所有的目录，然后放在一个数组中

const fs = require('fs')

// 判断资源是目录还是文件
async function isDir(path) {
  return new Promise((resolve,reject)=>{
    fs.stat(path, (error, stats)=> {
      if (error) {
         console.log(error);
         reject(error)
         return
      }
      if (stats.isDirectory()) {
        resolve(true)
      }else {
        resolve(false)
      }
    })
  })
}

// 获取所有资源  循环遍历
function main() {
  let path = './wwwroot'
  let dirArr = [];
  fs.readdir(path,async (err,data)=> {
    if (err) return console.log(err)
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (await isDir(path + '/' + element)) {
        dirArr.push(element)
      }
    }
    console.log(dirArr)
  })
}

main()