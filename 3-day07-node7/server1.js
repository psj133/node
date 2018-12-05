const app=require('express')();
const user=require('./router/user.js');
app.use('/user',user);
app.listen(3000,()=>{
    console.log('开启服务');
})