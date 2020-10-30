const title = document.querySelector(".header__rectangle");
const chatField = document.querySelector(".chat__field");
const chat = document.querySelector(".chat");
const button = document.querySelector(".chat__button");

let maxHeight = title.offsetTop;

function scrollHandler() {

  if (window.scrollY >= maxHeight && window.scrollY <= 1950) {
    title.classList.add('header__top-fixed');
  } else {
    title.classList.remove('header__top-fixed');
  }
}

window.addEventListener('scroll', scrollHandler)


function scrolling(e) {

  console.log(window.scrollY);
}

document.addEventListener('scroll', scrolling);










// function popupClick(event) {
//    console.log('event.target:', event.target.className);
//    console.log('event.target:', event.target.classList);
//    console.log('event.currentTarget:', event.currentTarget);
// }
// document.addEventListener('click', popupClick);
