let p = new Promise((resolve, reject) => {
    console.log("promis is pending...")
    setTimeout(() => {
        console.log("I am a promis and fulfilled...")
        resolve(true)
        console.log(p)
    }, 5000)
})

//console.log(p)

p.then((value) =>{
    console.log(value)
})

// or you can also use like below ::

p.then((value) =>{
    console.log(value)
}, (error) =>{
    console.log(error)
})