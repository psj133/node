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
module.exports=mail;