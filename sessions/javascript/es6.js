// // destructuring 

// let user ={
//     name:"test1",
//     age:20,
//     email:"test1@gmail.com"
// }
// // var name = user.name
// // var age = user.age
// // console.log(name,age)

// let {name,age,email} = user

// console.log(name,age,email)
// let names = ["sameer","test1"]
// let [a,b] = names;
// console.log(a,b)


// // spread operator ...

// let numbers = [2,3,4]
// function sum(a,b,c){
//     return a+b+c
// }

// console.log(sum(...numbers))// sum(2,3,4)


// // rest operator

// function sumOfN(...values){
//     console.log(values)
// }

// sumOfN(2,3,4)


// let a1 = [2,3,4]
// let a2 = [5,6,7]

// let c = [...a1,...a2]// [2,3,4,5,6,7]
// console.log(c)

// function getData()
// {
//     return ["sameer",20]
// }

// let [v1,v2] = getData()

// console.log(v1,v2)

// let user = {
//     name:"test1",
//     age:20,
//     id:101,
//     roll:1111
// }

// let {name,age,roll} = user
// console.log(name,age,roll)


// function sumNormal(a,b){
//     return a+b
// }

// let sumArrow = (a,b)=>{
//     return a+b
// }

// console.log(sumNormal(2,3))
// console.log(sumArrow(2,3))

// function sum(){

// }

let user = {
    name:"test1",
    show:function(){
        console.log(this)
        // function shoinner(){
        //     console.log(this)
        // }
        let shoinner = ()=>{
            console.log(this)
        }
        shoinner();
    },
    // showArrow:()=>{
    //     console.log(this)
    // }
}
age =40

console.log(`hello age is ${age}`)
user.show();
//user.showArrow();

// let, const 
// map filter reduce,
// find findIndex 
// class object 
// rest spred 
// destructuring 
// primise async await 
// module -----------
// arrow function
// string literal