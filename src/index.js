const express= require("express");
const mongoose=require("mongoose");

const app=express();
mongoose.connect('mongodb://localhost:27017/parcial1Web', {useNewUrlParser: true,useUnifiedTopology: true })
.then(db=>console.log('DB is connected'))
.catch(err=> console.error(err));

//Settings
app.set('port',process.env.PORT ||3001);

//Middlewares
app.use(express.json());

//Routes
app.use('/menu',require('./routes/menuPath'));
app.use('/toFollow',require('./routes/toFollowPath'));
app.use('/trends',require('./routes/trendsPath'));
app.use('/tweets',require('./routes/tweetsPath'));

//Static files
app.use(express.static(__dirname+'/public'));

//Server listener
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});