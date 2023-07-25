// print 1 to 10
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("10")

//in javascript we have 3 types of loop --- for, while, do-while

// for--of 

// for--in 

// forEach


//1. for loop 

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// 2 4 6 8 10 12 14 16 18 20

// for(let i=2;i<=20;i=i+2){
//     console.log(i)
// }

// 5 10 15 20 25 30

// for(let i=5;i<=30;i=i+5){
//     console.log(i)
// }

//2. while loop 
// 1 to 5

// let i = 1;
// while(i<=5){
//     console.log(i)
//     i=i+1
// }

// 2 to 20 

// let j = 2;
// while(j<=20){
//     console.log(j)
//     j=j+2
// }

// 3. do-while

// 1 to 5 

// let i = 1;
// do{
// console.log(i)
// i=i+1
// }while(i<=5)

// let i = 2;
// do{
//     console.log(i)
//     i=i+2

// }while(i<=20)

// example of do whiel while entry and exit control


// let i=1;
// while(i<1){
//     console.log("i am false")
// }

// let i = 1;
// do{
//     console.log("i am false")
// }while(i<1)

// leti=1;{
//     while (i<5);
//     console.log(i)
//     i=i+1
//     }

// wap to find sum of 1-5 

// using for loop 
// let s = 0;

// for(let i=1;i<=5;i++){
//     console.log(i)
//     s=s+i
// }

// console.log(s)

// wap to print table of 2 
// 2*1 = 2 
// 2*2 =4

// prompt for input 

// function sum(a,b){
//     var c = Number(a)+Number(b);
//     console.log("sum of 2 number =",c)
// }
// let a = prompt("enter first number")

// let b = prompt("enter 2nd number")

// console.log(a,b)

// console.log(typeof a, typeof b)

// sum(a,b)

// function checkEvenOrOdd(){
//     let n = prompt("enter any number")
//     if(Number(n)%2===0){
//         console.log("number is even")
//     }else{
//         console.log("number is odd")
//     }
// }

// checkEvenOrOdd();

// for in loop 

// var user = {
//     name:"test1",
//     age:20,
//     email:"test1@gmail.com"
// }

// for(var u in user){
//     //console.log(u)
//     console.log(u,user[u])
// }

var studentsMarks = {
    marks1:30,
    marks2:50,
    marks3:70
}
var total = 0
for(marks in studentsMarks){
    console.log(marks,studentsMarks[marks])
    total= total+studentsMarks[marks]
}
console.log(total)



    

