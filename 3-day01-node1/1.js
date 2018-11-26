
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: '163', 
    port: 587,
    secure: true, 
    auth: {
        user:'13327301063@163.com',
        pass: '123456PSJ' 
    }
});

let mailOptions = {
    from: '"Fred Foo 👻" <13327301063@163.com>', // sender address
    to: '13327301063@163.com', // list of receivers
    subject: '欢迎注册 ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<h1>你好吗?</h1>' // html body
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});