import { catsData } from "./data.js";

const radioParent = document.getElementById("emotion-radios")
const radioBtns = document.getElementsByClassName("radio")



function getEmotionsArray() {
    const emotionsArray = []
    for(let cat of catsData) {
        for(let emotion of cat.emotionTags) {
            if(!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function render() {
    const emotions = getEmotionsArray()
    let parentHtml = ""
    for(let emotion of emotions) {
        parentHtml += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    radioParent.innerHTML = parentHtml
}

render()