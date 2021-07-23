/*
 * @Author: your name
 * @Date: 2021-07-23 18:18:51
 * @LastEditTime: 2021-07-23 18:23:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/02_express_router.js
 */
let G ={}
let app = (req,res)=> {
  if (G['/login']) {
    G['/login'](req, res);  //执行方法
  }
}

app.get = (str,cb)=> {
  G[str] = cb
}

app.get('/login',(req,res)=>{
  console.log('执行login方法')
})
