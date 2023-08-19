function getUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("getting users")
            resolve([{id:1,name:"sameer"}])
        },3000)
    })
   
}

function displayUser(users){
    console.log("displaying user")
    let ul = document.createElement("ul")
    for(let i=0;i<users.length;i++){
        let li = document.createElement("li")
        li.textContent=users[i].name
        ul.appendChild(li)
    }
    document.body.appendChild(ul)
}

getUser().then(function(res){
    displayUser(res);
})
