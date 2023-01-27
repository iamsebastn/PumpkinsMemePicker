const backgroundImages = [
    {
        imageTags: ["editorial", "urban"],
        isPortrait: false,
        image: "https://images.unsplash.com/photo-1674736520513-f5e90bd3d534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2675&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["architecture", "urban"],
        isPortrait: false,
        image: "https://images.unsplash.com/photo-1617071609160-af8cb2f32e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["abstract"],
        isPortrait: true,
        image: "https://images.unsplash.com/photo-1674682778004-cfc1d05df542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["3D-Render", "editorial"],
        isPortrait: false,
        image: "https://images.unsplash.com/photo-1674350369100-bc50d4da3580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["nature"],
        isPortrait: false,
        image: "https://images.unsplash.com/photo-1673468810663-aadc745ab561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["abstract", "texture"],
        isPortrait: false,
        image: "https://images.unsplash.com/photo-1673825496773-120de6f9d5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3221&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["texture"],
        isPortrait: true,
        image: "https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["nature"],
        isPortrait: true,
        image: "https://images.unsplash.com/photo-1674668331802-368997dfb543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["car"],
        isPortrait: false,
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["car"],
        isPortrait: true,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["3D-Render"],
        isPortrait: false,
        image: "https://images.unsplash.com/photo-1655635949348-953b0e3c140a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2108&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["architecture"],
        isPortrait: true,
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["nature"],
        isPortrait: false,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80",
        alt: "an awesome backgroundimage",
    },
    {
        imageTags: ["3D-Render", "abstract"],
        isPortrait: true,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80",
        alt: "an awesome backgroundimage",
    },
]

const tagsRadio = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const modal = document.getElementById("meme-modal")
const modalCloseBtn = document.getElementById("meme-modal-close-btn")
let isPortraitImg = document.getElementById("portrait-only-option")
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
        src=”(${singleTag.image})”
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
