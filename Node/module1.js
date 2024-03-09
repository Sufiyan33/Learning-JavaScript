/*
    Modules are very useful when a large team is working together. You can create your own module and call from anywhere.
*/
const hello =()=>{
    console.log("hello!!! How are you???")
}

module.exports = hello;

/*
    if you want to use this module in anyother package or moduke then use above line to export and import where you want...
*/

const advanceHello = (name) =>{
    console.log("Hello : " + name)
}

// if you have multiple module and want to export then use below expression ...

module.exports = {hello, advanceHello}
//module.exports = {hello: hello, advanceHello: advanceHello}  // both line are same...