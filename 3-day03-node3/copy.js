const fs=require('fs');
const zlib=require("zlib");
// fs.readFile("./a.txt",'utf8',(err,data)=>{
// 	if(err) {throw err};
// 	fs.writeFile('./a1.txt',data,(err)=>{
// 		if(err) {throw err};
// 		console.log('ok');
// 	})
// });
let readStream=fs.createReadStream('./a.txt');
// let data='';
// readStream.on('data',(chunk)=>{
// 	data+=chunk;
// })
// readStream.on('end',(err)=>{
// 	if(err) {throw err};
// 	fs.writeFileSync('./a2.txt', data);
// })
// let writeStream=fs.createWriteStream('./a3.txt');
// readStream.on('data',(chunk)=>{
// 	writeStream.write(chunk);
// })
// let writeStream=fs.createWriteStream('./a4.txt');
// readStream.pipe(writeStream);
let write=fs.createWriteStream('./a.gz');
readStream.pipe(zlib.createGzip()).pipe(write);