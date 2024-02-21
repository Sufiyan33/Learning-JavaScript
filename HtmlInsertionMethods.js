console.log("Here we can explore methods to insert html")

//Very classical way to insert html is :
let a = document.getElementsByTagName("div")[0]

a.innerHTML = a.innerHTML + "<h1>Hello world!!! </h1>"

// by using above way you need to pass whole html as a string but in new it is not required...

// Lets look some methods for insertions...

let div = document.createElement('div');
div.innerHTML = '<h2>Hello I am a method to insert HTML</h2>'
// a.appendChild(div); will add a child node.

//a.append(div) // it will add same place.
//a.prepend(div) // it will add before the div.

//a.before(div) it will add before the container
a.after(div) //it will add before the container

//a.replaceWith(div) // it will replace your container with div.

// you can also use for loop to insert html