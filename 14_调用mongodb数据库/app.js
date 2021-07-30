/*
 * @Author: your name
 * @Date: 2021-07-30 13:56:11
 * @LastEditTime: 2021-07-30 15:51:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/14_调用mongodb数据库/app.js
 */
// 引入mongo
const {MongoClient} = require('mongodb')
// 定义数据库连接的地址
const url = 'mongodb://127.0.0.1:27017'
// 定义要操作的数据库
const dbName = 'itying'
// 实例化MongoClient 传入数据库连接地址
const client = new MongoClient(url)
// 连接数据库
client.connect((err)=> {
  if (err) {
    console.log(err)
    return;
  }
  console.log('数据库连接成功')
  // 选择数据库
  let db = client.db(dbName)

  //1.查找数据
  // db.collection('user').find({'age':'16'}).toArray((err,data)=> {
  //   console.log(data)
  //   // 关闭数据库
  //   client.close()
  // })

  // 2.增加数据
  // db.collection('user').insertOne({'username':'node操作数据库','age':18},(err,result)=> {
  //   if (err) {
  //     console.log(err)
  //     return;
  //   } 
  //   console.log(result)
  // })

  // 3.修改数据
  // db.collection('user').updateOne({'username':'张三'},{$set:{'age':20}},(err,result)=> {
  //   if (err) {
  //     console.log(err)
  //   }
  //   console.log('修改成功')
  //   console.log(result)
  //   client.close()
  // })

  // 4.删除一条数据
  // db.collection('user').deleteOne({'username':'node操作数据库'},(err,result)=>{
  //   if (err) {
  //     console.log(err)
  //     return
  //   }
  //   console.log('成功删除一条数据')
  //   client.close()
  // } )

   
})


