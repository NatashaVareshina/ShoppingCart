const formSearch = document.querySelector(".form__search");
const btnSearch = document.querySelector(".btn__search");
const inputSearch = document.querySelector(".input__search");
const bntBurger = document.querySelector(".btn__burger");
const btnClose = document.querySelector(".form__search_btn__close");
const logo = document.querySelector(".logo");

window.addEventListener("resize", (e) => {
  const width = document.body.clientWidth;

  if (width < 320) {
    return (inputSearch.style.display = "none");
  }

  bntBurger.style.display = "flex";
  logo.style.display = "flex";
  inputSearch.style.display = "flex";
  btnClose.style.display = "none";
  btnSearch.style.display = "flex";
});

btnSearch.onclick = function () {
  search();
};

btnClose.onclick = function () {
  closeFormSerch();
};

formSearch.addEventListener("search", (e) => {
  e.preventDefault(), closeFormSerch();
});

const search = () => {
  if (document.documentElement.clientWidth < 321) {
    formSearch.classList.toggle("active");

    bntBurger.style.display = "none";
    logo.style.display = "none";
    inputSearch.style.display = "flex";
    btnSearch.style.display = "none";
    btnClose.style.display = "flex";

    return;
  }

  inputSearch.style.display = "flex";
  btnSearch.style.display = "none";
  btnClose.style.display = "flex";
};

const closeFormSerch = () => {
  if (document.documentElement.clientWidth < 321) {
    formSearch.classList.toggle("active");
    bntBurger.style.display = "flex";
    logo.style.display = "flex";
    inputSearch.style.display = "none";
    inputSearch.value = "";
    btnClose.style.display = "none";
    btnSearch.style.display = "flex";

    return;
  }

  inputSearch.style.display = "flex";
  inputSearch.value = "";
  btnClose.style.display = "none";
  btnSearch.style.display = "flex";
};
