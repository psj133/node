var fs=require('fs');
function deleteDir(dir){
  var files=fs.readdirSync(dir);
  if(files.length==0){
  	 fs.rmdir(dir,(err)=>{
  	 	if(err) {throw err};
  	 	console.log('删除成功');
      });
  }else{
  	console.log("删除失败");
  }
}
deleteDir('./123');