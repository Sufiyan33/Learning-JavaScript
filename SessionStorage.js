
let key = prompt("Please enter key ")
let value = prompt("Please enter value")

sessionStorage.setItem(key, value)

console.log(`The key is ${key} and corresponding value is ${sessionStorage.getItem(key)}`)

console.log("The key at index: " + sessionStorage.key(3))

if( key === "red" && value === "blue"){
    sessionStorage.removeItem(key)
}

window.onstorage=(e)=>{
    alert("changed")
    console.log(e)
}