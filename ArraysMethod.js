let arr = [1,2,3,44,55,62,51,23,11]
console.log("array is :: " + arr)

// find length of array
console.log(arr.length)

// convert into string
console.log(arr.toString())

// check type of array
console.log(typeof arr)

// join array with separator
let c = arr.join("-")
console.log(c, typeof c)

// check particular value at index
let i = arr.at(2)
console.log("number at position i " + i)

// adding element in array
let p = arr.push(111)
console.log(arr, arr.length)

let pop = arr.pop(111)
console.log(pop, arr.length)
console.log(arr)

// shift array elements
console.log(arr.shift() + " array is :: "+ arr + " size of array is :: " + arr.length)

// merging two arrays
let str = ["sufiyan", "Tabish"]
let st = ["Alfaz", "Raja"]
const newArray = str.concat(st)
console.log(newArray, + " array length " + newArray.length)

// forEach loop
const num = [2, 3,4,5,6]
num.forEach((Element) =>{
    console.log(Element * Element)
})