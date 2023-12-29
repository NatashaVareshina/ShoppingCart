if (localStorage.getItem("products") == null) {
  localStorage.setItem("products", JSON.stringify(productsData));
}

const products = JSON.parse(localStorage.getItem("products"));

if (localStorage.getItem("deliveryAddresses") == null) {
  localStorage.setItem(
    "deliveryAddresses",
    JSON.stringify(deliveryAddressesData)
  );
}

const deliveryAddresses = JSON.parse(localStorage.getItem("deliveryAddresses"));

if (localStorage.getItem("bankCards") == null) {
  localStorage.setItem("bankCards", JSON.stringify(bankCardsData));
}

const bankCards = JSON.parse(localStorage.getItem("bankCards"));
