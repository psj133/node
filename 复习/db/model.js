const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let userSchema=new Schema({
    us:{type:String,required:true}
})
let user=mongoose.model('us',userSchema);
module.exports=user;