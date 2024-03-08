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
