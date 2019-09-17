const express=require("express");
const router= express.Router();

const ToFollow=require('../models/toFollow');

router.get('/',async (req,res)=>{
    const seguir=await ToFollow.find();
    res.json(seguir);
});

module.exports=router;