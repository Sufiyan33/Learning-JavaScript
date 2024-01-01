console.log("var keyword and it's issues :: ")

var a = 12;
var a = "test"
// this is the issue
var b = "sufiyan";
var c = 109.2;

var d = 'sufi'
{
    var b = "ahmad";
    console.log(b)
}
console.log(b)
console.log(a)
console.log(c)
console.log(d)

// this is the issue : because var used globally hence avoid using var keyword.