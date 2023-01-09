const carousselImg = document.getElementById('caroussel-img');
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');


const imagesSrc = ['src/assets/image-slide-1.jpg', 'src/assets/image-slide-2.jpg', 'src/assets/image-slide-3.jpg', 'src/assets/image-slide-4.jpg', 'src/assets/image-slide-5.jpg'];

let i = 0;

nextBtn.onclick = () => {
    i = checkIndex
    carousselImg.src = imagesSrc[1];
}


const checkIndex = () => {
    if (i = 0) {
        return imagesSrc.length
    } else if (i === imagesSrc.length) {
        return 0
    } else {
        return i++
    }
}