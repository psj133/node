const mongoose=require('mongoose');
let Schema=mongoose.Schema;
let BannnerSchema=new Schema({
    imgPath:{type:String,required:true},
    name:{type:String,required:true},
    url:{type:String,required:true},
    push:{type:Boolean,default:false}//发布状态,默认不发布
})
let model=mongoose.model('Banner',BannnerSchema);
module.exports=model;