const EventEmitter = require("events")

const login = new EventEmitter();

login.on("login",function(data){
    console.log("started login",data)
})

login.on("success",function(){
    console.log("login successfully")
})

login.emit("login","sameer")
login.emit("success")

setTimeout(()=>{
    console.log("i ams setttimeout")
},2000)

