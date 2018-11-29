const fs=require('fs');
const path=require('path');
let target=path.join(__dirname,'../');
function  loadtree(target,deep) {
	let prev=new Array(deep).join(' |');
	let dirinfo=fs.readdirSync(target);
	let dur=[];
	let files=[];
	for(let i in dirinfo){
		let stat=fs.statSync(path.join(target,dirinfo[i]));
		if(stat.isFile()){
			files.push(dirinfo[i]);
		}else{
			dur.push(dirinfo[i]);
		}
	}
	  for (let i = 0; i < dur.length; i++) {
     console.log(`${prev} ├─ ${dur[i]}`)
 
     let nextPath=path.join(target,dur[i])
     let nextdeep=deep+1
     loadtree(nextPath,nextdeep)
   
  }
  // 文件操作
  for (let i =files.length-1 ; i >= 0; i--) {
     if (i===0) {
       console.log(`${prev} └ ${files[i]}`)
     }else{
       console.log(`${prev} ├ ${files[i]}`)
     }
    
  }
}
loadtree(target,1);