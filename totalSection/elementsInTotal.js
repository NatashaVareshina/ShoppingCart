const getCostWithoutDiscountCheckedProducts = () => {
  let sum = 0;

  const number = products
    .filter((product) => product.isChecked === true)
    .map((product) => {
      return (sum += product.totalPrice);
    })
    .at(-1);

  return addSpacesBetweenFigures(number);
};

const getTotalDiscountCheckedProducts = () => {
  let sum = 0;

  const number = products
    .filter((product) => product.isChecked === true)
    .map((product) => {
      return (sum +=
        product.unitPrice * product.productsInShoppingCart -
        product.forPayment);
    })
    .at(-1);

  return addSpacesBetweenFigures(number);
};

createElementsInTotal = () => {
  totalSum.innerHTML = `${getTotalSum() !== undefined ? getTotalSum() : 0}`;

  checkedProductsQuantity.innerHTML = `${
    getCheckedProductsInShoppingCart() !== undefined
      ? `${getCheckedProductsInShoppingCart()} товара`
      : "0 товара"
  }`;

  costWithoutDiscountCheckedProducts.innerHTML = `${
    getCostWithoutDiscountCheckedProducts() !== undefined
      ? `${getCostWithoutDiscountCheckedProducts()} сом`
      : "0 сом"
  }`;

  totalDiscountCheckedProducts.innerHTML = `${
    getTotalDiscountCheckedProducts() !== undefined
      ? `−${getTotalDiscountCheckedProducts()} сом`
      : "0 сом"
  }`;
};