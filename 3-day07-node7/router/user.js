const express=require('express');
const router=express.Router();
const abc=require("../controller/controll.js");
console.log(abc);
router.get('/get',abc.fnc)
module.exports=router;
