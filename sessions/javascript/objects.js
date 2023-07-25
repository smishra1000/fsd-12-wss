var user = {
    name:"test1",
    age:20,
    isVoted:true,
    marks:[20,30,40],
    u:30
}

console.log(user)

console.log(user.name)
console.log(user.age)
console.log(user["name"])
console.log(user["age"])
console.log(user.marks)
console.log(user.isVoted)

for(var key in user){
   console.log(key,user[key])
}

// wap to create an object and calculate total marks 

// var student = {
//     m1:60,
//     m2:70,
//     m3:80,
//     m4:50,
//     m5:70
// }
// var total = 0;
// for(let m in student){
//     total = total+student[m]
// }
// console.log(total)

// var value = 80
// var key = "age"
// var obj = {

// }

// obj[key]=value

// console.log(obj)

let marks = [80,90,40,30]
let subjects = ["m1","m2","m3","m4"]
var student = {

}
for(let i=0;i<subjects.length;i++){
student[subjects[i]] = marks[i]
}

console.log(student)
