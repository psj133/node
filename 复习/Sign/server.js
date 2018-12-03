const app=require('express')();
const url=require('url');
const fs=require('fs');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/login',(req,res)=>{
  let query=url.parse(req.url).query;
  fs.appendFileSync('./a.txt',query);
})
app.post('/reg',(req,res)=>{
    let {username,password}=req.body;
    fs.readFile('./a.txt','utf8',(err,data)=>{
        if(data.split("&")[0].split('=')[1]==username&&data.split("&")[1].split('=')[1]==password){
            res.send('ok');
        }else{
            res.send('failed');
        };
    })
})
app.listen(3000,'localhost',()=>{
    console.log('开启服务');
})