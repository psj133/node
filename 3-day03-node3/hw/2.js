const bcrypt = require('bcrypt');
const saltRounds = 10;
const pass='psj13ssss';
// console.log(bcrypt.hash);
// bcrypt.genSalt(saltRounds, function(err, salt) {
    //console.time('test')
    bcrypt.hash(pass, 10, function(err, hash) {//hash  加密  参数二 复杂度
        // Store hash in your password DB.
        console.log(hash);
       let result= bcrypt.compareSync('qazwsx1234', hash);// 第一个参数 要比较的密码 第二个加密后的密码
       console.log(result)
        console.timeEnd('test')
    });
// });