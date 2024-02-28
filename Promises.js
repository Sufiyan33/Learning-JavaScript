let promis = new Promise(function(resolve, reject){
    alert("Hello I am promises")
    resolve(56)
})

console.log("hello one")
setTimeout(function(){
    console.log("Hello two in 2 seconds")
}, 3000);

console.log("My name is: " + "Hello three")
