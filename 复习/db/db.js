const express=require('express')
const app=express();
const connect=require('./connect.js');
const user=require('./model.js');
app.listen(3003,'localhost',()=>{
    console.log('开启服务');
})