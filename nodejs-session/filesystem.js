const fs = require('fs');


/** writing file */
// fs.writeFile("greet.txt","hello good moring",function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log("file written successfully")
// })

/***  Reading file  */

// fs.readFile("greet.txt","utf-8", function(err,fileData){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(fileData)
//     }
// })


/** append file */

fs.appendFile("greet.txt"," updated text at the end",function(err){
    if(err){
        console.log(err)
    }
    console.log("file appended successfully")
})

/** delete file */

fs.unlink("greet.txt",function(err){
    if(err){
        console.log(err)
    }
    console.log("file deleted successfully")
})
