const express=require('express');
const router=express.Router();
router.get('/reg',(req,res)=>{
    res.send('admin reg')
})
router.get('/login',(req,res)=>{
    res.send('admin login')
})
module.exports=router;