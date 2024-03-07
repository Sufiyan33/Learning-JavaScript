class Human{
    constructor(name, favFood){
        this.name = name
        this.favFood = favFood
    }

    walk(){
        console.log(this.name + ": Human is walking...")
    }
}

class Student extends Human{
    walk(){
        console.log(this.name + ": Human is walking...")
    }
}

let o = new Student("Sufiyan", "Chicken")
o.walk()
console.log(o instanceof Student)