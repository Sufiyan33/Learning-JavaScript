// Use filter and find out numbers divisible by 10

let arr = [10,20,40,23,43,13,4]
let result = arr.filter((x) =>{
    return x % 10 == 0
})
console.log(result)