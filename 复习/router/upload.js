const express=require('express');
const app=express();
const router=express.Router();
const fs=require('fs');
const path=require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
router.post('/img',upload.single('avatar'),(req,res)=>{
    console.log(req.file);
    fs.readFile(req.file.path,(err,data)=>{
        if(err) {return res.send('上传失败')}
        let time=new Date().getTime+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
        let extname=req.file.mimetype.split('/')[1];
        let name=time+'.'+extname;
        fs.writeFile(path.join(__dirname,'../public/img'+name),data,(err,data)=>{
            if(err) {return res.send('写入成功')}
            res.send('写入成功')
        })
    })
})

module.exports=router;