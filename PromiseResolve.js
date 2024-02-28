let p = new Promise((resolve, reject) => {
    console.log("promis is pending...")
    setTimeout(() => {
        console.log("I am a promis and fulfilled...")
        resolve(true)
        console.log(p)
    }, 5000)
})

console.log(p)