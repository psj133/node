const express=require('express');
const app=express();
const db=require('../connect.js');
const user=require('../model.js');
const parser=require('body-parser')
app.use(parser.urlencoded({ extended: false }))
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
//  */
// app.post('/post',(req,res)=>{
//     let {us}=req.body;
//      user.find({us}).
//      then((data)=>{
//          if(data.length>=1){
//              res.send('注册成功')
//          }else{
//              return user.insertMany({us})
//          }
        
//      })
//     .then((data)=>{
//         res.send('注册成功')
//      })
//      .catch((err)=>{
//         res.send('注册失败')
//      })
// })
const home=require("./router/home.js");
const admin=require("./router/admin.js");
const upload=require("./router/upload.js");

app.use('/home',home);
app.use('/admin',admin);
app.use('/upload',upload);
app.listen(3009,'localhost',()=>{
    console.log('开启服务')
})