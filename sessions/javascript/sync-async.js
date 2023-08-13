// console.log("1")
// console.log("2")
// console.log("3")

// function fun1(){
//     console.log("hi i am fun1") ; //there is some heavy logic taking time 5 min
// }

// function fun2(){
//     console.log("hi i am fun2")
// }

// function fun3(){
//     console.log("hi i am fun3")
// }

// setTimeout(function(){
//     fun1()
// },3000)

// fun2()
// fun3()

// console.log("1")

// setTimeout(function(){
//     console.log("2")
// },0)

// setTimeout(function(){
//     console.log("4")
// },1000)

// console.log("3")

// console.log("5")

// function orderItem(callback){
//     // this is length function taking time to excute
//     setTimeout(function(){
//         console.log("ordred placed successufully")
//         callback()
//     },3000)
    
// }

// function payNow(){
//     console.log("payment started")
//     console.log("payment done")
// }

// function listenMusic(){
//     console.log("palying music")
// }

// orderItem(payNow)
// // payNow()

// listenMusic()

// getusers displayUsers

function getUsers(fun){
    setTimeout(function(){
        console.log("getting users")
        fun()
        return {
            id:1,
            name:"sameer"
        }
       
    },4000)
   
}

function displayUsers(){
    console.log("displaying users")
}


getUsers(displayUsers);
//displayUsers();