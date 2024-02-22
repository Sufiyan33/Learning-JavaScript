let a = document.getElementsByClassName("container")[0]
a.onclick=()=>{
    let b = document.getElementsByClassName("container")[0]
    b.innerHTML="Hello world"
}

let btn = document.getElementById("btn")
let x = function(e) {
    alert("Hello India")
}

let y = function(e){
    alert("Hello Bharat")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let p = prompt("what is your favourite country?")
if(p == "1"){
    btn.removeEventListener('click', y)
}else if(p == "2"){
    btn.removeEventListener('click', x)
}