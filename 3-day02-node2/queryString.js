let qs=require('querystring');
// let str="user=psj?sex=m";
// console.log(qs.parse(str,'?'));
// let obj={
// 	a:1,
// 	b:2
// }
// console.log(qs.stringify(obj,'@',"="));
let str="aaa=腾讯";
console.log(qs.escape(str));
console.log(qs.unescape(qs.escape(str)));