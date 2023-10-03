// const express = require("express")
// const app = express();
// const userRouter = require("./routes/user")
// const companyRoutes = require("./routes/company")
// var logggedIn = true
// var apiKey = "dd1234"
// // function checkUserLogin(req, res, next) {
// //     if (logggedIn === true) {
// //         next()
// //     } else {
// //         res.send("not looged in you are not autherized")
// //     }
// // }

// function checkValidApiKey(req,res,next){
// console.log(req.params)
// if(req.params.apikey===apiKey){
//     next()
// }else{
//     res.send("not valid api key")
// }
// }

// //app.use(checkValidApiKey)

// app.use("/users", userRouter)
// app.use("/company", companyRoutes)


// app.get("/wheather/:city/:apikey",checkValidApiKey,function(req,res){
//     res.send(`temparature of ${req.params.city} is 30deg`)
// })

// app.listen(8000, function () {
//     console.log("server started")
// })

// // localhost:8000/users/byid
// // localhost:8000/users/create
// // localhost:8000/users/update
