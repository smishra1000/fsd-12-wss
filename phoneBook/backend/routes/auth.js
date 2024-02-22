const express = require("express");
const router = express.Router();
const AuthModel = require("../models/auth")


router.post("/login",async function(req,res){
   const {email,password} = req.body;
   let isUserExist = await AuthModel.findOne({email:email})
   if(isUserExist){
    if(password===isUserExist.password){
        return res.send({message:"Login successfully",success:true,user:isUserExist})
    }else{
        return res.send({message:"Invalid Credentials",success:false})
    }
   }else{
    return res.send({message:"Email Not found",success:false})
   }
})

router.post("/signup",async function(req,res){
    const {email,password} = req.body;
    let isUserExist = await AuthModel.findOne({email:email})
    if(isUserExist){
        return res.send({message:"Email alredy exist",success:false})
    }else{
        let newUser = new AuthModel({...req.body});
        let createdUser = await newUser.save()
        return res.send({message:"Signup Successfully",success:true})
    }
})

module.exports = router;