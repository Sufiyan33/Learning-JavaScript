console.log("Here, we will explore some methods of Attributes")

let first = document.getElementById("first")

let a =  first.getAttribute("class")
console.log(a)

console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
console.log(first.hasAttribute("id"))

//first.setAttribute("hidden", "true")

//first.removeAttribute("class")
console.log(first.attributes)

// You can access custom Attribute by using dataset like below :
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)