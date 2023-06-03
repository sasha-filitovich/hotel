import rooms from '../rooms.js';
//pop-up
const html = document.querySelector('html');
const buttonPhotos = document.querySelectorAll('.button_photos');
const popup = document.querySelector('.pop-up');
const popupMainImg = document.querySelector('.pop-up__main-img');
const popupSmallImg = document.querySelector('.pop-up__small-img');
const popupBtnLeft = document.querySelector('.pop-up__button_left');
const popupBtnRight = document.querySelector('.pop-up__button_right');
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
popupBtnRight.addEventListener('click', () => {
  const smallImgArr = popupSmallImg.querySelectorAll('img');
  for (let i = 0; i < smallImgArr.length; i++) {
    if (smallImgArr[i].classList.contains('active')) {
      smallImgArr[i].classList.remove('active');
      smallImgArr[i + 1].classList.add('active');
      popupMainImg.src = smallImgArr[i + 1].src;
      return;
    }
  }
});
