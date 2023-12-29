const PaymentMethodChanging = document.querySelector(
  ".payment__method_changing"
);

const form = document.querySelector(".payment__method_changing_form");

const inputsRadio = document.getElementById("submit");

const cards = document.querySelector(".payment__method_cards");

const btnClosingChangingPaymentMethod = document.querySelector(
  ".payment__method_changing_btn__close"
);

const btnChangingPaymentMethod = document.getElementById(
  "payment__method_btn__change"
);
const btnChangingPaymentMethodInTotal = document.querySelector(
  ".total_payment_card__changing"
);

const checkedBankCard = document.querySelector(".card__bank");

const checkedBankCardInTotal = document.querySelector(".total_payment_card");

btnChangingPaymentMethod.onclick = function (e) {
  openChangingPaymentMethod();
};

const initializeBankCards = () => {
  cards.innerHTML = `${bankCards
    .map((card) => {
      const { id, img, number, isChecked } = card;

      return `<label class="card__bank" id=${id}>
        <input type="radio" name="card" value=${id} ${
        isChecked ? "checked" : ""
      }>
        <img src=${img}>
        <span>${number
          .split("")
          .map((element, index) => {
            return index >= 7 && index <= 13 && element !== " " ? "•" : element;
          })
          .join("")}
        </span>
    </label>`;
    })
    .join("")}`;
};

btnClosingChangingPaymentMethod.onclick = function (e) {
  openChangingPaymentMethod();
};

btnChangingPaymentMethodInTotal.onclick = function (e) {
  openChangingPaymentMethod();
};

const openChangingPaymentMethod = () => {
  PaymentMethodChanging.style.display === "flex"
    ? (PaymentMethodChanging.style.display = "none")
    : (PaymentMethodChanging.style.display = "flex");

  PaymentMethodChanging.style.display === "flex"
    ? (body.style.overflow = "hidden")
    : (body.style.overflow = "auto");
};

form.addEventListener("submit", function (e) {
  const valueCheckedCard = form.elements.card.value;

  e.preventDefault();

  openChangingPaymentMethod();

  saveCheckedBankCard(valueCheckedCard);

  checkBankCard(valueCheckedCard);
});

const saveCheckedBankCard = (valueCheckedCard) => {
  bankCards.map((card) => {
    card.id === valueCheckedCard
      ? (card.isChecked = true)
      : (card.isChecked = false);
  });

  localStorage.setItem("bankCards", JSON.stringify(bankCards));
};

const checkBankCard = (valueCheckedCard) => {
  checkedBankCardInTotal.innerHTML = `${bankCards
    .map((card) => {
      const { img, number, isChecked } = card;

      return isChecked === true
        ? `<img src=${img}>
                <span>
                    ${number
                      .split("")
                      .map((element, index) => {
                        return index >= 7 && index <= 13 && element !== " "
                          ? "•"
                          : element;
                      })
                      .join("")}
                </span>`
        : "";
    })
    .join("")}`;

  checkedBankCard.innerHTML =
    checkedBankCardInTotal.innerHTML !== ""
      ? `${checkedBankCardInTotal.innerHTML}
        <span> 01/30</span>`
      : "";
};
