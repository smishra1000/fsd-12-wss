// function sayHello(){
//     console.log("saying hello")
// }

// function sayHi(){
//     console.log("saying Hiii")
// }

// sayHello();
// sayHi();
// sayHello();
// sayHi();
// sayHi();

// function with parameter 

// function sum(a,b){
//     console.log(a+b)
// }

// sum(2,3)
// sum(10,20)
// sum(30,50)

// function greet(name,msg,time){
//     console.log("hello",name,msg,time)
// }

// greet("sameer","good morning","8:55")

// greet("nikhil","good evening","8:55")


// function checkEvenOrOdd(n){
//     if(n%2===0){
//         console.log("number is even")
//     }else{
//         console.log("number is odd")
//     }
// }

// checkEvenOrOdd(6)
// checkEvenOrOdd(21)

function sayHello(){
    console.log("saying hello")
    // return function sayHi(){
    //     console.log("saying hiii")
    // }
    console.log("saying another hello")
}

//let rt = sayHello();// calller
// console.log(rt())



// function noReturn(){
//     console.log("i am dummy function")
//     console.log("hello inside function")
//     return "done"
// }

// let result = noReturn()
// console.log(result)


// function sumOf2number(a,b){
//     console.log(a+b)
//     return a+b
// }

// let r = sumOf2number(10,20)
// console.log("value returned by function",r)


// function checkPaidUserOrNot(paid){
//     if(paid==true){
//         return "paid user"
//     }else{
//         return "not a paid user"
//     }
// }

// let check = checkPaidUserOrNot(false)
// console.log(check)

// function checkForEnrollment(enrolled){
//     if(enrolled===true){
//         return "user is enrolled"
//     }else {
//         return "user is not enrolled for that course"
//     }
// }

// function displayMessage(msg){
//     console.log(msg)
// }

// let r = checkForEnrollment(false)
// console.log(r)
// console.log(r);//
//  displayMessage(r)

// function createUser(){
//     return {
//         email:"test1@gmail.com",
//         phone:"12131313"
//     }
// }

// let u1 = createUser();

// console.log(u1)

// function getmarks(){
//     return [90,40,50,60]
// }

// let marks = getmarks();

// console.log("marks=",marks)

// var login = function say(){
//     console.log("i am login function")
// }

// login()

// var a=10;
// function display(){
//     console.log("hello i am display fn")
// }

// console.log(a)
// a = display;

// console.log(a())



 var msg = function greet(){

 }
 
function sayHi(msg){
    console.log(msg)
}

function greet(){
    console.log("hello good morning")
}

sayHi(greet);

// function sayhello(){
//     console.log("saying hellloooo")
// }

function Grade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

let result = Grade(97)
console.log(result)

function admission(name,college="kmit"){
    console.log(name,college)
}


admission("sameer","nit raipur")

admission("test2","jntu")
admission("test3")

