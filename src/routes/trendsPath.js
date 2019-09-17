const express=require("express");
const router= express.Router();

const Trend=require('../models/trends');

router.get('/',async (req,res)=>{
    const trends=await Trend.find();
    res.json(trends);
});

module.exports=router;