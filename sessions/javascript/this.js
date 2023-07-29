// "this" in js
//1 at gloabl level this=window
// var a = 50;

// function show(){
//     console.log("hello")
// }
// console.log(a)
// console.log(this.a)
// console.log(window.a)
// console.log(this.show)

// console.log(this)

//2. inside function this will refre to global--window

// function sayHi(){
//     console.log("saying hiiii",this)
//     function sayHello(){
//         console.log("saying hello",this)
//     }
//     sayHello();
// }
// sayHi();

// 3rd. inside method this will point to owner object

var user = {
    name:"sameer",
    getName:function(){
        console.log(this.name)
    }
}

console.log(user.getName())

var emp = {
    name:"test1",
    age:20,
    email:"test1@gmail.com",
    showName:function(){
        console.log("name=",this.name)
    },
    showAge:function(){
        console.log("age=",this.age)
    },
    showEmail:function(){
        console.log("email=",this.email)
    }
}

// console.log(emp.name)
// console.log(emp.age)
// console.log(emp.email)
console.log(emp.showName())
console.log(emp.showEmail())
console.log(emp.showAge())
