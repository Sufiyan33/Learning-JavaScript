console.log("--- Learning Array Iteration ---")

let arr = [2,3,12,12,11]
arr.map((value) =>{
    console.log(value)
    return value
})

// you can also add some conditions here.
console.log("--- Adding conditions ---")
let a = arr.map((value) => {
    console.log(value)
    return value + 1
})
console.log(a)

// for loop accepting 3 parameters
console.log("--- Passing parameters ---")
arr.map((value, index) =>{
    console.log(value, index)
    return value
})

console.log("---------------------------")
let b = arr.map((value, index) => {
    console.log(value, index)
    return value + index
})
console.log(b)

console.log("---------------------------")
let c = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(c)

// Filter array
console.log("--- Filter method ---")
let ar = [1,12,22,233,41,453,14]
let value = ar.filter((val) => {
    return val < 50
})
console.log(value)

// Reduce method
console.log("--- Reduce method ---")
let rd = ar.reduce((h1,h2) =>{
    return h1 * h2
})
console.log(rd)

// flatMap method
console.log("--- Flatmap method ---")
let result = ar.flatMap((x) =>{
    return x * 2
})
console.log(result)

// Arrays.form method use to create array
console.log("--- Arrays.form method ---")
let str = "Sufiyan"
const aa = Array.from(str)
console.log(aa)

console.log("--- Using for of loop ---")
for(let i of str){
    console.log(i)
}
console.log("--- Using for in loop ---")
for(let j in str){
    console.log(str[j])
}