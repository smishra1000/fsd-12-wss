// Arithmetic operators
var a = 50;
var b = 20;

//1. Addition operator 
console.log(a+b)
// 2. sutraction operator 
console.log(a-b)

// 3. multiplication operator 
console.log(a*b)

//4. division operator 
console.log(a/b)

//5. modulus operator 
console.log(a%b)


// Assignment operator 

var c = 70;
var d = c
console.log(c,d)

// Relational operators/ Comparision operators

console.log("-------------realational operators----------")
var num1 = 20;
var num2 = 30;
console.log(num1>num2)
console.log(num1<num2)
console.log(num1!=num2)
console.log(num1>=num2)
console.log(num1<=num2)

var val1 = 10;
var val2 = "10"

console.log(val1==val2)

console.log(typeof val1,typeof val2)

console.log(val1===val2)

//== double equal to will compare based on value only
// === triple equal to compare based on value as well as with type

// Logical Operators 

var a = 30;
var b = 40;
var c = 50;
console.log(c>a && c>b)
console.log(a>c && b>c)

// || operator 

var a1 = 30;
var b1 = 40;
var c1 = 50;

console.log(c1>a1 || c1>b1)
console.log(a1>b1 || c1>b1)
console.log(a1>b1 || b1>c1)


// Not !

console.log(!true)

console.log(!false)