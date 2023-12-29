const shoppingCartNum = Array.from(
  document.querySelectorAll(".shopping__cart_num")
);

const changeShoppingCartNum = () => {
  const quantityCheckedKindProducts = products.filter(
    (product) => product.isChecked === true
  ).length;

  shoppingCartNum.map((element) => {
    if (quantityCheckedKindProducts > 0) {
      element.innerHTML = `${quantityCheckedKindProducts}`;

      if (document.documentElement.clientWidth <= 320) {
        initializeFooterShoppingCart(quantityCheckedKindProducts);
      }

      return;
    }

    element.innerHTML = "";
    initializeFooterShoppingCart(quantityCheckedKindProducts);
  });
};

const initializeFooterShoppingCart = (quantityCheckedKindProducts) => {
  const shoppingCartFooter = Array.from(
    document.querySelectorAll(".footer_nav_shopping__cart path")
  );

  quantityCheckedKindProducts > 0
    ? shoppingCartFooter.map((element) => (element.style.fill = "#CB11AB"))
    : shoppingCartFooter.map((element) => (element.style.fill = "#CCCCCC"));
};
