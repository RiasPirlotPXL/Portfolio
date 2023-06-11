function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}




const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})


const filterItem = document.querySelector(".items")
const filterImg = document.querySelectorAll(".image")

window.onload = () => { //once window loaded
    filterItem.onclick = (selectedItem) => {
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("date-name");
            filterImg.forEach((image) => {
                let filterImages = image.getAttribute("data-name");
                if ((filterImages == filterName) || filterName == "All"){
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
}