//-----communication-------
const сommunication = document.querySelector(".main-communication");
const buttonCommunication = сommunication.querySelector(
  ".main-communication__button"
);

const popupCommunication = document.querySelector(".popup-communication");

const popupCommunicationClose = popupCommunication.querySelector(
  ".popup__button-close>img"
);

console.log(buttonCommunication);

buttonCommunication.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCommunication.classList.add("popup__chow");
});
popupCommunicationClose.addEventListener("click", function () {
  popupCommunication.classList.remove("popup__chow");
});
//----advantages-slider-----
const mainaAvantages = document.querySelector(".main-advantages");
const AdvantagesSliderButton1 = mainaAvantages.querySelector(
  ".main-advantages__control-iteam1"
);
const AdvantagesSliderButton2 = mainaAvantages.querySelector(
  ".main-advantages__control-iteam2"
);
const AdvantagesSliderButton3 = mainaAvantages.querySelector(
  ".main-advantages__control-iteam3"
);
const AdvantagesSliderImage = mainaAvantages.querySelector(
  ".main-advantages__slider"
);
const mainaAvantagesContent1 = mainaAvantages.querySelector(
  ".main-advantages__content1"
);
const mainaAvantagesContent2 = mainaAvantages.querySelector(
  ".main-advantages__content2"
);
const mainaAvantagesContent3 = mainaAvantages.querySelector(
  ".main-advantages__content3"
);
console.log(mainaAvantages);
AdvantagesSliderButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  AdvantagesSliderImage.classList.add("main-advantages__slider1");
  AdvantagesSliderImage.classList.remove("main-advantages__slider2");
  AdvantagesSliderImage.classList.remove("main-advantages__slider3");

  AdvantagesSliderButton1.classList.add("main-advantages__control-active");
  AdvantagesSliderButton2.classList.remove("main-advantages__control-active");
  AdvantagesSliderButton3.classList.remove("main-advantages__control-active");

  mainaAvantagesContent1.classList.add("main-advantages__content-chow");
  mainaAvantagesContent2.classList.remove("main-advantages__content-chow");
  mainaAvantagesContent3.classList.remove("main-advantages__content-chow");
});
AdvantagesSliderButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  AdvantagesSliderImage.classList.add("main-advantages__slider2");
  AdvantagesSliderImage.classList.remove("main-advantages__slider1");
  AdvantagesSliderImage.classList.remove("main-advantages__slider3");

  AdvantagesSliderButton1.classList.remove("main-advantages__control-active");
  AdvantagesSliderButton2.classList.add("main-advantages__control-active");
  AdvantagesSliderButton3.classList.remove("main-advantages__control-active");

  mainaAvantagesContent1.classList.remove("main-advantages__content-chow");
  mainaAvantagesContent2.classList.add("main-advantages__content-chow");
  mainaAvantagesContent3.classList.remove("main-advantages__content-chow");
});
AdvantagesSliderButton3.addEventListener("click", function (evt) {
  evt.preventDefault();
  AdvantagesSliderImage.classList.add("main-advantages__slider3");
  AdvantagesSliderImage.classList.remove("main-advantages__slider2");
  AdvantagesSliderImage.classList.remove("main-advantages__slider1");

  AdvantagesSliderButton1.classList.remove("main-advantages__control-active");
  AdvantagesSliderButton2.classList.remove("main-advantages__control-active");
  AdvantagesSliderButton3.classList.add("main-advantages__control-active");

  mainaAvantagesContent1.classList.remove("main-advantages__content-chow");
  mainaAvantagesContent2.classList.remove("main-advantages__content-chow");
  mainaAvantagesContent3.classList.add("main-advantages__content-chow");
});
