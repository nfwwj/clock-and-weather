console.log("hello")
const weathericon = document.querySelector("#weathericon img")
const bins = {
        sunny: [1000],
        cloudy: [1003, 1006, 1009, 1030, 1135, 1147],
        
        rain: [1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246],
        
        thunder: [1087, 1273, 1276, 1279, 1282],
        
}
function geticon(code){
    for(let category in bins){
        if(bins[category].includes(code)){
            return category
        }
    }
    return null
}

function displayicon(code,hour){
    const iconpath = geticon(code)
    console.log("display weather icon...")
    if (iconpath){
        if (iconpath == "cloudy" && hour >= 19 || hour <= 7){
            weathericon.setAttribute("src",`./weather icons/others.png`)         
        }
        else{
            weathericon.setAttribute("src",`./weather icons/${iconpath}.png`)
        }
    }
    else{    
        weathericon.setAttribute("src",`./weather icons/others.png`)
    }
}

export default displayicon;