// demo of constructor function

//normal function

// function sum(a,b){
//     console.log("sum of 2 number is=",a+b)
//     return "hello"
// }

// let r = sum(10,20)
// console.log(r)

// constructor function 
function Employee(x,y){
    console.log(x,y)
    this.id=x;
    this.name = y
    this.showInfo = function(){
        console.log("hello i m show inside object")
    }

}

let emp1 = new Employee("101","sameer");
console.log(emp1)

let emp2 = new Employee("102","test2")
console.log(emp2)
//in this case this will point to newly created brnd object
// {
//     id:101
//     name:"sameer"
// }
// let emp2 = new Employee("102","test1");
// console.log(emp)
// console.log(emp2)