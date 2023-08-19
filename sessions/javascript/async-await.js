
// function task1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("task1 started ")
//              console.log("task1 done ")
//              resolve()
//         },3000)
//     })
   
    
// }

// function task2(){
//     return new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task2 started ")
//         console.log("task2 done ")
//         resolve()
//     },5000)
// })
  
// }

// function task3(){
//     console.log("task3 started ")
//     console.log("task3 done ")
// }

//  async function performTask(){
//     await task1()
//     await task2()
//     task3()
// }
// performTask();



// async await exampe 2

function courseComplete(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("course started")
            console.log("course completed")
            resolve()
            
        },5000)
    })
    
    
}

function getCertificate(){
    console.log("got my certificate")
}


async function courseStart(){
   await courseComplete()
   console.log("after course done")
    getCertificate()
}
courseStart();

// courseComplete();
// getCertificate();



