let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise resolve after 3 seconds...")
        resolve(56)
    }, 3000);
})

p.then((value) =>{
    console.log(value)
    let p1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("now resolve promise...")
            resolve("Promise 2")
        }, 4000);
    })
    return p1;
}).then((value)=>{
    console.log("We are done !!!")
    return 4
}).then((value) => {
    console.log("Now we are pakka done ...😀")
})

