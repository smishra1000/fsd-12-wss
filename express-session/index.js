const express = require("express")

const app = express();
var employess = [
    {
        id:1,
        name:"test1",
        age:30
    },
    {
        id:2,
        name:"test2",
        age:30
    },
    {
        id:3,
        name:"test3",
        age:45
    }
]

app.get("/",function(req,res){
    res.send("hello world from express default routes")
})
// app.get("/user_data",function(req,res){
//     res.send("hello from user data routes")
// })

// app.get("/employee_data",function(req,res){
//     res.send("hello from employee data routes")
// })

// app.get("/login",function(req,res){
//     res.send("hello from login routes")
// })

// app.get("/logout",function(req,res){
//     res.send("logut done")
// })

// app.get("/movies/2023",function(req,res){
//     res.send([{name:"thor"},{name:"abcd"}])
// })

app.get("/employees",function(req,res){
    res.send(employess)
})
app.get("/employeeById/:id",function(req,res){
    console.log(req.params)
    // res.send("employee by id routes")
    const data = employess.filter(function(emp){
        return emp.id===Number(req.params.id)
    })
    res.send(data)
})

app.listen(8000,function(){
    console.log("server started")
})
