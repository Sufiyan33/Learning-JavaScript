console.log("If you want to change HTML classes then you can use className and classList")

let first = document.getElementById("first");

first.className="yellow text-dark";
first.className="red text-dark";

// if you want to get List of classes then use below ::

console.log(first.classList)
first.classList.remove("red") // if you want to remove any class
first.classList.add("red") // if you want to add any class

// you can also use toggle method, if class is added then return true if not then return false and also add the same class.
first.classList.toggle("yello");
console.log(first.classList.contains("red"))