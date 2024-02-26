/*
    Today, we will learn callbacks, asynch/ awiat or promises in javaScript that is very important.
*/
//Synchronous programming
/*let a = prompt("what is your name?")
let b = prompt("what is your age?")
let c = prompt("what is your favourite color?")
console.log(a + " is " + b + " years old and has " + c + " favourite color...")
document.write(a + " is " + b + " years old and has " + c + " favourite color...")

//Asynchronous programming
console.log("Start")
setTimeout(function (){
    console.log("Hey I am doing ansynchronous programming")
}, 3000);
console.log("End")*/

// callBacks
function loadScript(src){
    let script = document.createElement("script")
    script.src=src
    script.onload = function() {
        console.log("Script has been loaded : " + src)
    }
    document.body.appendChild(script)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")