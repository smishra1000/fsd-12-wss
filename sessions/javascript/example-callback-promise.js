// // example of call back based code

// function courseComplete(fn){
//     setTimeout(function(){
//         console.log("course started")
//         console.log("course inprogress")
//         console.log("cpurse completed")
//         fn();
//     },5000)
// }

// function displayCertificate(){
//     console.log("certificate released for that course")
// }

// courseComplete(displayCertificate);
// //displayCertificate();

// using promise based code  
function courseComplete(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("course started")
            console.log("course inprogress")
            console.log("course completed")
            resolve();
        },5000)
    })
}

function displayCertificate(){
    console.log("certificate released for that course")
}

courseComplete().then(function(){
    displayCertificate();
}).catch(function(err){
    console.log("some thing wentbwrong course not completed")
})