const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let userSchema=new Schema({
    us:{type:String,requuire:true}
})
let user=mongoose.model('children',userSchema);
module.exports=user;