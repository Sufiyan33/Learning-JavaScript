//Take input from user and add in array until user press zero.

let arr = [12,1,2,3,35,32,232,55]
let input;
do{
    input = prompt("Enter a number ")
    input = Number.parseInt(input)
    arr.push(input)
    
}while(input != 0)
console.log(arr)