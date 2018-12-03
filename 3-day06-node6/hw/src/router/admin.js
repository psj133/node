const express=require('express');
const router=express.Router();
const Banner=require('../db/model.js');
router.get('/getBanner',(req,res)=>{
    Banner.find()
    .then((data)=>{
        res.send({err:0,msg:'查询成功',data:data})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'查询失败'})
    })
})
router.post('/delBanner',(req,res)=>{
    let id=req.body.id;
    Banner.remove({_id:id})
    .then((data)=>{
        res.send({err:0,msg:'删除成功'})
    })
    .catch((err)=>{
     res.send({err:-1,msg:'删除失败'})
    })
})
router.post('/addBanner',(req,res)=>{
//    let data={
//     imgPath:{type:String,required:true},
//     url:{type:String,required:true},
//     name:{type:String,required:true}
//    }
   let{imgPath,url,name}=req.body
   Banner.insertMany({imgPath,url,name})
   .then((data)=>{
       res.send({err:0,msg:'添加成功'})
   })
   .catch((err)=>{
    res.send({err:-1,msg:'添加失败'})
   })
})
router.post('/updateBanner',(req,res)=>{
    let{id,imgPath,url,name}=req.body
    Banner.update({_id:id},{imgPath,url,name})
    .then((data)=>{
        res.send({err:0,msg:'修改成功'})
    })
    .catch((err)=>{
     res.send({err:-1,msg:'修改失败'})
    })
})
module.exports=router;