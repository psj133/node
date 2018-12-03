const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/psj');
const db=mongoose.connection;
db.on('error',(err)=>{
    console.log('连接失败');
})
db.on('open',()=>{
    console.log('连接成功');
})
db.on('disconnected',()=>{
    console.log('断开连接');
})