let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("value 1 ")
    }, 1000);
})

let p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("value 2")
    }, 2000)
})

let p3 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Value 3")
    }, 3000)
})

/*p1.then((value)=>{
    console.log(value)
})


p2.then((value)=>{
    console.log(value)
})


p3.then((value)=>{
    console.log(value)
})*/

/*
    in this case all promises will resolve after time interval but if you want to get all promise to be resolve or display at a time.
    Then use promise api... all methods.
    For example real time fetching something from network and want to display at once then use promise api...
*/

let promie_all = Promise.all([p1, p2, p3])
promie_all.then((value) =>{
    console.log(value)
})

/*
    if any promises failed or rejected then prmoise.all method will return error. Although 1 rejected and  2 resolve but it will
    give you error.
    In order to resolve this issue, we will use promise.allSettled method.
    Let first find issues
 */

let p4 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject(new Error("Something missing..."));
    }, 4000)
})

/*let promises_all = Promise.all([p1, p2, p3, p4])
promises_all.then((value)=>{
    console.log(value)
})*/

// to resolve above issue i will use promise.AllSettled method
let promis_all = Promise.allSettled([p1,p2,p3,p4])
promis_all.then((value)=>{
    console.log(value)
})