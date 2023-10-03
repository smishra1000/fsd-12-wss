const express = require("express")
const router = express.Router();

router.post("/create_compny",function(req,res){
    res.send("compny create routes")
})

module.exports = router