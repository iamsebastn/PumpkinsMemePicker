import { backgroundImages } from "./data.js";

// console.log(backgroundImages)

function getBackgroundImagesArray(images) {
    backgroundImageArray = []
    for (let image of images) {
        console.log(image)
    }
    // return backgroundImageArray
}

getBackgroundImagesArray(backgroundImages)