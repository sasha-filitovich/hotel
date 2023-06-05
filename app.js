import rooms from './rooms.js';
// burger
const html = document.querySelector('html');
const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.nav__link');
const overlay = document.querySelector('.overlay');
// клик на иконку burger
burger.addEventListener('click', function () {
  headerNav.classList.toggle('active');
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
  html.classList.toggle('lock');
  document.body.classList.toggle('lock');
});
// функция закрытия бургер-меню
function burgerClose() {
  headerNav.classList.remove('active');
  burger.classList.remove('active');
  overlay.classList.remove('active');
  html.classList.remove('lock');
  document.body.classList.remove('lock');
}
// клик на ссылки в меню
for (let navLink of navLinks) {
  navLink.addEventListener('click', burgerClose);
}
// клик на пространство вне меню
overlay.addEventListener('click', burgerClose);
// pop-up
const buttonPhotos = document.querySelectorAll('.button_photos');
const popup = document.querySelector('.pop-up');
const popupMainImg = document.querySelector('.pop-up__main-img');
const popupSmallImg = document.querySelector('.pop-up__small-img');
const popupBtnLeft = document.querySelector('.pop-up__button_left');
const popupBtnRight = document.querySelector('.pop-up__button_right');
const popupBtnClose = document.querySelector('.pop-up__button_close');
// клик на кнопку more photos
buttonPhotos.forEach((el) =>
  el.addEventListener('click', (e) => {
    popup.classList.add('active');
    html.classList.add('lock');
    document.body.classList.add('lock');
    rooms.forEach((el) => {
      if (e.target.classList.contains(el.number)) {
        popupMainImg.src = el.mainImg;
        el.smallImg.forEach((imgPath) => {
          const img = document.createElement('img');
          img.src = imgPath;
          popupSmallImg.append(img);
        });
        const smallImgArr = popupSmallImg.querySelectorAll('img');
        smallImgArr.forEach((el) => {
          if (el.src === popupMainImg.src) {
            el.classList.add('active');
          }
        });
      }
    });
  })
);
// клик на стрелку вправо
popupBtnRight.addEventListener('click', () => {
  const smallImgArr = popupSmallImg.querySelectorAll('img');
  for (let i = 0; i < smallImgArr.length; i++) {
    if (smallImgArr[i].classList.contains('active')) {
      if (i === smallImgArr.length - 1) {
        smallImgArr[i].classList.remove('active');
        smallImgArr[0].classList.add('active');
        popupMainImg.src = smallImgArr[0].src;
        return;
      }
      smallImgArr[i].classList.remove('active');
      smallImgArr[i + 1].classList.add('active');
      popupMainImg.src = smallImgArr[i + 1].src;
      return;
    }
  }
});
// клик на стрелку влево
popupBtnLeft.addEventListener('click', () => {
  const smallImgArr = popupSmallImg.querySelectorAll('img');
  for (let i = 0; i < smallImgArr.length; i++) {
    if (smallImgArr[i].classList.contains('active')) {
      if (i === 0) {
        smallImgArr[i].classList.remove('active');
        smallImgArr[smallImgArr.length - 1].classList.add('active');
        popupMainImg.src = smallImgArr[smallImgArr.length - 1].src;
        return;
      }
      smallImgArr[i].classList.remove('active');
      smallImgArr[i - 1].classList.add('active');
      popupMainImg.src = smallImgArr[i - 1].src;
      return;
    }
  }
});
// закрытие pop-up по крестику
popupBtnClose.addEventListener('click', function () {
  popupSmallImg.innerHTML = '';
  popup.classList.remove('active');
  html.classList.remove('lock');
  document.body.classList.remove('lock');
});
// закрытие pop-up при клике вне окна
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popupSmallImg.innerHTML = '';
    popup.classList.remove('active');
    html.classList.remove('lock');
    document.body.classList.remove('lock');
  }
});
