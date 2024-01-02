//Non primitive objects.

const item = {
    "Sufiyan" : true,
    "Subh":234,
    "Abcd" : "Sufi",
    "Rohan" : undefined
}

console.log(item["Subh"])
console.log(item["Sufiyan"])
console.log(item["Abcd"])
console.log(item["Rohan"])

// Something which is not present in object, trying to print will give you undefined.
console.log(item[2324])