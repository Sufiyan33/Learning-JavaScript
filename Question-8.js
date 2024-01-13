// Question : Enter a number if number is greater than 4, redirect to google.com
let number = prompt("enter a number ", "0")
number = Number.parseInt(number)

if(number > 4){
    location.href = "https://google.com"
}else{
    alert("Better luck next time")
}

// Question : Change background color based on user input

let color = prompt("Enter a color name as your wish ")
document.body.style.background = color