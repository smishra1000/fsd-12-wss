const express = require("express")

const router = express.Router();

const employess = [
    {
        id:1,
        name:"test1",
        age:20,
        email:"test1@gmail.com"
    },
    {
        id:2,
        name:"test2",
        age:22,
        email:"test2@gmail.com"
    },
    {
        id:3,
        name:"test3",
        age:24,
        email:"test3@gmail.com"
    },
    {
        id:4,
        name:"test4",
        age:20,
        email:"test4@gmail.com"
    },
    {
        id:5,
        name:"test5",
        age:20,
        email:"test5@gmail.com"
    },
    {
        id:6,
        name:"test6",
        age:35,
        email:"test6@gmail.com"
    }
]
router.get("/all",function(req,res){
    res.send(employess)
})

module.exports = router