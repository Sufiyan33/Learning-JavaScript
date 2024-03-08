// Old way to access array element is :

let arr = [3, 5]
let a = arr[0]
let b = arr[1]
console.log(a + " " + b)

// Now let's discuss about destructuring way of accessing array element...

let arr1 = [4,6]
let [a1, b1] = arr1
console.log(a1, b1)

// You can also do like below...
let arr2 = [4,5,6, 7]
let [a2, b2] = arr2
console.log(a2, b2)

// If you want to skip some element then you can also do like below :
let arr3 = [4,5,6,7, 2, 1, 4, 5,6 ,77]
let [a3, b3, c, ...rest] = arr3
console.log(a3, b3, c, rest)

// In above case 3 a, b, c will be displayed in console and rest element will stored in array...

// Now if you want to print first and middle value apart from this want to skip then you can do like below ...
let arr4 = [4,5,6,7, 2, 1, 4, 5,6 ,77]
let [a4, , , ...rest1] = arr3
console.log(a3, rest1)

// Spread operator...
// It is used to convert an array into object (key-value pair)

console.log("Spread operator...")
let ar = [2,4,10,3]
let obj = {...ar}
console.log(obj)

// if you want to pass this array value to a function which accepting same argument then do like below ...
function sum(v1,v2,v3){
    return v1 + v2 + v3
}

console.log(sum(...ar))

// You can navigare mdn docs for desctructing or spread operator syntax

// Similar syntax you will use in React...

let obj1 = {
    name: "Sufiyan",
    company: "xyz",
    salary: "120834"
}
console.log({...obj1})
// if you want to override name values or other values then use syntax like below :
console.log({...obj1, name: "Ahmad"})