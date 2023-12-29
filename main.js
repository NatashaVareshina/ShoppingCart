const body = document.getElementById("body");

const productsInStock = document.querySelector(".products__in__stock");

const productsInStockList = document.querySelector(".products__in__stock_list");

const misingProducts = document.querySelector(".products__mising");

const initializeProductPanelsControl = () => {
  const quantityMisingProducts = document.getElementById(
    "products__mising_quantity"
  );

  const quantityProductsInStock = products.filter(
    (product) => product.isStockAvailability === true
  ).length;

  if (quantityProductsInStock === 0) {
    productsInStock.innerHTML = "";
  }

  if (+quantityMisingProducts.textContent.replace(/[^0-9]/g, "") < 1) {
    misingProducts.innerHTML = "";
  }
};

const createDeliveryDateProducts = () => {
  const deliveryDateInTotal = document.querySelector(".total_date__delivery");

  const deliveryDateProducts = document.querySelector(
    ".delivery_date_products"
  );

  if (products.filter((product) => product.isChecked === true).length === 0) {
    deliveryDateInTotal.innerHTML = "";

    deliveryDateProducts.innerHTML = "";

    return;
  }

  const hasTwoDaysDelivery =
    products.filter(
      (product) =>
        product.isChecked === true && product.productsInShoppingCart > 184
    ).length > 0;

  if (!hasTwoDaysDelivery) {
    deliveryDateInTotal.innerHTML = "5—6 фев";

    deliveryDateProducts.innerHTML = `<p class="delivery_data_item_title">5—6 февраля</p>
          <div>
              ${products
                .filter((product) => product.isChecked === true)
                .map((product) => {
                  return `<div class="delivery_date_products_item">
                      <img src="${product.image}.png">
                      ${
                        product.productsInShoppingCart > 1
                          ? `<div class="delivery_date_products_item_quantity">${product.productsInShoppingCart}</div>`
                          : ""
                      }
                  </div>`;
                })
                .join("")}
          </div>`;

    return;
  }

  deliveryDateProducts.innerHTML = `<p class="delivery_data_item_title">5—6 февраля</p>
      <div>
          ${products
            .filter((product) => product.isChecked === true)
            .map((product) => {
              return `<div class="delivery_date_products_item">
                  <img src="${product.image}.png">
                  ${
                    product.productsInShoppingCart > 1
                      ? `<div class="delivery_date_products_item_quantity">
                          ${
                            product.productsInShoppingCart < 185
                              ? product.productsInShoppingCart
                              : 184
                          }
                      </div>`
                      : ""
                  }
              </div>`;
            })
            .join("")}
      </div>
      ${
        products.filter(
          (product) =>
            product.isChecked === true && product.productsInShoppingCart > 184
        ).length > 0
          ? `<p class="delivery_data_item_title">7—8 февраля</p>
          <div>
              ${products
                .filter(
                  (product) =>
                    product.isChecked === true &&
                    product.productsInShoppingCart > 184
                )
                .map((product) => {
                  return `<div class="delivery_date_products_item">
                      <img src="${product.image}.png">
                      <div class="delivery_date_products_item_quantity">${
                        product.productsInShoppingCart - 184
                      }</div>
                  </div>`;
                })
                .join("")}
          </div>`
          : ""
      }`;

  deliveryDateInTotal.innerHTML = "5-8 фев";
};

const getCheckedProductsInShoppingCart = () => {
  let sum = 0;

  return products
    .filter((product) => product.isChecked === true)
    .map((product) => {
      return (sum += product.productsInShoppingCart);
    })
    .at(-1);
};

const addSpacesBetweenFigures = (number) => {
  const result = Intl.NumberFormat("ru-RU").format(number);

  return result !== "не число" ? result : 0;
};

const getTotalSum = () => {
  let totalCost = 0;

  const number = products
    .filter((product) => product.isChecked === true)
    .map((product) => {
      return (totalCost += product.forPayment);
    })
    .at(-1);

  return addSpacesBetweenFigures(number);
};

document.querySelector(".total_redelivery span").onmouseover = function () {
  document.querySelector(".redelivery_cost__information").style.display =
    "block";
};

document.querySelector(".total_redelivery span").onmouseout = function () {
  document.querySelector(".redelivery_cost__information").style.display =
    "none";
};

const initializeElements = () => {
  createProductsInStockList();

  changeShoppingCartNum();

  initializeGeneralCheckbox();

  createQuantityMisingProducts();

  createMisingProductsList();

  initializeProductPanelsControl();

  initializeListDeliveryAddress();

  chooseDeliveryAddress();

  createDeliveryDateProducts();

  checkBankCard();

  initializeBankCards();

  createElementsInTotal();

  initializefavouritesNum();
};

checkboxGeneral.onclick = function () {
  checkboxGeneral.checked
    ? clickGeneralCheckbox(true)
    : clickGeneralCheckbox(false);

  changeShoppingCartNum();

  createDeliveryDateProducts();

  createElementsInTotal();
};

const manageCommodityInput = (id) => {
  clickCheckbox(id);

  changeShoppingCartNum();

  createDeliveryDateProducts();

  createElementsInTotal();
};

const manageHeartClick = (id) => {
  heartClick(id);
  initializefavouritesNum();
};

const manageRemovingProducts = (id) => {
  removeProduct(id);

  createProductsInStockList();

  changeShoppingCartNum();

  createMisingProductsList();

  createQuantityMisingProducts();

  initializeProductPanelsControl();

  createDeliveryDateProducts();

  createElementsInTotal();

  initializefavouritesNum();
};

const manageIncreasingProductQuantity = (id) => {
  increaseProductQuantity(id);

  changeTotalPrice(id);

  createDeliveryDateProducts();

  createElementsInTotal();
};

const manageDecreaseProductQuantity = (id) => {
  decreaseProductQuantity(id);

  changeTotalPrice(id);

  createDeliveryDateProducts();

  createElementsInTotal();
};

initializeElements();
