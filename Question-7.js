// Question : wrp to take age as input and tell him that he is able to drive or not
alert(" Please verify your age first ")
let a = prompt("Please enter age : ", "18")
a = Number.parseInt(a)

/*if(a >= 18){
    document.write("Yes, you are eligible for dirve")
}else{
    document.write("No, you are not eligible for dirve")
}*/

// you can also write in different way like below :
let runAgain = true
const canDrive = (a)=>{
    return a >= 18 ? true : false
}
while(runAgain){

alert(" Please verify your age first ")
let a = prompt("Please enter age : ", "18")
a = Number.parseInt(a)

if(a < 0){
    console.error("You entered a wrong age");
    break;
}

if(canDrive(a)){
    alert("Yes, you can drive")
}else{
    alert("No, you can't drive")
}
    runAgain = confirm("Do you want to play again :")
}