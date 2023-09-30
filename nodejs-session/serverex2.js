const http  = require("http")
const fs = require("fs")

const server = http.createServer(function(req,res){
    if(req.url==="/employee_data"){
        fs.writeFile("employeedata.txt","hello from employee data file",function(err){
            if(err){
                console.log(err)
            }
        fs.readFile("employeedata.txt","utf-8",function(err,data){
            if(err){
                console.log(err)
            }
            res.writeHead(200, {'Content-Type':"text/palin"})
            return res.end(data)
        })    
        })
    }else if(req.url==="/user_data"){
        fs.writeFile("userdata.txt","hello from user data file",function(err){
            if(err){
                console.log(err)
            }
        fs.readFile("userdata.txt","utf-8",function(err,data){
            if(err){
                console.log(err)
            }
            res.writeHead(200, {'Content-Type':"text/palin"})
            return res.end(data)
        })    
        })
    }else if(req.url==="/user/account/you"){
        res.writeHead(200, {'Content-Type':"text/palin"})
            return res.end("sameer mishra info")
    }
    else{
        res.writeHead(404, {'Content-Type':"text/palin"})
            return res.end()
    }
   
})

server.listen(8000)