
function task1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("task1 started ")
             console.log("task1 done ")
             resolve()
        },3000)
    })
   
    
}

function task2(){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task2 started ")
        console.log("task2 done ")
        resolve()
    },5000)
})
  
}

function task3(){
    console.log("task3 started ")
    console.log("task3 done ")
}

function haveFood(){
    console.log("having food")
}

task1().then(function(result){
    task2().then(function(result){
        task3()
    })
})

haveFood();


// task1----task2--task3
// having food

task1(task2)