const title = document.querySelector(".header__rectangle");


function scrollHandler(event) {
  // window - это тоже объект, который у нас есть всегда и у него тоже полно значений
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    title.classList.add(".header__top-fixed")
  } else {
    title.classList.remove(".header__top-fixed")
  }
}

document.addEventListener('scroll', scrollHandler);

// а это пример того, что использовать addEventListener можно много раз к одному элементу

//document.addEventListener('scroll', popupClick)
