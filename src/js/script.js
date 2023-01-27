import { backgroundImages } from "./data.js"

const tagsRadio = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const modal = document.getElementById("meme-modal")
const modalCloseBtn = document.getElementById("meme-modal-close-btn")
const isPortraitImg = document.getElementById("portrait-only-option")
const modalInner = document.getElementById('meme-modal-inner')

tagsRadio.addEventListener("change", (e) => {
    const radios = document.getElementsByClassName("radio")
    for(let radio of radios) {
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
    checkForPortrait()
})

modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

getImageBtn.addEventListener("click", () => {
    const singleTag = getSingleTag()
    console.log(singleTag.image)
    modalInner.innerHTML = `
        <img 
        class="cat-img" 
        src=”${singleTag.image}”
        alt="${singleTag.alt}"
        >
    `
    modal.style.display = "flex"
})

function getSingleTag() {
    const singleTag = getMatchingImageTag()
    
    if(singleTag.length === 1) {
        return singleTag[0]
    } else {
        return singleTag[Math.floor(Math.random() * singleTag.length)]
    }
}

function getMatchingImageTag() {
    if(document.querySelector("input[type='radio']:checked")) {
        const selectedTag = document.querySelector("input[type='radio']:checked").value
        const isPortrait = isPortraitImg.checked

        const matchingTagsArray = backgroundImages.filter(function(background){
            if(isPortrait) {

                return background.imageTags.includes(selectedTag) && background.isPortrait
            } else {

                return background.imageTags.includes(selectedTag)
            }
        })
        return matchingTagsArray   
    }
}

function getBackgroungImageArray(bgImages) {
    const bgImageArray = []
    for (let image of bgImages) {
        for(let tag of image.imageTags) {
            if(!bgImageArray.includes(tag)) {
                bgImageArray.push(tag)
            }
        }
    }

    return bgImageArray
}

function render(data) {
    let radios = ""
    const tagsArray = getBackgroungImageArray(data)
    for(let tag of tagsArray) {
        radios += `
        <div class="radio">
            <label for="${tag}">${tag}</label>
            <input
            type="radio"
            id="${tag}"
            value="${tag}"
            name="emotions"
            >
        </div>`
    }
    tagsRadio.innerHTML = radios
}

render(backgroundImages)
