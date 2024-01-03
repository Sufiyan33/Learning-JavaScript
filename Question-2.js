// Question : Print the marks of students using For loop 
let marks = {
    "Sufiyan":12,
    "Sabir":23,
    "Alfaz":34,
    "Sufi":78
}

// Using for loop
for(let i =0; i< Object.keys(marks).length; i++){
    console.log("marks of "+ Object.keys(marks)[i] + " is: " + marks[Object.keys(marks)[i]])
}

console.log("------------------------------")
// Using for in loop
for(let key in marks){
    console.log("marks of "+ key + " is: " + marks[key])
}
