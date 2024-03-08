// Closer set always return function with lexical env or reference value... 

function init(){
    var name = "Mozilla"

    //closer function
    function displayName(){
        console.log(name)
    }
    name = "Good"
    return displayName
}

let c = init();
c()


// if I change name value in above function then what will return eiter mozilla or good. In this case it will return good.

// let's check how nested function make closers and return lexical env...
console.log("Nested function with Closers...")

function returnFunction(){
    const x = ()=>{
        let a = 1
        console.log(a)
        const y = ()=>{
            //let a = 1
            console.log(a)
            const z = ()=>{
                //let a = 1
                console.log(a)
            }
            z()
        }
        a =999
        y()
    }
    return x
}

let zz = returnFunction()
zz()