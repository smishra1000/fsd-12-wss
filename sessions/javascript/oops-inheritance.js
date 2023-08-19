class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address
    }
}

class Teacher extends Person{
    constructor(name,age,address,salary){
        super(name,age,address)
        this.salary = salary
    }

    showName(){
        console.log(this.name)
    }
}

// let p1 = new Person("test1",20,"hyd")

let t1 = new Teacher("test1",20,"hyd",20000)
t1.showName()

let t2 = new Teacher("sameer",20,"blr",30000)

t2.showName()
// console.log(p1)

// console.log(t1)