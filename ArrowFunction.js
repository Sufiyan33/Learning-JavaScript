// Here we will look various ways to write arrow function...

// 1 : if you have no argument
const sayHello = () => console.log("Hello")

sayHello()


// 2 : if you have only one argument then bracket is optional
const sayHello1 = (name) => console.log("Hello : " + name)

sayHello1("Sufiyan")

 // OR
const sayHello2 = name => console.log("Hello : " + name)

sayHello2("Sufiyan")

// 3 : if you have two argument then bracket is must
const sayHello3 = (name, greeting) => console.log(greeting + " Hello : " + name)

sayHello3("Sufiyan", "Good")

// 4 : lets check another example of Arrow function :
const x = {
    name: "Sufiyan",
    role : "Developer",
    exp: 10,

    show: function(){
        //console.log(`The name is ${this.name} \nThe role is ${this.role} \nAnd experience is ${this.exp}`) // here this refers to object x...
        setTimeout(function() {
            console.log(this)
            console.log(`The name is ${this.name} \nThe role is ${this.role} \nAnd experience is ${this.exp}`)
            // console will print undefined for this...
            // inorder to solve this issue make this arrow function...
        }, 2000);
    }
}
//console.log(x.name, x.role, x.exp)
x.show()

/*
    There are different value of this :
    1 : if you print this alone or outside everything then it will return Global object.
    2 : if you print inside function which use function keyword like above then this refer to window object.
    3 : if you print this inside of any event then this refer to event elements.
    4 : if you print this inside arrow function then it will return lexical this means object not undefined..
*/