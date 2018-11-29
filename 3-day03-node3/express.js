const app=require('express')();
const url=require('url');
const fs=require('fs');
const path=require('path');
const parser=require('body-parser')
const cors=require('cors');
app.use(cors());
app.use(parser.urlencoded({ extended: false }))
app.get('/home',(req,res)=>{
	let data=url.parse(req.url).search;
	fs.appendFile(path.join(__dirname,'./b.txt'), data, 'utf8', (err)=>{
		if(err) { return res.send('注册失败')}
			res.send('注册成功')
	});
	
})
app.get('/reg',(req,res)=>{
	let query=url.parse(req.url).query;
	fs.readFile(path.join(__dirname,'./b.txt'), 'utf8', (err,data)=>{
		if(err) {return res.send('登录失败')}
			let arr=data.split('?');
		if(arr.indexOf(query)===-1){
			res.send('没有该用户')
		}else{
			res.send('登陆成功')
		}
	});
	
})
// app.post('/test',(req,res)=>{
//     console.log(req.body)
// 	res.send('ok')
// })
app.listen(1000,()=>{
	console.log('Example app listening on port 1000!')
})