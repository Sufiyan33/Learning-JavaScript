class Animal{
    constructor(name){
        this._name = name
    }

    fly(){
        alert("Mai udh raha hu ~~~~")
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
