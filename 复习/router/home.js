const express=require('express');
const router=express.Router();
router.get('/login1',(req,res)=>{
    res.send('ok');
})
module.exports=router;