import { travelLocations } from "./data.js";
const emotionRadios = document.getElementById('emotion-radios')

// console.log(travelLocations)

function getWeatherArray(places) {
    const weatherArray = []
    for(let place of places) {
        for(let weather of place.weatherTags) {
            if(!weatherArray.includes(weather)) {
                weatherArray.push(weather)
            }
        }
    }
    return weatherArray
}

function render(places) {
    const destinations = getWeatherArray(places)
    let radiosEl = ""
    for(let place of destinations) {
        radiosEl += `
        <div class="radio">
            <label for="${place}">${place}</label>
            <input
            type="radio"
            id="${place}"
            value="${place}"
            name="emotions"
            >
        </div>
        `
    }
    emotionRadios.innerHTML = radiosEl
}

render(travelLocations)