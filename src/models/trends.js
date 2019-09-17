const mongoose= require('mongoose');
const {Schema}=mongoose;
mongoose.set('useFindAndModify', false);

const Trend= new Schema({
    hashtag:String,
    teweets:Number
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports=mongoose.model('trends',Trend);