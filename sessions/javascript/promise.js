let inStock = 5

function orderItem(items) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (items > inStock) {
                // console.log("order placed")
                reject("not in stock sorry try agian")
            }
            else {
                resolve("order placed")
            }
        }, 5000)
    })

}

function payNow() {
    console.log("payment started")
    console.log("payment done")
}

orderItem(2).then(function (result) {
    console.log(result)
    payNow();
}).catch(function (error) {
    console.log(error)
})

// orderItem();
// payNow();


/* 

write a function to getusers and displayUsers in dom using displayUsers 
function use setTimeout for getUsers function 
*/

function getUsers() {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve ([
                {
                    id: 1,
                    name: "sameer"
                },
                {
                    id: 2,
                    name: "rohit"
                }
            ])
        }, 3000);
    
    })
    
}

function displayUsers(users) {
    let ul = document.createElement("ul")
    for (let i = 0; i < users.length; i++) {
        let li = document.createElement("li")
        li.textContent = users[i].name
        ul.appendChild(li)
    }
    document.body.appendChild(ul)
}

// let users = getUsers();
// displayUsers();

getUsers().then(function(result){
    displayUsers(result)
}).catch(function(error){
    console.log("some thing went wrong")
})