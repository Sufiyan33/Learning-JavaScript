let y = "Sufiyan"
let x = "Ahmad"
let z = "   doTrim   "
let a = 55

console.log(y.length)
console.log(y.charAt(1))
console.log(y.charCodeAt(2))
console.log(y.concat("Ahmad"))
console.log(y.toUpperCase())
console.log(y.toLowerCase())
console.log(y.toLocaleLowerCase())
console.log(y.endsWith("n"))
console.log(y.includes("z"))
console.log(y.indexOf("f"))
console.log(y.lastIndexOf())
console.log(y.match("ahmad"))
console.log(y.replace("S"))
console.log("String method slice : " + y.slice(2, 4))
console.log("String method slice : " + y.slice(3))
console.log("String method subString : " + y.substring(2,4))
console.log(y.concat(x))
console.log("Without Trim String : " + z)
console.log("Trim from left side : " + z.trim())

console.log(z.trimStart())
console.log(z.trimEnd())
console.log(x.padStart(4, 12))