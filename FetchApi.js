/*
    Fetch is used to fetch some data from network or servers. Fetch Api is a 2 stage process and it always returns promises.
    Hence we need to add .then method twice time...
*/

let p = fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((value)=>{
    console.log(value)
})