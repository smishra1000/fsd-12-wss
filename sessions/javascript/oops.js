// function User(){
//     this.name="test1"
//     this.age=20
// }

// let u1 = new User();

// console.log(u1)

// class User{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }

//     transformNameInUpperCase(){
//         return this.name.toUpperCase()
//     }
// }

// let ahmed=new User("ahmed",20)
// let prudhviraj=new User("prudhviraj",21)

// console.log(ahmed)
// console.log(prudhviraj)



// class Person{
//     constructor(name,address,phone){
//         this.name=name;
//         this.address=address;
//         this.phone=phone
//     }

//     showAddress(){
//         console.log("my address is ",this.address)
//     }
// }

// let p1 = new Person("test1","hyd",1111)
// let p2 = new Person("test2","blr",22222)

// console.log(p1)

// console.log(p2)


// class Number2{
//     constructor(n){
//         this.n = n
//     }
//     checkEvenOdd(){
//         if(this.n%2===0){
//             console.log("even")
//         }
//         else{
//             console.log("odd")
//         }
//     }
    
// }

// let n1 = new Number2(7)
// n1.checkEvenOdd()

// let n2= new Number2(10)
// n2.checkEvenOdd()


// class User{
//     constructor(name,email,password){
//         this.name=name;
//         this.email=email
//         this.password=password
//     }

//     login(){
//         console.log(this)
//         function show(){
//             console.log(this)
//         }
//         show()
//         //console.log(this.name + "login sucessfully")
//     }
//     signup(){
//         console.log(this.name+"sinup sucessfully")
        
//     }
// }

// let u1 = new User("test1","test1@gmail.com","123")

// let u2 = new User("test2","test2@gmail.com","123")

// u1.login()

//u2.login()

// console.log(u1)
// console.log(u2)

// let user = {
//     name:"test1",
//     showName:function(){
//         "use strict"
//         console.log(this)
//         function show(){
//             console.log(this)
//         }
//         show()
//     }
// }

// user.showName()

// "use strict"
// a=10
// console.log(a)




class Player{
    constructor(name,country,game){
        this.name = name
        this.country=country
        this.game=game
    }
    showGame(){
        console.log(this.game)
    }
    showName(){
        console.log(this.name)
    }
    showCountry(){
        console.log(this.country)
    }
}

let virat = new Player("virat","india","cricket")

console.log(virat)

virat.showCountry()
virat.showGame();
virat.showName();