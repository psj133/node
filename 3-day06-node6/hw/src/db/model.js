const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let BannerSchema=new Schema({
    imgPath:{type:String,required:true},
    url:{type:String,required:true},
    name:{type:String,required:true}
})
let model=mongoose.model('Banner',BannerSchema);
module.exports=model;