/*
 * @Author: your name
 * @Date: 2021-07-17 16:45:48
 * @LastEditTime: 2021-07-17 16:57:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/06_文件操作/6.2async/01_es6特性.js
 */

// 1. let const的使用     let和 var是一样的用来定义变量
if (true) {
  let a = 123
}
console.log(a)

// 2.Promise来处理异步  resolve 成功的回调函数   reject失败的回调函数

let  p = new Promise((resolve,reject)=> {
  setTimeout(() => {
    let name = '张三'
    if (Math.random()<0.7) {
      resolve(name)
    }else {
      reject('失败')
    }
  }, 1000);
})
p.then((data)=> {
  console.log(data)
})

