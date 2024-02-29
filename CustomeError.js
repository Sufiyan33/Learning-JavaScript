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

    throw new ReferenceError("Something occuered ...")
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}