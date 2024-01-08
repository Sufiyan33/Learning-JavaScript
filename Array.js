let marks=[12,2,3,44,64,645,34, null, false,"not given"]
console.log(marks)

for(let i=0; i< marks.length; i++){
    console.log("Arrays number are : "+ marks[i])
}

// when the element is not given in array and want to print then it will print undefined.
console.log(marks[12])

// Create array using new keyword
const car= new Array("BMW", "Maruti", "Alto", "WagonR","Mercedeze", "Bolero", "Scorpio")
console.log(car)

for(let i = 0; i< car.length; i++){
    console.log(car[i])
}