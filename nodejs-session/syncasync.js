const fs = require("fs");

console.log("start")

// fs.readFile("employeedata.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

let data = fs.readFileSync("employeedata.txt","utf-8")
console.log(data)
console.log("file read done")