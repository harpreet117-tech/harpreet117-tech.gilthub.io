// Javascript

const images = [
    "IMG_0153.JPEG",  
    "IMG_1102 (1).JPEG",  
    "IMG_7843.JPEG",  
];

const imageElement = document.getElementById("middle-image");

let currentImageIndex = 0;

function changeImage() {
    imageElement.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 1000);
