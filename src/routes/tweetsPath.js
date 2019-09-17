const express=require("express");
const router= express.Router();

const Tweet=require('../models/tweets');

router.get('/',async (req,res)=>{
    const tweets=await Tweet.find();
    res.json(tweets);
});

module.exports=router;