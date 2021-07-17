
/*
 1. fs.stat   检测是文件还是目录
 2. fs.mkdir  创建目录
 3. fs.writeFile  创建写入文件
 4. fs.appendFile 追加文件
 5. fs.readFile 读取文件
 6. fs.readdir读取目录
 7. fs.rename 重命名 移动文件
 8. fs.rmdir  删除目录
 9. fs.unlink 删除文件

*/

const fs = require('fs');

// 1. fs.stat   检测是文件还是目录
/*
fs.stat('html', (err, data) => {
  if (err) console.log(err);
  console.log(`是文件：${data.isFile()}`);
  console.log(`是目录：${data.isDirectory()}`);
})
*/

/**
 * @description:  2、fs.mkdir  创建目录
 * @param { path } 将创建的目录路径
 * @param { mode } 目录权限（读写权限），默认777
 * @param { callback } 回调，传递异常参数err
 * @return {*}
 */

/*
fs.mkdir('./css',(err)=> {
  if (err) return console.log(err)
  console.log('创建成功！') 
  
})
*/

/**
 * @description: fs.wrireFile 创建写入文件
 * @param {filename} 文件名称
 * @param {data} (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
 * @param {options} (Object)           option数组对象，包含：
 * @param {callback}  回调，传递一个异常参数err。
 * @return {*}
 */
/*
fs.writeFile('./html//index.html','你好',(err)=> {
  if (err) return console.log(err);
  console.log('创建写入文件成功')
})
*/


/**
 * @description: fs.appendFile 追加文件
 * @param {*}
 * @return {*}
 */
/*
fs.appendFile('./css/base.css','h2{color:color:red}\n',(err)=> {
  if(err) return console.log(err)
  console.log('appendFile 成功')
})
*/


/**
 * @description: fs.readFile 读取文件
 * @param {*}
 * @return {*}
 */
/*
fs.readFile('./html/index.html',(err,data)=> {
  if(err) return console.log(err)
  console.log(data.toString()) //把Buffer 转化成string类型
})
*/

/**
 * @description: fs.readdir读取目录
 * @param {*}
 * @return {*}
 */
// fs.readdir('./html',(err,data)=> {
//   if (err) return console.log(err)
//   console.log(data)

// })


/**
 * @description: fs.rename 重命名   功能:1、表示重命名 2、移动文件
 * @param {*}
 * @return {*}
 */
/*
fs.rename('./html/appp.js','./html/index.html',(err)=> {
  if (err) return console.log(err)
  console.log('重命名成功')

})
*/

/**
 * @description: fs.rmdir  删除目录
 * @param {*}
 * @return {*}
 */

/*
fs.rmdir('./aaa',(err)=>  {
  if (err) return console.log(err)
  console.log('删除目录成功')
})
*/


/**
 * @description: fs.unlink 删除文件
 * @param {*}
 * @return {*}
 */
fs.unlink('./html/index.html',(err)=> {
  if (err) return console.log(err)
  console.log('删除w文件成功')
})
