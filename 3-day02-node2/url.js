let url=require('url');
let str="http://www.taobao.com:8080/home/test?name=psj&age=21#hash";
let obj=url.parse(str);
let str1=url.format(obj);
console.log(str1);
