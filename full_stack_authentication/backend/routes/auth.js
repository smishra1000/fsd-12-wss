const express = require("express");
const router = express.Router();
const AuthModel = require("../models/auth")
const jwt = require("jsonwebtoken")

router.post("/signup", async function(req,res){
    //code for signup
    let user = await AuthModel.findOne({email:req.body.email})
    if(user && user.email){
        res.send({msg:"email already exist"})
    }else{
        const user = new AuthModel(req.body)
        const result = await user.save()
        res.send({msg:"signup successfully"})
    }
})


router.post("/login", async function(req,res){
    //code for login
    let user = await AuthModel.findOne({email:req.body.email})
    if(user && user.email){
        if(user.password===req.body.password){
            const token = jwt.sign({id:user._id,email:user.email,role:user.role},"testkey");
            res.send({msg:"login successfully",success:true,token:token})
        }else{
            res.send({msg:"wrong credentilas",success:false})
        }
    }else{
        res.send({msg:"user not exist",success:false})
    }
})
function isHeLoggedIn(req,res,next){
    if(req.headers && req.headers.authorization){
        let token = req.headers.authorization
        let decodedToken = jwt.verify(token,"testkey")
       if(decodedToken.role==="superadmin"){
        // req.user=decodedToken
            next()
       }else{
        res.send({msg:"You dont have access to users "})
       }
    }
    
}

router.get("/users", isHeLoggedIn,async function(req,res){
    let users = await AuthModel.find({})
    res.send(users)
})

function isHePaidUser(req,res,next){
    let paid = true
    if(paid===true){
        next()
    }else{
        res.send("plase make subscription to access content")
    }
}

router.get("/premmium_content", isHePaidUser,function(req,res){
res.send("you can watch now peremimum")
    
})

router.get("/normal_content",function(req,res){
    res.send("please watch movie")
})

module.exports = router