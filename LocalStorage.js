
let key = prompt("Please enter key ")
let value = prompt("Please enter value")

localStorage.setItem(key, value)

console.log(`The key is ${key} and corresponding value is ${localStorage.getItem(key)}`)

console.log("The key at index: " + localStorage.key(3))

if( key === "red" && value === "blue"){
    localStorage.removeItem(key)
}

if(key == 0 && value == 0){
    localStorage.clear()
    console.log("All data has been cleared ...")
}