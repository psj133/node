let a=1
let promise=new Promise((resolve,reject)=>{
    if(a==10){
        resolve('成功')
    }else{
        reject('失败')
    }
})
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
  */
promise.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})