const mongoose= require('mongoose');
const {Schema}=mongoose;
mongoose.set('useFindAndModify', false);

const Tweet= new Schema({
    avatar:String,
    first_name:String,
    last_name:String,
    nick:String,
    date:String,
    content:String

},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports=mongoose.model('tweets',Tweet);