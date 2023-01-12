const carousselImg = document.getElementById('caroussel-img');
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');

let imgSrc = "src/assets/image-slide-"
let i = 1;

nextBtn.onclick = () => {
    i++

    if (i > 5) {
        i = 0;
    } else {
        carousselImg.src = `${imgSrc}${i}.jpg`;
    }
}

backBtn.onclick = () => {
    i--

    if (i < 0) {
        i = 5;
    } else {
        carousselImg.src = `${imgSrc}${i}.jpg`;
    }
}