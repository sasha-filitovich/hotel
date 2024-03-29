import rooms from './rooms.js';
import reviews from './reviews.js';
import translate from './translate.js';
// добавление кнопки contact us в секции rooms
const btnsContact = document.querySelectorAll('.rooms__select');
btnsContact.forEach((el) => {
  el.innerHTML = `<p>Contact us</p>
<div class="select">
  <a href="mailto:marusial@yahoo.com?subject=Double Room"><p>Email</p></a><hr class="select__line">
  <a href="https://wa.me/38630410766"><p>Whatsapp</p></a><hr class="select__line">
  <a href="viber://chat?number=%2B38630410766"><p>Viber</p></a><hr class="select__line">
  <a href="https://t.me/+38630410766"><p>Telegram</p></a><hr class="select__line">
</div>`;
});
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
// переключение отзывов
const reviewsBtnLeft = document.querySelector('.reviews__button_left');
const reviewsBtnRight = document.querySelector('.reviews__button_right');
const reviewsBlock = document.querySelectorAll('.reviews__block');
let reviewNum = 0;
// функция заполнения блока с отзывами
const changeReviews = () => {
  reviewsBlock.forEach((el) => {
    el.innerHTML = `
  <div>
    <h3>${reviews[reviewNum].headline}</h3>
    <p>${reviews[reviewNum].mainPart}</p>
  </div>
  <div>
    <p>${reviews[reviewNum].name}</p>
    <p>${reviews[reviewNum].date}</p>
  </div>
  <p class="mark">${reviews[reviewNum].mark}</p>`;
    if (reviewNum === reviews.length - 1) reviewNum = 0;
    else reviewNum++;
  });
};
// клик на правую стрелку
reviewsBtnRight.addEventListener('click', () => {
  changeReviews();
});
// клик на левую стрелку
reviewsBtnLeft.addEventListener('click', () => {
  if (reviewNum === 0) reviewNum = reviews.length - 6;
  else if (reviewNum === 3) reviewNum = reviews.length - 3;
  else reviewNum -= 6;
  changeReviews();
});
// заполнение блока с отзывами при загрузке страницы
changeReviews();
// изменение языка
const flag = document.querySelector('.flag');
const languages = document.querySelector('.languages');
const languagesArr = languages.querySelectorAll('p');
const roomsTitle = document.querySelector('.rooms').querySelectorAll('h3');
const roomsDescription = document.querySelectorAll('.rooms__description');
const aboutContent = document.querySelector('.about__content');
const h2 = document.querySelectorAll('h2');
const breakfast = document.querySelectorAll('.rooms__breakfast');
const person = document.querySelectorAll('.rooms__person');
const person4 = document.querySelectorAll('.rooms__person_4');
const kitchen = document.querySelectorAll('.rooms__kitchen');
const balcony = document.querySelectorAll('.rooms__balcony');
flag.addEventListener('click', () => {
  languages.classList.toggle('active');
});
// клик на язык в форме, чтобы изменить его и закрыть форму
languagesArr.forEach((el) => {
  el.addEventListener('click', () => {
    const elClass = el.className;
    flag.src = `assets/icons/${elClass}.svg`; // смена флага
    languages.classList.remove('active'); // закрытие формы
    aboutContent.innerHTML = translate[elClass].about__content; //перевод текста в секции about
    // перевод названий комнат
    roomsTitle.forEach((item) => {
      for (let room of rooms) {
        if (item.parentNode.classList.contains(room.number)) {
          item.textContent = room.title[elClass];
          break;
        }
      }
    });
    // перевод описания комнат
    roomsDescription.forEach((item) => {
      for (let room of rooms) {
        if (item.parentNode.classList.contains(room.number)) {
          item.textContent = room.description[elClass];
          break;
        }
      }
    });
    h2.forEach((item, index) => {
      item.textContent = translate[elClass].h2[index];
    });
    navLinks.forEach((item, index) => {
      item.textContent = translate[elClass].nav__link[index];
    });
    buttonPhotos.forEach((item) => {
      item.textContent = translate[elClass].button_photos;
    });
    btnsContact.forEach((item) => {
      item.querySelector('p').textContent = translate[elClass].rooms__select;
    });
    breakfast.forEach((item) => {
      item.textContent = translate[elClass].rooms__breakfast;
    });
    person.forEach((item) => {
      item.textContent = '2 ' + translate[elClass].rooms__person;
    });
    person4.forEach((item) => {
      item.textContent = '4 ' + translate[elClass].rooms__person;
    });
    kitchen.forEach((item) => {
      item.textContent = translate[elClass].rooms__kitchen;
    });
    balcony.forEach((item) => {
      if (item.textContent.slice(0, 1) !== 't') {
        item.textContent = translate[elClass].rooms__balcony;
      } else {
        item.textContent = translate[elClass].terrace;
      }
    });
  });
});
// клик на область вне окна с языками, чтобы закрыть его
document.body.addEventListener('click', (e) => {
  if (
    languages.classList.contains('active') &&
    !e.target.classList.contains('languages') &&
    !e.target.classList.contains('flag')
  ) {
    languages.classList.remove('active');
  }
});

// клик по кнопке contact us
btnsContact.forEach((el) => {
  el.querySelector('p').addEventListener('click', () => {
    el.classList.toggle('active');
    el.querySelector('.select').classList.toggle('active');
  });
});

// модальное окно о cookies
const cookies = document.querySelector('.cookies');
const contactsContainer = document.querySelector('.contacts__container');
const mapCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2747.0824836755837!2d13.787124687707733!3d46.48667912952477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a7dd7f6baf8fd%3A0x8d960940f424f952!2sRooms%20%22Pri%20Marusi%22!5e0!3m2!1sru!2str!4v1695656874119!5m2!1sru!2str" width="350" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
// поиск cookiesValue в local storage
window.addEventListener('load', () => {
  if (localStorage.getItem('consent') === 'yes') {
    contactsContainer.insertAdjacentHTML('beforeEnd', mapCode);
  } else {
    cookies.classList.remove('close');
    html.classList.add('lock');
    document.body.classList.add('lock');
  }
});

// нажатие кнопки accept
document.querySelector('.cookies__accept').addEventListener('click', () => {
  localStorage.setItem('consent', 'yes');
  cookies.classList.add('close');
  html.classList.remove('lock');
  document.body.classList.remove('lock');
  contactsContainer.insertAdjacentHTML('beforeEnd', mapCode);
});
// нажатие кнопки didn't accept
document.querySelector('.cookies__no').addEventListener('click', () => {
  cookies.classList.add('close');
  html.classList.remove('lock');
  document.body.classList.remove('lock');
  contactsContainer.insertAdjacentHTML(
    'beforeEnd',
    `<a href="https://www.google.com/maps/place/Rooms+%22Pri+Marusi%22/@46.486162,13.7800544,15z/data=!4m9!3m8!1s0x477a7dd7f6baf8fd:0x8d960940f424f952!5m2!4m1!1i2!8m2!3d46.4867529!4d13.7898823!16s%2Fg%2F11nmhx2bb0?hl=ru&entry=ttu"><img src="assets/img/map.png" width="350" height="200" alt="hotel on the google map"></a>`
  );
});
// установка правильной высоты экраны
let vh = window.innerHeight;
cookies.style.height = vh + 'px';
window.addEventListener('resize', () => {
  let vh = window.innerHeight;
  cookies.style.height = vh + 'px';
  console.log(cookies.style.height);
});
