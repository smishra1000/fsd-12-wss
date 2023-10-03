const express = require("express")

const cors = require("cors")

const app = express();
app.use(cors())

const emplyeeRoutes = require("./routes/employee")


app.use("/employees",emplyeeRoutes)

app.listen(8001,function(){
    console.log("server is running")
})

