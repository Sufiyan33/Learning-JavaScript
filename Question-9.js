document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"

document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"

// chage all li tag color to cyan
// Appraoch - first make array then use forEach loop

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "cyan";
})