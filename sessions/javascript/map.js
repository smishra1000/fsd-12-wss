// // let ages = [10,20,30,40]

// // let modifedAges = ages.map(function(item,index,array){
// //     //console.log(item,index,array)
// //     return item*2;
// // })

// // console.log("oriiginal array", ages)
// // console.log("new array=",modifedAges)


// // let allNumbers = [1,2,3,4,5,6,7,8,9]

// // let oddNumbers = allNumbers.filter(function(item,index,array){
// //     return item%2!==0
// // })
// // console.log(allNumbers)
// // console.log(oddNumbers)

// let employess = [
//     { id: 101, age: 20, salary: 2000, name: "test1" },
//     { id: 102, age: 40, salary: 1000, name: "test2" },
//     { id: 103, age: 60, salary: 9000, name: "test3" },
//     { id: 104, age: 50, salary: 3000, name: "test4" },
//     { id: 105, age: 50, salary: 3000, name: "test5" },
//     { id: 106, age: 80, salary: 3000, name: "test6" },
    
// ]

// // please filter those employess for which salary range between 2000-4000

// let filteredEmoployee = employess.filter(function(item,index,array){
//     return item.salary>=2000 && item.salary<=4000
// })

// console.log(employess)

// console.log(filteredEmoployee)

// let modifiedEmployeeNames = employess.map(function(item,index,array){
//     return item.name.toUpperCase();
// })

// console.log(modifiedEmployeeNames)

// let array = [10,20,30,40]

// let sum = array.reduce(function(total,item,index,array){
//     return total = total+item
// },0)

// console.log(sum)

// let s = 0
// for(let i=0;i<array.length;i++){
//     let item = array[i]
//     s= s+item;
// }
// console.log(s)

// Home assignmnet 
 let employees = [
    {
        id:101,
        name:"test1",
        age:30
    },
    {
        id:102,
        name:"test2",
        age:40
    },
    {
        id:103,
        name:"test3",
        age:50
    },
    {
        id:104,
        name:"test4",
        age:30
    }
 ]

//  group employess by their ages 
//  {
//     30:[{
//         id:101,
//         name:"test1",
//         age:30
//     },{
//         id:104,
//         name:"test4",
//         age:30
//     }],
//     40:[{
//         id:102,
//         name:"test2",
//         age:40
//     },]
//     50:[{
//         id:103,
//         name:"test3",
//         age:50
//     }]
//  }

// includes 

// let numbers= [10,20,30]

// let isAvailable = numbers.includes(100)
// console.log(isAvailable)