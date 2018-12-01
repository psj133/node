const express=require('express');
const router=express.Router();
router.get('/reg',(req,res)=>{
    res.send('home reg')
})
router.get('/login',(req,res)=>{
    res.send('home login')
})
module.exports=router;