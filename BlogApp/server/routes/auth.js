const express = require("express");
const router = express.Router();
const AuthModel = require("../models/auth")

router.post("/signup",async function(req,res){
    // implement the signup
    let user = await AuthModel.findOne({email:req.body.email})
    console.log(user)
    if(user && user.email){
        res.send({msg:"email already exist"})
    }else{
        const user = new AuthModel(req.body)
        const result = await user.save()
        res.send("signup suucessfully")
    }

})

router.post("/login",async function(req,res){
    // implement the login functionality
    let user = await AuthModel.findOne({email:req.body.email})
    if(user && user.email){
        if(user.password===req.body.password){
            res.send({msg:"login successfully",success:true})
        }else{
            res.send({msg:"wrong credentilas",success:false})
        }
    }else{
        res.send({msg:"user not exist",success:false})
    }
})

module.exports = router;

