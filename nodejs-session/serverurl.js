const http = require("http")

const server = http.createServer(function(req,res){
    if(req.url==="/movies/2022"){
        res.writeHead(200, {'Content-Type':"text/plain"})
        return res.end("movies of 2022")
    }else if(req.url==="/movies/2023"){
        res.writeHead(200, {'Content-Type':"text/plainn"})
        return res.end("movies of 2023")
    }else{
        res.writeHead(200, {'Content-Type':"text/plain"})
        return res.end("no movie found")
    }
})

server.listen(8000)