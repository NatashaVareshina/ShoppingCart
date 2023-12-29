const decreaseProductQuantity = (id) => {
  const currentProduct = products.find((product) => product.id == id);

  if (currentProduct.productsInShoppingCart > 1) {
    currentProduct.productsInShoppingCart -= 1;

    currentProduct.remainingProduct += 1;
  }

  document.getElementById(id).innerHTML = currentProduct.productsInShoppingCart;

  if (currentProduct.remainingProduct > 9) {
    document
      .getElementById(`commodity__${id}__remaining`)
      .classList.add("hidden");
  }

  document.getElementById(
    `commodity__${id}__remaining_value__current`
  ).innerHTML = currentProduct.remainingProduct;

  if (currentProduct.remainingProduct > 0) {
    document.getElementById(`btn__plus__${id}`).style.color = "#000";
  }

  if (currentProduct.productsInShoppingCart === 1) {
    document.getElementById(`btn__minus__${id}`).style.color = "#00000033";
  }

  products.find((product) => product.id == id).productsInShoppingCart =
    currentProduct.productsInShoppingCart;
  products.find((product) => product.id == id).remainingProduct =
    currentProduct.remainingProduct;
  localStorage.setItem("products", JSON.stringify(products));
};

const increaseProductQuantity = (id) => {
  const currentProduct = products.find((product) => product.id == id);

  if (currentProduct.remainingProduct > 0) {
    currentProduct.productsInShoppingCart += 1;

    currentProduct.remainingProduct -= 1;
  }

  document.getElementById(id).innerHTML = currentProduct.productsInShoppingCart;

  if (currentProduct.remainingProduct < 10) {
    document
      .getElementById(`commodity__${id}__remaining`)
      .classList.remove("hidden");
  }

  document.getElementById(
    `commodity__${id}__remaining_value__current`
  ).innerHTML = currentProduct.remainingProduct;

  if (currentProduct.remainingProduct === 0) {
    document.getElementById(`btn__plus__${id}`).style.color = "#00000033";
  }

  if (currentProduct.productsInShoppingCart > 1) {
    document.getElementById(`btn__minus__${id}`).style.color = "#000";
  }

  products.find((product) => product.id == id).productsInShoppingCart =
    currentProduct.productsInShoppingCart;
  products.find((product) => product.id == id).remainingProduct =
    currentProduct.remainingProduct;
  localStorage.setItem("products", JSON.stringify(products));
};

const changeTotalPrice = (id) => {
  const currentProduct = products.find((product) => product.id == id);

  currentProduct.totalPrice = Math.round(
    currentProduct.productsInShoppingCart * currentProduct.unitPrice
  );

  const discountValue =
    (currentProduct.totalPrice * currentProduct.discount) / 100;

  currentProduct.forPayment = Math.round(
    currentProduct.totalPrice - discountValue
  );

  document.getElementById(`for__payment_value__${id}`).innerHTML =
    currentProduct.forPayment;

  document.getElementById(`price__total_value__${id}`).innerHTML =
    currentProduct.totalPrice;

  products.find((product) => product.id == id).forPayment =
    currentProduct.forPayment;
  products.find((product) => product.id == id).totalPrice =
    currentProduct.totalPrice;
  localStorage.setItem("products", JSON.stringify(products));
};
