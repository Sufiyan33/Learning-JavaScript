console.log("Write program to show different alert when different button has clicked...")

document.getElementById("google").addEventListener("click", function() {
    window.location="https://google.com";
    window.focus();
})

document.getElementById("fb").addEventListener("click", function() {
    window.location="https://fb.com";
    window.focus();
})

document.getElementById("x").addEventListener("click", function() {
    window.location="https://twitter.com";
    window.focus();
})