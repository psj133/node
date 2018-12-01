const app=require('express')();
const cors=require('cors');
const mongodb=require('mongodb').MongoClient;
const urls=require('url');
const url="mongodb://localhost:27017"
const name='local';
var num=Math.random().toString(36).substring(3,7);
app.use(cors());
const nodemailer = require('nodemailer');
function mail(content,email,pass){
let transporter = nodemailer.createTransport({
    service: '163', 
    port: 587,
    secure: true, 
    auth: {
        user:email,
        pass: pass 
    }
});

let mailOptions = {
    from: `"Fred Foo 👻"`+`${"<"}${email}${">"}`, // sender address
    to:email , // list of receivers
    subject: ` ${content}${"✔"}`, // Subject line
    text: 'Hello world?', // plain text body
    html: `<h1>${content}</h1>` // html body
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
}
app.get('/reg',(req,res)=>{
    let query=urls.parse(req.url).query;
    mongodb.connect(url, { useNewUrlParser: true }, function(err, client) {
        console.log('连接成功');
        const db = client.db(name);
         function getData(){
            return new Promise((resolve,reject)=>{
                db.collection('info').find({query:query}).toArray((err,data)=>{
                    if(data.length!==0){
                        reject({err:1,msg:'注册失败'});
                    }else{
                        resolve({err:0,msg:'注测成功'})
                    }
                })
            })
        }
        
        function pushData(){
            return new Promise((resolve,reject)=>{
                db.collection('info').insertOne({query:query},(err,result)=>{
                    if(err){
                        reject("插入失败");
                    }else{
                        resolve('插入成功')
                    }
                })
            })
        }
        getData()
        .then((data)=>{
            res.send(data);
            return pushData();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    });
    
})
app.get('/login',(req,res)=>{
    let search=urls.parse(req.url).query;
    mongodb.connect(url, { useNewUrlParser: true }, function(err, client) {
        console.log('连接成功');
        const db = client.db(name);
        db.collection('info').find({query:search}).toArray((err,data)=>{
            if(err) {return res.send({err:1,msg:"登录失败"})}
            if(data.length!==0){
                res.send({err:0,msg:"登录成功"})
            }else{
                res.send({err:-1,msg:"用户名密码错误"})
            }
        })
    })
})
app.get('/mail',(req,res)=>{
    let mails=urls.parse(req.url).query;
    // mail(num,mails,"123456PSJ");
    mongodb.connect(url,{ useNewUrlParser: true },(err,client)=>{
        console.log('成功')
        const db = client.db(name);
        db.collection('num').insertOne({num:num},(err)=>{
           console.log("ok");
        })
    })
})
app.get('/rec',(req,res)=>{
    let code=urls.parse(req.url).query.split('=')[1];
    console.log(code);
    mongodb.connect(url,{ useNewUrlParser: true },(err,client)=>{
        console.log('成功')
        const db = client.db(name);
        db.collection('num').find({num:code}).toArray((err,data)=>{
            if(data.length!==0){
                res.send({err:0,msg:'成功'})
            }else{
                res.send({err:1,msg:'失败'})
            }
        })
    })
   
})
app.listen(1015,'10.9.48.165',()=>{
    console.log('开启服务');
})