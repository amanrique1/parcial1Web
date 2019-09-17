const mongoose= require('mongoose');
const {Schema}=mongoose;
mongoose.set('useFindAndModify', false);

const Menu= new Schema({
    image:String,
    text:String
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports=mongoose.model('menu',Menu);