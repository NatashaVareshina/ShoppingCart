const timePayment = document.getElementById("time__payment");

timePayment.onclick = function () {
  const btnOrder = document.getElementById("btn__order");

  btnOrder.innerHTML = `${
    timePayment.checked ? `Оплатить ${totalSum.textContent} сом` : "Заказать"
  }`;
};
