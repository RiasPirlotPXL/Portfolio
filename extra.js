const carousel = document.querySelector(".carousel");
firsImg = carousel.querySelector("img")[0];
arrowIcons = document.querySelector(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firsImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon._addEventListeners("click", () =>{
        carousel.scrollLeft += icon.id = "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", dragStop)