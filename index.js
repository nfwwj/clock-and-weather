const timedisplay = document.querySelector('#time')
const datedisplay = document.querySelector('#date')

let temphour = 0
UpdateDisplay()

function UpdateDisplay(){
    const date = new Date()
    time_to_display = getTime(date)
     if (timedisplay.textContent !== time_to_display) {
        timedisplay.textContent = time_to_display
    }

    if (date.getHours() !== temphour) {
        const day = date.getDate().toString().padStart(2, '0')
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear()

        let date_to_display =  `${day} ${month} ${year}`
        datedisplay.innerText = date_to_display
        temphour = date.getHours()
}

}
function getTime(date){
z    const mins = String(date.getMinutes()).padStart(2, '0');
    const secs = String(date.getSeconds()).padStart(2, '0');

    let time_to_display =  `${hours}:${mins}:${secs}`
    return time_to_display

}

setInterval(UpdateDisplay, 500)