const express=require('express');
const router=express.Router();

const Banner=require('../db/model.js');
router.get('/getBanner',(req,res)=>{
	Banner.find()
	.then((data)=>{
		res.send({err:0,msg:'查询ok',data:data})
	})
	.catch((err)=>{
		res.send({err:-1,msg:'查询nook'})
	})
})
router.post('/getBannerById',(req,res)=>{
	let id=req.body.id;
	Banner.find({_id:id})
	.then((data)=>{
		res.send({err:0,msg:'查询ok',data:data})
	})
	.catch((err)=>{
		res.send({err:-1,msg:'查询nook'})
	})
})
router.post('/delBanner',(req,res)=>{
	let id=req.body.id
	Banner.remove({_id:id})
	.then((data)=>{
    	res.send({err:0,msg:'删除ok'})
    })
    .catch((err)=>{
    	res.send({err:-1,msg:'删除nook'})
    })
})
router.post('/delBanners',(req,res)=>{
	let id=req.body.id
	Banner.remove({_id:{$in:[id1,id2,id3]}})
	.then((data)=>{
    	res.send({err:0,msg:'删除ok'})
    })
    .catch((err)=>{
    	res.send({err:-1,msg:'删除nook'})
    })
})

router.post('/addBanner',(req,res)=>{
	// let data={
	// 		imgPath:'/img/banner-1a.png',
	// 		url:'www.baidu.conm',
	// 		name:'怎么吃最好'
	//      }
	let {imgPath,url,name}=req.body
    Banner.insertMany({imgPath,url,name})
    .then((data)=>{
    	res.send({err:0,msg:'添加ok'})
    })
    .catch((err)=>{
    	res.send({err:-1,msg:'添加nook'})
    })
})
router.post('/updateBanner',(req,res)=>{
	let {id,imgPath,url,name}=req.body
	Banner.update({_id:id},{imgPath,url,name})
	.then((data)=>{
    	res.send({err:0,msg:'修改ok'})
    })
    .catch((err)=>{
    	res.send({err:-1,msg:'修改nook'})
    })
})
router.post('/pushBanner',(req,res)=>{
	let {id,push}=req.body
	Banner.update({_id:id},{push})
	.then((data)=>{
    	res.send({err:0,msg:'发布ok'})
    })
    .catch((err)=>{
    	res.send({err:-1,msg:'发布nook'})
    })
})
module.exports=router