let h1  = document.createElement("h1")
h1.textContent="hello i have created by js"
h1.id="head1"
h1.style.color="red"
document.body.appendChild(h1)

let paragraph = document.createElement("p")
paragraph.textContent="i am learning js dom manipulation topic"
document.body.appendChild(paragraph)

let head1 = document.getElementById("head1")
head1.style.fontSize = "60px"

let divBox = document.createElement("div")

divBox.style.width="100px"
divBox.style.height="50px"
divBox.style.background="cyan"
let para1 = document.createElement("p")
para1.textContent="hello i am isnide box"
para1.id="p1"
divBox.appendChild(para1)
document.body.appendChild(divBox)
document.title="hello updated"

// traversal 
let para = document.getElementById("p1")

console.log(para)
console.log(para.childElementCount)
