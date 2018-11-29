const nodemailer = require('nodemailer');
function mail(content,email,pass){
let transporter = nodemailer.createTransport({
    service: '163'||'qq', 
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
var num=Math.random().toString(36).substring(3,7);
const app=require('express')();
const url=require('url');
const cors=require('cors');
const fs=require('fs');
app.use(cors());
app.get('/send',(req,res)=>{
   var mails=url.parse(req.url).search.split('?')[1];
   mail(num,mails,'123456PSJ');
   fs.appendFile('./num.txt',num,(err)=>{
        if(err) {throw err};
   });
})
app.get('/rec',(req,res)=>{
    var statu=url.parse(req.url).query.split('=')[1];
    fs.readFile('./num.txt','utf8', (error,data)=>{
       if(data.indexOf(statu)===-1){
         res.send({err:1,msg:'验证码不对'});
       }else{
          res.send({err:0,msg:'验证成功'});
       }
    });
})
app.get('/reg',(req,res)=>{
    let search=url.parse(req.url).search;
    fs.appendFile('./info.txt', search,'utf8', (err)=>{
        if(err) {return res.send({err:1,msg:'注册失败'})};
        res.send({err:0,msg:'注册成功'})
    });
})
app.get('/login',(req,res)=>{
    let query=url.parse(req.url).search;
    fs.readFile('./info.txt','utf8', (err,data)=>{
        if(err) { return res.send({err:1,msg:"登录失败"})}
        if(data.indexOf(query)===-1){
            res.send({err:-1,msg:"用户名密码错误"})
        }else{
             res.send({err:0,msg:"登陆成功"})
        }
    });
})
app.listen(1001,()=>{
    console.log('Example app listening on port 1001!')
})
