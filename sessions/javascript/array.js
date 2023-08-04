// let marks = [100,80,90,50]
// console.log(marks)
// console.log(marks[0])
// console.log(marks[1])

// let names = ['s','a','m','e','e','r']
// console.log(names)

// console.log(names[0])

// console.log(typeof names)

//  for(let i =0;i<names.length;i++){
//     console.log(names[i])
// }

// let obj = {
//     id:1,
//     name:"sameer",
//     address:"hyd"
// }
// let users = [obj]

// console.log(users)

// array methods 

//1. push 

// let companies = []
// companies.push("abc")
// companies.push("xyz")

// console.log(companies)

// let result = companies.pop()

// console.log(result)

// console.log(companies)

// 
// function Employee(id,name){
//     this.id = id;
//     this.name = name
// }

// let e1 = new Employee(100,"test1")
// let e2 = new Employee(101,"test2")

// let e3 = new Employee(103,"test3")

// console.log(e1,e2)

// let employees = [];
// employees.push(e1)
// employees.push(e2)

// console.log(employees)

// employees.push(e3)
// console.log(employees)

// // wap to create 5 users and return the uses which got marks greater than 70

// function User(id,name,marks){
//     this.name=name;
//     this.id=id;
//     this.marks = marks;
// }


// let u1 = new User(101,"test1",50);
// let u2 = new User(102,"test1",40);
// let u3 = new User(103,"test1",70);
// let u4 = new User(104,"test1",80);
// let u5 = new User(105,"test5");
// let users = [u1,u2,u3,u4,u5]


// console.log(users)
// for(let i=0;i<users.length;i++){
//     if(users[i].marks>70){
//         console.log(users[i])
//     }
// }


// wap to insert 5 employees, display those employees which ahs salary greate than 1000



// let names = [];
// names.push("sameer")
// names.push("test1")

// console.log("after pushing names array =",names)

// names.unshift('test2')
// console.log("after pushing names array =",names)
// names.shift();
// console.log(names)


// let cities = ["hyd","blr","pune","delhi","delhi"]

// console.log(cities.lastIndexOf("delhi"))

let employess = [
    {
        id:1,
        name:"test1",
        age:40
    },
    {
        id:2,
        name:"test1",
        age:60
    },
    {
        id:3,
        name:"test3",
        age:60
    }
]
// let found = employess.find(function(item){
//     return item.name==="test3"
// })

// console.log(found)

// let foundIndex = employess.findIndex(function(item){
//     return item.name==="test1"
// })

// console.log(foundIndex)

// let ages = [90,30,40,60]
// let x = ages.find(function(item){
//     return item===90
// })
// console.log(x)

function myFind(){
    for(let i=0;i<employess.length;i++){
        if(employess[i].name==="test1"){
            return employess[i]
        }
    }
}

let found = myFind()
console.log(found)

// filter,map,reduce,includes





