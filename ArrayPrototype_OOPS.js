let a = {
    name: "Sufiyan",
    language: "hindi"
}

console.log(a)

let p = {
    run: ()=> {
        alert("run")
    }
}

p.__proto__ = {
    name: "Jackiee"
}


a.__proto__ = p
a.run()
console.log(p.name)