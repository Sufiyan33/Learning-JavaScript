class Animal{
    constructor(name){
        this._name = name
    }

    fly(){
        console.log("Mai udh raha hu ~~~~")
    }

    // let's create getter to get values...
    get name(){
        return this._name
    }

    // let's write setter method to set values...
    set name(newName){
        this._name = newName
    }
}

let a = new Animal("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)

// let's have a look into instance of operator...

console.log(a instanceof Animal)
let c = 56;
console.log(c instanceof Animal)