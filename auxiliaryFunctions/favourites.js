const heartClick = (id) => {
  const heart = document.getElementById(`heart__${id}`);

  heart.classList.toggle("active");

  if (heart.classList.contains("active")) {
    products.find((product) => +product.id === id).isFavourite = true;

    localStorage.setItem("products", JSON.stringify(products));

    return;
  }

  products.find((product) => +product.id === id).isFavourite = false;

  localStorage.setItem("products", JSON.stringify(products));
};

const initializefavouritesNum = () => {
  const favouritesNum = document.getElementById("favourites_num");
  const favourites = Array.from(document.querySelectorAll(".favourites path"));

  const favoutitesQuantity = products.filter(
    (product) => product.isFavourite === true
  ).length;

  favouritesNum.innerHTML = `${
    favoutitesQuantity > 0 ? favoutitesQuantity : ""
  }`;

  favouritesNum.innerText !== ""
    ? favourites.map((element) => (element.style.fill = "#CB11AB"))
    : favourites.map((element) => (element.style.fill = "#CCCCCC"));
};
