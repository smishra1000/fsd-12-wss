
var user = {
    id:101,
    name:"test1",
    age:20,
    email:"test1@gmail.com"
}

// Object.keys(user)
let keys = Object.keys(user)
console.log(keys)

// Object.values(user)

let values = Object.values(user)
console.log(values)

// Object.entries(user)

let entries = Object.entries(user)
console.log(entries)

// Object.freeze
// Object.freeze(user)

// freeze basically freeze your object-it means we cant add new property and cant modify existing property

user.address="hyd"

console.log(Object.keys(user))

console.log(user)


//Object.seal 

// seal will prevent to add new property but it allow to modify existing one

Object.seal(user)
user.phone="1411141"
user.salary = 1000;
user.address = "pune"
console.log(user)
