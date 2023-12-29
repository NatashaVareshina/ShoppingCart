const removeProduct = (id) => {
  products.map((product, index, array) => {
    if (product.id == id) {
      array.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(array));
      return;
    }
  });
};
