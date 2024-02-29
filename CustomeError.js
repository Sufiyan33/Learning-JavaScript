/*try{
    console.log(rahul)
}catch(error){
    console.log(error.name)
}*/

/*
    let's throw custome exception here.
*/

try{
    //throw new Error("Something occured...")
    // Here you can also use ReferenceError...
    let age = prompt("Enter your age...")
    let b = Number.parseInt(age);
    if(age < 18){
        throw new ReferenceError("You are not 18+ ...")
    }
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("Script is still running...")

/*
    if you want to explore more then search in google "mdn reference js errors" and navigate the page...
*/