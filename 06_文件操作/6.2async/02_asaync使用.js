/*
 * @Author: your name
 * @Date: 2021-07-17 16:54:05
 * @LastEditTime: 2021-07-17 17:00:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/06_文件操作/6.2async/02_asaync使用.js
 */
async function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let name = '李元霸'
      resolve(name)
    }, 1000);
  })
}

async function main(){
  let data = await test()
  console.log(data)
}

main()