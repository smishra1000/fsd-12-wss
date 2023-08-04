// // dynamic scoping

// // var user = {
// //     id:101,
// //     name:"test1",
// //     email:"test1@gmail.com",
// //     address:"hyd",
// //     showInfo:function (){
// //         console.log("user info=",user.name,user.email)
// //     }
// // }

// var user2 = {
//     id:102,
//     name:"test2",
//     email:"test2@gmail.com",
//     address:"blr",
//     showInfo:function (){
//         console.log("user info=",this.name,this.email)
//     }
// }

// var user3 = {
//     id:102,
//     name:"test2",
//     email:"test2@gmail.com",
//     address:"blr",
//     showInfo:function (){
//         console.log("user info=",user3.name,user3.email)
//     }
// }

// //console.log(user.showInfo())
// console.log(user2.showInfo())

// to solve this issue we can use dynamic scoping 
// var user1 = {
//     id:101,
//     name:"test1",
//     address:"hyd",
//     displayInfo: function(msg){
//         console.log("value of this=",this)
//             console.log("hello "+this.name+" ",msg)
//     }
// }

// var user2= {
//     id:102,
//     name:"test2",
//     address:"blr",
// }

// var user3 = {
//     id:103,
//     name:"test3",
//     address:"pune",
// }

// user1.displayInfo.call(user1)
// user1.displayInfo.call(user2)
// user1.displayInfo.call(user3)
// user1.displayInfo.call(user2,"good  morning")

// user1.displayInfo.apply(user1)
// user1.displayInfo.apply(user2)

// user1.displayInfo.apply(user2,["good morning"])


// bind 

// let copiedFn = user1.displayInfo.bind(user2)
// console.log(copiedFn)
// copiedFn();
// user1.displayInfo();
// user2.displayInfo();
// call apply bind

// let copiedFn2 = user1.displayInfo.bind(user2)
// copiedFn2("good morning")


// factory function to create obj 

function createEmp(id,name,address){
    return {
        id:id,
        name:name,
        address:address
    }
}

let emp1 = createEmp(101,"test1","hyd")
let emp2 = createEmp(102,"test2","pune")
console.log(emp1)
console.log(emp2)