const express = require("express");
// const app = express();

const router = express.Router();

router.get("/getall",function(req,res){
    res.send("all users")
})

router.get("/byId/:id",function(req,res){
    res.send("user by id")
})

router.post("/create",function(req,res){
    res.send("users creation routes")
})

module.exports = router


