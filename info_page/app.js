// переключение языка
import translate from './lang.js';
const main = document.querySelector('main');
const english = document.querySelector('.english');
const slovenia = document.querySelector('.slovenia');
slovenia.addEventListener('click', () => {
  main.innerHTML = translate.slovenia;
});
english.addEventListener('click', () => {
  main.innerHTML = translate.english;
});
