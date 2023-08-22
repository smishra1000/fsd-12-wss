


class Person{
    #pin="12345"
    constructor(name,age){
        this.name=name
        this.age = age
    }
    static pssword="123"

    static showInfo(obj){
        console.log("calling static",obj.name)
        // console.log("name=",this.name)
        // console.log("age=",this.age)
    }
    showPin(){
        console.log(this.#pin)
    }
}

let p1 = new Person("test1",20);
// console.log(p1.name)
// console.log(p1.age)
Person.showInfo(p1);
console.log(Person.pssword)
p1.showPin()

