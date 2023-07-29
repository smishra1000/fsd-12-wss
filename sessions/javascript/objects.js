// var user = {
//     name:"test1",
//     age:20,
//     isVoted:true,
//     marks:[20,30,40],
//     u:30
// }

// console.log(user)

// console.log(user.name)
// console.log(user.age)
// console.log(user["name"])
// console.log(user["age"])
// console.log(user.marks)
// console.log(user.isVoted)

// for(var key in user){
//    console.log(key,user[key])
// }

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

// let marks = [80,90,40,30]
// let subjects = ["m1","m2","m3","m4"]
// var student = {

// }
// for(let i=0;i<subjects.length;i++){
// student[subjects[i]] = marks[i]
// }

// console.log(student)


var user = {
    name:"sameer",
    getName:function(){
        console.log("name=",user.name)
    },
    marks:[20,30,50],
    address:{
        city:"hyd",
        pincode:22222,
        locality:{
            landmark:"main signal"
        }
    }
}

// console.log(obj)
// console.log(obj.getName)
// console.log(obj.name)
// console.log(obj.address.city)
// console.log(obj.address.locality.landmark)
// for(var key in user){
//     console.log(key)
//     if(key==="address"){
//         for(var ad in user[key]){
//             console.log(ad)
//             if(ad==="locality"){
//                 for(var lc in user[key][ad]){
//                     console.log(lc)
//                 }
//             }
          
//         }
//     }
// }


// for(var key in user){
//     console.log(key,user[key])
//     if(typeof user[key]==="object"){
//         for(var key1 in user[key]){
//             console.log(key1,user[key][key1])
//             if(typeof user[key][key1]==="object"){
//                 for(var key2 in user[key][key1][key2]){
//                     console.log(key2,user[key][key1][key2])
//                 }
//             }
//         }
//     }
// }

// var datafield = ["name","email","age","address"]
// var values = ["test1","test1@gmail.com",20,"hyd"]
// to construct object with given filed and values
// initially it will b empty
// var user = {
// }
// for(let i=0;i<datafield.length;i++){
//     console.log(datafield[i])
//     user[datafield[i]] = values[i]
// }

// console.log("my user obj=",user)


// var age=20

// function show(){
//     console.log(age)
//     var id=101;
//     function showName(){
//         var roll=142;
//         console.log("show name")
//     }
//     showName();
// }

// show();