// Задача 1

const title = document.querySelector(".header__rectangle");
let maxHeight = title.offsetTop;

function scrollHandler() {

  if (window.scrollY >= maxHeight && window.scrollY <= 1950) {
    title.classList.add('header__top-fixed');
  } else {
    title.classList.remove('header__top-fixed');
  }
}

window.addEventListener('scroll', scrollHandler)

// Задача 2


const chatField = document.querySelector(".chat__field");
const chat = document.querySelector(".chat");
const button = document.querySelector(".chat__button");

function openChat() {
  chatField.classList.toggle('chat__field_unhidden');
}

function closeChat() {
  chatField.classList.remove('chat__field_unhidden');
}

function showChat(e) {
  if (e.target === button) {
    openChat()
  } else if (e.target === chat) {
    closeChat()
  }
}



document.addEventListener('click', showChat);


// Задача 3
