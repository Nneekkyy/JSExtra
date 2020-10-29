const title = document.querySelector(".header__rectangle");
const chatField = document.querySelector(".chat__field");
const chat = document.querySelector(".chat");
const button = document.querySelector(".chat__button");



function scrollHandler(event) {
  if (window.scrollY > 300 && window.scrollY < 1943) {
    title.classList.add("header__top-fixed");
  }

  else {
    title.classList.remove("header__top-fixed");
  }
}

function showChat() {
  chatField.classList.add('chat__field_unhidden');
}

function closeChat() {
  chatField.classList.remove('chat__field_unhidden')
}




document.addEventListener('scroll', scrollHandler);



















function popupClick(event) {
   console.log('event.target:', event.target.className);
   console.log('event.target:', event.target.classList);
   console.log('event.currentTarget:', event.currentTarget);
}
document.addEventListener('click', popupClick);
