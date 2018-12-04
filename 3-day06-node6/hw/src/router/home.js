const express=require('express');
const router=express.Router();
const Banner=require('../db/model.js')
router.get('/getBanner',(req,res)=>{
    Banner.find()
    .then((data)=>{
        res.send({err:0,msg:'查询ok',data:data})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'查询nook'})
    })  
})
module.exports=router;