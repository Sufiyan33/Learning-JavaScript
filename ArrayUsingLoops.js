let arr =[2,3,4,5,6,6]
console.log(arr)

// Access array element using for loops
for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

console.log("You can also use for each loop") 
arr.forEach((Element)=>{
    console.log(Element * Element)
})

// Use for of loop to access array elements
console.log("----------------------")
for( let i of arr){
    console.log(i)
}

// You can also use for in loop but it will give you key means index. Hence to access element use arr[i]
// Best option is for of - loop
console.log("----------------------")
for(let j in arr){
    console.log(j)
    console.log(arr[j])
}