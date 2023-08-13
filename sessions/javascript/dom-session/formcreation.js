// function createFormElements() {
//     let form = document.createElement("form")

//     let firstNameLabel = document.createElement("label")
//     firstNameLabel.textContent = "First Name"

//     let firstInput = document.createElement("input")
//     firstInput.value = ""
//     firstInput.type = "text"
//     firstInput.id = "firstName"
//     firstInput.placeholder = "please enter first name"

//     let submitBtn = document.createElement("button")
//     submitBtn.textContent = "save"
//     // to attach the event through js we have document.addEventListener

//     form.appendChild(firstNameLabel)
//     form.appendChild(firstInput)
//     form.appendChild(submitBtn)


//     document.body.appendChild(form)
//     document.querySelector("button").addEventListener("click", function (e) {
//         e.preventDefault()
//         displayData();
//     })
// }

// function displayData(){
//     let h1 = document.createElement("h1")
//     h1.style.color="red"
//     let firstName = document.getElementById("firstName").value
//     h1.textContent="you eneterd name="+firstName
//     document.body.appendChild(h1)
// }

// createFormElements();

/*

1. element type form
    inside form we need label and input type=text

*/
{/* <body>
<form>
    <lable>first name</lable>
    <input type="text" value="" placeholder="enter first name" id="fname"/>
    <button onclick="displayData()">save</button>
</form>
<h1 style="color:green">hello enterd data=sameer</h1>
</body> */}
let Names = [];
let form = document.createElement("form")
let label = document.createElement("label")
label.textContent="first name"
form.appendChild(label)

// creation of input box
let inputBox = document.createElement("input")
inputBox.type="text"
inputBox.id="fname";
inputBox.placeholder="enter first name"
inputBox.value=""
let button = document.createElement("button")
button.textContent="save"
button.addEventListener("click",displayData)

form.appendChild(inputBox)
form.appendChild(button)

document.body.appendChild(form)



function displayData(e){
    e.preventDefault()
    
    // let h1=document.createElement("h1")
    // h1.style.color="green"
    let input = document.getElementById("fname")
    Names.push({id:Names.length+1,name:input.value})
    let ul = document.createElement("ul")
    let li = ""
    for(let i =0;i<Names.length;i++){
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.textContent=" edit"
        span.addEventListener("click",editItem)
       
        li.textContent=Names[i].name
        li.appendChild(span)
        ul.appendChild(li)
    }
    document.getElementById("fname").value=""
    document.body.appendChild(ul)
    // h1.textContent="hello enterd data="+ input.value
    // document.body.appendChild(h1)
}
function editItem(e){
    let editedItem = Names.find(function(item){
        return item.id===1
    })
    document.getElementById("fname").value=editedItem.name

}




