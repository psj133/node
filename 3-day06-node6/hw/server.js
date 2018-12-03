const express=require('express');
const app=express();
const path=require('path');
const db=require('./src/db/connect.js')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//使用路由
const admin=require("./src/router/admin.js");
app.use('/admin',admin);
//配置静态资源目录
app.use(express.static(path.join(__dirname,'./static')))
app.listen(1000,()=>{
    console.log('服务开启');
})