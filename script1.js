const currentFrame = document.querySelector('.frame');
const sliderFrames = document.querySelectorAll('.live-cams__item-player');

const invisFrames = document.querySelectorAll('.live-cams__invis');

invisFrames.forEach((element, index) => {
    element.addEventListener('click', function () {
        let clickedFrame = sliderFrames[index].getAttribute("src");
        let permanentContainer = currentFrame.getAttribute("src");

        currentFrame.setAttribute("src", clickedFrame);
        sliderFrames[index].setAttribute("src", permanentContainer);
    })
});



let sideBtn = document.querySelector('.side-bar__info-button');
let sideCardSpan = document.querySelectorAll('.side-bar__card-span');
let sideBar = document.querySelector('.side-bar');
var flagForButton = true;

function swichAsideTrue() {
sideBar.style.width = "350px";
sideCardSpan.forEach(element => {
element.style.margin = "20px";
});
sideCardSpan.forEach(element => {
element.style.display = "block";
});
flagForButton = false;
sideBtn.style.transform = 'rotate(180deg)';
}
function swichAsideFalse() {
sideBar.style.width = "220px";
sideCardSpan.forEach(element => {
element.style.margin = "20px";
});
sideCardSpan.forEach(element => {
element.style.display = "none";
});
flagForButton = true;
sideBtn.style.transform = 'rotate(0deg)';
}
sideBtn.addEventListener('click', function (e) {
if (flagForButton == true) {
swichAsideTrue();
}
else {
swichAsideFalse();
}
})