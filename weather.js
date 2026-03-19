import getSilentLocation from './location.js'
const API_key = "<YOUR_API_KEY>"
const key = {API_KEY}


async function getWeather(){
    var city = await getSilentLocation()
    if (!city){
        city = "Singapore"
        console.error("Defaulting to Singapore")
    }
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
        if (!response.ok){
            throw new Error()
        }
    
        const json_data = await response.json()

        return json_data

    }
    catch(error){
        console.error("Error fetching weather data: ", error)
        return null
    }

}

export default getWeather
