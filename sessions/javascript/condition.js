// consditional stattement 
//1>if-- if statement is used to execute block of code if the condition satisfy to true
    /* if(condition){

    } 
    */

    var age = 20;
    if(age>18){
        console.log("valid voter")
    }

    var num=101;
    if(num>100){
        console.log("number is gretaer than 100")
    }
    var today ="sun"
    if(today==="sat"){
        console.log("class will be 7 to 9")
    }

// 2.  if-else -- if -else will execute block of code when the if condioton is false 

    var age = 10;
    if(age>18){
        console.log("valid voter")
    }else {
        console.log("not a valid voter beacuse age is less than 18")
    }
    // pratiksha
    var num=7;
        ans=num%2;
        if(ans==0){
            console.log("even no.")
        }else{
            console.log("odd no.")
        }
        //naveen
        var a =30;
        if(a%2==0){
            console.log("a is a even number")
        }
        else{
            console.log("a is odd number")
        }

// 3. if ... else-if ....else 

var n = 0;
if(n>0){
    console.log("number is positivie")
}else if(n<0){
    console.log("number is negative")
}else{
    console.log("number is zero")
}


// var mrks=80;    if (mrks==90)
// {console.log("A Grade")
// else if (mrks==80){console.log("B Grade "){

// }
//    else (mrks==70)
//  {console.log("c Grade ')

var marks = 60;
        if(marks>90){
            console.log("your grade is A")
        }else if(marks>80){
            console.log("your grade is B")
        }else if(marks>70){
            console.log("your grade is C")
        }else{
            console.log("your grade is D")
        }