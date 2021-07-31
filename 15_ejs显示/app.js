/*
 * @Author: your name
 * @Date: 2021-07-30 17:59:39
 * @LastEditTime: 2021-07-31 11:56:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Node/15_ejs显示/app.js
 */
const http = require("http");
const app = require('./data/module/route');
const ejs = require("ejs");
const querystring = require('querystring')
const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'itying'

http.createServer(app).listen(3000);

app.get('/',(req,res)=> {
  MongoClient.connect(url, { useUnifiedTopology: true },(err,client)=> {
    if (err) {
      console.log(err) 
      return;
    }
    let db = client.db(dbName)

    // 查询数据库
    db.collection('user').find({}).toArray((err, result) => {
      if (err) {
        console.log(err)
        return
      }
      client.close()
      ejs.renderFile('./views/index.ejs', {
        list: result
      }, (err,data) => {
        res.send(data)
      })
    })
  })
})

app.get('/register',(req, res)=> {
  ejs.renderFile('./views/register.ejs',{},(err,data)=> {
    res.send(data);
  })
})

app.post('/doRegister',(req,res)=> {
  let body = querystring.parse(req.body)
  MongoClient.connect(url,{useUnifiedTopology: true}, (err,client)=> {
    if (err) {
      console.log(err)
      return
    }
    let db = client.db(dbName)
    db.collection('user').insertOne(body,(err,result)=> {
      if (err) {
        console.log(err)
        return
      }
      console.log('增加数据成功')
      res.send('增加数据成功')
    })
  })
})

console.log('Server running at http://127.0.0.1:3000/');

