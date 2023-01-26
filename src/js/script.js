import { catsData } from "./data.js";

const radioItem = document.getElementById("emotion-radios")

radioItem.addEventListener("change", (e) => {
    const radios = document.getElementsByClassName("radio")
    for(let radio of radios) {
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
})

function getEmotionsArray(cats) {
    const emotionsArray = []
    for(let cat of cats) {
        for(let emotion of cat.emotionTags) {
            if(!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function render(cats) {
    let parentHtml = ""
    const emotions = getEmotionsArray(cats)
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
    radioItem.innerHTML = parentHtml
}

render(catsData)