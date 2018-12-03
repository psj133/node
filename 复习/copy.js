const fs=require('fs');
// fs.writeFileSync('./a.txt',"aaaa");
// fs.readFile('./a.txt','utf8',(err,data)=>{
//     fs.writeFileSync("./b.txt",data);
// })

let readStream=fs.createReadStream('./a.txt');
let writeStream=fs.createWriteStream('./d.txt');
// let data="";
// readStream.on('data',(chunk)=>{
//   data+=chunk;
// })
// readStream.on('end',()=>{
//     fs.writeFileSync('./c.txt',data);
// })
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
})