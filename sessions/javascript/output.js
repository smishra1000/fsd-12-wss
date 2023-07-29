// function showA(){
//     console.log(b)
// }
// var b =100;
// showA();


// function showA(){
//     var b = 200;
//     function showB(){
//         console.log(b)
//     }
//     showB();
// }

// var b = 100;
// showA()


// function showA(){
//     var b = 200;
//     function showB(){
//         console.log(b)
//     }
//     showB();
// }
// showA()
// console.log(b)


// let const var
// scope, hoisting ,lexical , phases excution, gec, fec
 function showA(){
    let a = 100
    
    function showB(){
        console.log(a)
    }
    return showB;
 }

 let res = showA()
 console.log(res())
