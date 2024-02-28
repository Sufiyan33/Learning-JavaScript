console.log("In this section we will look that how to handle reject and through error")

let p = new Promise((resolve, reject) =>{
    console.log("promises pending...")
    setTimeout(()=>{
        console.log("I am promis and rejecting it...")
        reject(new Error("Promis Rejected"))
        console.log(p)
    })
})

console.log(p)