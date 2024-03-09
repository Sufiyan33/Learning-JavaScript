/*
    To import the module1 you can use below expression...
*/
//const hello = require("./module1")
//hello() //calling hello function...

// if you have multiple module then use below expression : 
/*hello.hello()
hello.advanceHello("Sufiyan")
hello.advanceHello("Ahmad")
hello.advanceHello("Sabir")
hello.advanceHello("Alfaz") */

/*
    Problem :: see here, each and every time you need hello function to call another function.. that is little bit annoying.
    Solution :: You can use destructuring for directly accessing object. 
    TODO :: todo that I am commenting above line no 4.
*/

console.log("--- Using desctructuring ---")

const {hello, advanceHello} = require("./module1")
hello()
advanceHello("Sufiyan")
advanceHello("Ahmad")
advanceHello("Sabir")

