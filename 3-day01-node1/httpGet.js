const http=require('https');
const fs=require('fs');
http.get('https://www.baidu.com/',res=>{
	const {statusCode}=res;
	let error;
	if(res.statusCode!==200){
		new Error('状态码不是200');
	}else if(!/^text\/html/.test(res.contentType)){
		new Error('文件格式不对');
	}
	if(error){
		console.log(error.message);
		res.resume();
		return;
	}
	res.setEncoding='utf8';
	let data='';
	res.on('data',d=>{
		data+=d;
	})
	console.log(data);
	res.on('end',()=>{
		fs.writeFileSync('./index.html',data);
	})
	res.on('error',(e)=>{
		console.log(`Got error:${e.message}`);
	})
})