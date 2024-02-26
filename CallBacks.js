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
function loadScript(src, callback){
    let script = document.createElement("script")
    script.src=src
    script.onload = function() {
        console.log("Script has been loaded : " + src)
        callback(null,src); // you can also pass parameters in callBack.
    }
    // Let's handle error if script is not loaded
    script.onerror= function(){
        console.log("Error loaded with script : " + src)
        callback(new Error("Script got some error"))
    }
    document.body.appendChild(script)
}

function hello(error,src){
    if(error){
        console.log(error)
        return
    }else{
        alert("Hello world!!!" + src) 
    }
}

function goodMorning(error, src){
    if(error){
        console.log(error)
    }
    alert("Good morning" + src)
}

loadScript("https://cdn.jssdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)

// May be somethime script will not load then in this case we need to handle Exception let's handle...