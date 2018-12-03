const app=require('express')();
const home=require("./home.js");
const upload=require("./upload.js");

app.use('/home',home);
app.use('/upload',upload);
app.listen(3002,'localhost',()=>{
    console.log('开启服务');
})