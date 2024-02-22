console.log("Exploring setTimeOut and setInterval")

// When want that after sometime or some time interval our javaScript execute then we can use this methods.

const sum= (a,b) =>{
    console.log("Yes, I am running " + (a+b))
}
setTimeout(sum, 1000 ,1, 2);

// commenting below one to see above functionalities...
/*alert("Hello");

let a = setTimeout(function(){
    alert("I am inside timeOut function...")
}, 2000)
let b = prompt("Do you want to run setTimeOut again?");
if('n' == b){
    clearTimeout(a);
}
console.log(a);*/


// lets play with setInterval function
let b = setInterval(function(){
    alert("Interval has been set...")
}, 4000)

let c = prompt("Do you want to see again interval?")
if('n' == c){
    clearInterval(b)
}
console.log(b)
