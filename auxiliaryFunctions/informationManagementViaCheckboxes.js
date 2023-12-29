const checkboxGeneral = document.getElementById("checkbox__general");

const totalSum = document.querySelector(".total__sum_value");

const checkedProductsQuantity = document.querySelector(
  ".checked__products__quantity"
);

const costWithoutDiscountCheckedProducts = document.querySelector(
  ".checked__products_cost__without__discount"
);

const totalDiscountCheckedProducts = document.querySelector(
  ".checked__products__discount__total"
);

const initializeGeneralCheckbox = () => {
  const quantityCheckedProducts = products.filter(
    (product) => product.isChecked === true
  ).length;

  quantityCheckedProducts ===
  products.filter((product) => product.isStockAvailability === true).length
    ? (checkboxGeneral.checked = true)
    : (checkboxGeneral.checked = false);
};

const clickGeneralCheckbox = (value) => {
  Array.from(
    document
      .getElementById("products__in__stock_list")
      .getElementsByTagName("input")
  )
    .filter((input) => input.checked !== toString(value))
    .map((input) => {
      products.find(
        (product) => product.id == input.id.replace(/[^\d]/g, "")
      ).isChecked = value;

      return (input.checked = value);
    });

  products
    .filter((product) => product.stockAviability === true)
    .map((product) => (product.isChecked = value)).isChecked = value;
  localStorage.setItem("products", JSON.stringify(products));
};

const clickCheckbox = (id) => {
  const input = document.getElementById(`input__${id}`);

  products.find((product) => product.id == id).isChecked = input.checked;

  const checkedInputsProductsInStock = Array.from(
    document
      .getElementById("products__in__stock_list")
      .getElementsByTagName("input")
  ).find((input) => input.checked === true);

  const inputs = Array.from(
    document
      .getElementById("products__in__stock_list")
      .getElementsByTagName("input")
  );

  initializeGeneralCheckbox();

  products.find((product) => product.id == id).isChecked = input.checked;
  localStorage.setItem("products", JSON.stringify(products));
};
