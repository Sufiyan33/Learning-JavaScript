console.log("In this section we will look that how to handle reject and through error")

let p = new Promise((resolve, reject) =>{
    console.log("promises pending...")
    setTimeout(()=>{
        console.log("I am promis and rejecting it...")
        reject(new Error("Promis Rejected"))
        console.log(p)
    })
})

//console.log(p)

/*
    if you have declared 2 or 3 promises and all are given same 5 second time then after 5 seconds. all promises will be fired and work parallely.
    and provide you result...

    In real time project, we do not use consol.log instead of this you can print value... by using then() method
    Or if error occured & you don't want to display error in console then you can handle it by using catch method...
*/

p.then((value) =>{
    console.log(value)
})

p.then(alert("Oh!!! sorry error occured..."))

p.catch((error) =>{
    console.log("some issue occured in promises...")
})