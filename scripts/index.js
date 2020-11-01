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
let message = document.querySelector('.chat__input');
let messages = document.querySelector('.chat__messages');


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

function inputHandler(event) {
  if (message.value && event.keyCode === 13) {
    messages.insertAdjacentHTML('beforeend', `
      <li class="chat__message"><span class="chat__system">Ваше сообщение:<br></span> ${message.value}</li>
    `);
    message.value = '';
  }
}

document.addEventListener('keyup', inputHandler);
document.addEventListener('click', showChat);


// Задача 3
