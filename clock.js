import getWeather from './weather.js'

import displayicon from './weathericon.js'

const timedisplay = document.querySelector('#time')
const datedisplay = document.querySelector('#date')

const citydisplay = document.querySelector('#city')

const weatherdisplay = document.querySelector('#weathercondition')
const tempdisplay = document.querySelector('#temp')
const feelsdisplay = document.querySelector('#feelslike')
const humiditydisplay = document.querySelector('#humidity')

const lastupdateddisplay = document.querySelector('#lastupdated')

let temphour = 0
UpdateDisplay()

function UpdateDisplay(){
    const date = new Date()
    const time_to_display = getTime(date)
     if (timedisplay.textContent !== time_to_display) {
        timedisplay.textContent = time_to_display
    }

    if (date.getHours() !== temphour) {
        const day = date.getDate().toString().padStart(2, '0')
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear()

        let date_to_display =  `${day} ${month} ${year}`
        datedisplay.innerText = date_to_display
        getWeatherData()
        
        temphour = date.getHours()
}

}
function getTime(date){
    const hours = String(date.getHours()).padStart(2, '0');
    const mins = String(date.getMinutes()).padStart(2, '0');
    const secs = String(date.getSeconds()).padStart(2, '0');

    let time_to_display =  `${hours}:${mins}:${secs}`
    return time_to_display

}

async function getWeatherData(){
    console.log("retrieving weather data...")
    const json_data = await getWeather()
    console.log(json_data)
    citydisplay.innerText = `${json_data.location.name}, ${json_data.location.country}`
    weatherdisplay.innerText = `${json_data.current.condition.text}`
    displayicon(json_data.current.condition.code, temphour)
    tempdisplay.innerText = `Temp: ${json_data.current.temp_c}°C`
    feelsdisplay.innerText = `Feels like: ${json_data.current.feelslike_c}°C`
    humiditydisplay.innerText = `Humidity: ${json_data.current.humidity}%`
    lastupdateddisplay.innerText = `Last updated: ${json_data.current.last_updated.split(" ")[1]}`
    
}

setInterval(UpdateDisplay, 500)