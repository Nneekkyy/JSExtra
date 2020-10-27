const title = document.querySelector(".header__rectangle");
const chat = document.querySelector(".chat__field");

function scrollHandler(event) {
  if (window.scrollY > 300 && window.scrollY < 1943) {
    title.classList.add("header__top-fixed");
  }

  else {
    title.classList.remove("header__top-fixed");
  }
}

function chatUnhidden() {
  chat.classList.add("chat__field_unhidden");
}
// function chatHidden(event) {
//   if (event.target.class != "chat__field") {
//     chat.classList.remove("chat__field_unhidden");
//   }
// }
document.addEventListener('scroll', scrollHandler);
document.addEventListener('click', chatUnhidden);
document.addEventListener('click', chatHidden);
