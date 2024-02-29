async function sufiyan(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        }, 5000)
    })

    /*delhiWeather.then(alert)
    bangaloreWeather.then(alert)*/

    console.log("Fetching Delhi weather please wait...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi weather: " + delhiW)

    console.log("Fetching Bangalore weather please wait...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore weather: " + bangaloreW)
    return[delhiW, bangaloreW]
}

console.log("Welcome to weather control room")
let a = sufiyan()
console.log(a)