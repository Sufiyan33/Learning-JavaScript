alert("Enter the value of a ")
// you can also add a default value in prompt & later change it.
let a = prompt("Enter a number " , "786")
a = Number.parseInt(a)
alert("You entered a of type : " + typeof a)

// confirm
let write = confirm("Do you want to write this on page ? ")
if(write){
    document.write(a)
}else{
    document.write("Please allow me to write this value on page 🥹")
}

