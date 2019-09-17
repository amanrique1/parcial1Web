const mongoose= require('mongoose');
const {Schema}=mongoose;
mongoose.set('useFindAndModify', false);

const ToFollow= new Schema({
    avatar:String,
    first_name:String,
    last_name:String,
    nick:String
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports=mongoose.model('toFollow',ToFollow);