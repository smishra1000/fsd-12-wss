const http = require("http");

const server = http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':"text/plain"})
    // res.end("hello from node server")
    console.log(req)
    if(req.url==="/employee"){
        res.writeHead(200,{'Content-Type':"text/plain"})
        res.end("hello from employee")
    }else if(req.url==="/user"){
        res.writeHead(200,{'Content-Type':"text/plain"})
        res.end("hello from user")
    }
})

server.listen(8000)