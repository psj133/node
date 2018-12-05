const express=require('express');
const path=require('path')
const app=express();
const cors=require('cors');
app.use(cors());
const db=require('./src/db/connect.js')
//post 配置
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//配置静态目录
app.use(express.static(path.join(__dirname,'./static')))
// 路由相关
const admin=require('./src/router/admin.js')
const home=require('./src/router/home.js')
const upload=require('./src/router/upload.js')
app.use('/admin',admin)
app.use('/home',home)
app.use('/upload',upload)

app.listen(3001,()=>{
	console.log('服务器启动')
})