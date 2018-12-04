const express=require('express');
const router=express.Router();
const multer=require('multer');
const fs=require('fs');
const path=require('path');

    router.post('/img',multer({ dest: '/tmp/' }).single('test'),(req,res)=>{
        console.log(req.file);
        var filename=new Date().getTime()+parseInt(Math.random()*99999)+'.'+req.file.mimetype.split('/')[1]
        let dir='../../static/img';
         fs.readFile( req.file.path, function (err, data) {
              fs.writeFile(path.join(__dirname,dir,filename), data, function (err) {
                //   console.log(err)
                  if (err) {return res.send({err:-1,msg:'上传失败'})}
     
                   res.send({err:0,msg:'ok',data:'/img/'+filename})
              })
           })
        })

module.exports=router;