// POPUP

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock_padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.popup__together-close');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }
}

function popupClose(popupActive) {
    if (unlock) {
        popupActive.classList.remove('open');
    }
}





// SLIDERS 

let offset = 0;
const sliderLine1 = document.querySelector('.meet-some-our-friends__first-row');
const sliderLine2 = document.querySelector('.meet-some-our-friends__second-row');

const sliderRight = document.querySelector('.meet-some-our-friends__button-right');
const sliderLeft = document.querySelector('.meet-some-our-friends__button-left');


sliderRight.addEventListener('click', function () {
    offset += 460;
    if (offset > 1380) {
        offset = 0;
    }
    sliderLine1.style.left = -offset + 'px';
    sliderLine2.style.left = -offset + 'px';
});

sliderLeft.addEventListener('click', function () {
    offset -= 460;
    if (offset < 0) {
        offset = 1380;
    }
    sliderLine1.style.left = -offset + 'px';
    sliderLine2.style.left = -offset + 'px';
});


const sliderLine3 = document.querySelector('.what-our-users-think__messages-first-row');
const sliderLine4 = document.querySelector('.what-our-users-think__messages-second-row');

const sliderRight1 = document.querySelector('.what-our-users-think__button-right');
const sliderLeft1 = document.querySelector('.what-our-users-think__button-left');

sliderRight1.addEventListener('click', timeSlider)

sliderLeft1.addEventListener('click', function () {
    offset -= 545;
    if (offset < 0) {
        offset = 545;
    }
    sliderLine3.style.left = -offset + 'px';
    sliderLine4.style.left = -offset + 'px';
});

function timeSlider() {
    offset += 545;
    if (offset >= 1090) {
        offset = 0;
    }
    sliderLine3.style.left = -offset + 'px';
    sliderLine4.style.left = -offset + 'px';
}

setInterval(timeSlider, 15000)

//DONATE MANIPULATIONS 

const donateBtn1 = document.querySelectorAll('.popup__together-button');
const donateBtn2 = document.querySelectorAll('.popup__donation1-button');
const donateInput = document.querySelector('.popup__donation1-input');


// SECOND POPUP

donateBtn2.forEach(element => {
    element.addEventListener('click', event => {
        let target = event.target;
        donateInput.value = +element.innerHTML.slice(1);

        if (target.classList.contains('popup__donation1-button')) {
            for (let i = 0; i < donateBtn2.length; i++) {
                donateBtn2[i].classList.remove('btn-active');
            }
        }
        target.classList.add('btn-active');
        btnOther.classList.remove('btn-active');
    })
});


// FIRST POPUP
for (let i = 0; i < donateBtn1.length; i++) {
    const donateBtn11 = donateBtn1[i];
    const donateBtn22 = donateBtn2[i+1];
    donateBtn11.addEventListener('click', event => {
        donateInput.value = +donateBtn22.innerHTML.slice(1);
        if (donateBtn22.classList.contains('popup__donation1-button')) {
            for (let i = 0; i < donateBtn2.length; i++) {
                donateBtn2[i].classList.remove('btn-active');
            }
        }
        donateBtn22.classList.add('btn-active');
    });
}

const donateInputAmount = document.querySelector('.your-donation-makes-a-difference__input-number');
const donateBtnAmount = document.querySelector('.your-donation-makes-a-difference__button')

donateBtnAmount.addEventListener('click', function () {
    if (donateInputAmount.value == '') {
        donateInput.value = 10;
        donateBtn2[0].classList.add('btn-active');
    } else {
        donateInput.value = donateInputAmount.value;
    }
})

donateInputAmount.oninput = function () {
    this.value = this.value.substr(0, 4);
}

donateInput.oninput = function () {
    this.value = this.value.substr(0, 4);
}

const cvv = document.querySelector('.cvv');
const ccn = document.querySelector('.ccn');

cvv.oninput = function () {
    this.value = this.value.substr(0, 3);
}
ccn.oninput = function () {
    this.value = this.value.substr(0,16);
}

const selectOption = document.querySelector('.popup__donation1-select');
const btnSpecial = document.querySelector('.popup__donation1-button-special');

btnSpecial.addEventListener('click', function (e) {
    if (!btnSpecial.classList.contains('btn-active')) {
        selectOption.removeAttribute("disabled");
        btnSpecial.classList.add('btn-active');
        e.preventDefault();
    } else {
        selectOption.setAttribute("disabled", "true");
        btnSpecial.classList.remove('btn-active');
        e.preventDefault();
    }
});

const btnOther = document.querySelector('.popup__donation1-button-other');

btnOther.addEventListener('click', function (e) {
    if (!btnOther.classList.contains('btn-active')) {
        btnOther.classList.add('btn-active');
        donateInput.value = 0;
        for (let i = 0; i < donateBtn2.length; i++) {
            donateBtn2[i].classList.remove('btn-active');
        }
    }
    e.preventDefault();
});

//Завершение при нажатие на complete donation

// const popup3CompliteBtn = document.querySelector('.popup3__bottom-button');
const btnCompleteDonation = document.querySelector('.popup__donation3-button-next');
const btnNameEmailInputs = document.querySelectorAll('.popup__donation2-input');
//обработка месяца и года карты

const popup3SelectYear = document.querySelector('.year');
const popup3SelectMonth = document.querySelector('.month');
let flagForYear = false;
let flagForMonth = false;

popup3SelectYear.addEventListener("click", function (e) {
    flagForYear = true;
})
popup3SelectMonth.addEventListener("click", function (e) {
    flagForMonth = true;
})

btnCompleteDonation.addEventListener("click", function (e) {
    if (donateInput.value == "" ||
        btnNameEmailInputs[0].value == "" ||
        btnNameEmailInputs[1].value == "" ||
        ccn.value == "" ||
        cvv.value == "" ||
        flagForYear == false ||
        flagForMonth == false) {
        e.preventDefault();
        window.alert("Fill all required fields !");
    }
    else {
        window.alert("Thank you for your donation !");
    }

})


// VIDEO 

// let currentFrame = document.querySelector('.live-cams__player');
// let sliderFrames = document.querySelectorAll('.live-cams__item-player');

// let invisFrames = document.querySelectorAll('.live-cams__invis');

// invisFrames.forEach((element, index) => {
//     element.addEventListener('click', function () {
//         let clickedFrame = sliderFrames[index].getAttribute("src");
//         let permanentContainer = currentFrame.getAttribute("src");
//         currentFrame.setAttribute("src", clickedFrame);
//         sliderFrames[index].setAttribute("src", permanentContainer);
//     })
// });