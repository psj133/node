const express=require('express');
const router=express.Router();
const fs=require("fs");
const path=require('path');
const multer=require('multer');
const upload=multer({dest:'uploads/'})
router.post('/img',upload.single('avatar'),(req,res)=>{
    console.log(req.file);
    fs.readFile(req.file.path,(err,data)=>{
        if(err) {return res.send('上传失败')}
        let time=new Date().getTime+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
        let extname=req.file.mimetype.split("/")[1];
        let name=time+'.'+extname;
        fs.appendFile(path.join(__dirname,'../../static/img'+name),data,(err)=>{
            if(err) {return res.send('写入失败')}
            res.send('写入成功')
        })
    })
    // res.send('ok');
});
module.exports=router;