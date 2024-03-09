// Add export keyword at starting of each functions

export const hello =()=>{
    console.log("hello!!! How are you???")
}

export const advanceHello = (name) =>{
    console.log("Hello : " + name)
}

/*
    if you have any default function then you don't need to remove from desctructuring.
    You can directly access that function... let see how to do that.
 */

const sufi= ()=>{
    console.log("Hello " + "Sufi")
}

export default sufi;