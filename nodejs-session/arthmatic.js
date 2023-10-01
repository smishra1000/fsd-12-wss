class Arthmatic{
    constructor(n){
        this.n = n
    }
    checkEven(){
        if(this.n%2===0){
            console.log("number is even")
        }else{
            console.log("number is odd")
        }
    }
}

module.exports=Arthmatic