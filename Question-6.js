// Calculate first n natural numbers factorial in arry

let arr = [1,2,3,4,5,6,7,8,9]
let result = arr.reduce((m,n) => {
    return m * n
})
console.log(result)