const deliveryAddressForm = document.querySelector(
  ".delivery__address_changing_form"
);

const btnChangeDelivery = document.getElementById(
  "delivery__address_btn__change"
);

const btnChangingDeliveryMethodInTotal = document.querySelector(
  ".total_btn__changing__delivery__data"
);

const btnDeliveryMethodYourself = document.getElementById(
  "delivery__method__yourself_btn"
);

const btnDeliveryMethodCourier = document.getElementById(
  "delivery__method__courier_btn"
);

const listDeliveryAddress = document.querySelector(".delivery_list__addresses");

const btnClosingChangingDeliveryAddress = document.getElementById(
  "delivery__address_changing_btn__close"
);

const deliveryMethod = document.querySelector(".delivery_data_item_title");

const totalPaymentWay = document.getElementById("total_payment_way");

btnChangeDelivery.onclick = function () {
  openChangingDeliveryAddress();
};

btnChangingDeliveryMethodInTotal.onclick = function () {
  openChangingDeliveryAddress();
};

const openChangingDeliveryAddress = () => {
  const changingDeliveryAddress = document.querySelector(
    ".delivery_address_changing"
  );

  changingDeliveryAddress.style.display === "flex"
    ? (changingDeliveryAddress.style.display = "none")
    : (changingDeliveryAddress.style.display = "flex");

  changingDeliveryAddress.style.display === "flex"
    ? (body.style.overflow = "hidden")
    : (body.style.overflow = "auto");
};

btnDeliveryMethodYourself.onclick = function () {
  btnDeliveryMethodYourself.style.border = "2px solid #CB11AB";

  btnDeliveryMethodCourier.style.border = "2px solid rgba(203, 17, 171, 0.15)";

  printAddressesDeliveryMethodYourself();
};

btnDeliveryMethodCourier.onclick = function () {
  btnDeliveryMethodCourier.style.border = "2px solid #CB11AB";

  btnDeliveryMethodYourself.style.border = "2px solid rgba(203, 17, 171, 0.15)";

  printAddressesDeliveryMethodCourier();
};

btnClosingChangingDeliveryAddress.onclick = function (e) {
  openChangingDeliveryAddress();
};

const removeDeliveryAddress = (id) => {
  for (let key in deliveryAddressesData) {
    deliveryAddressesData[key].map((address, index) => {
      if (address.id == id) {
        document.getElementById(`address__label__${id}`).remove();
        deliveryAddressesData[key].splice(index, 1);
      }
    });
  }
};

deliveryAddressForm.addEventListener("submit", function (e) {
  e.preventDefault();
  chooseDeliveryAddress();
  saveChosenDeliveryAddress();
  openChangingDeliveryAddress();
});

const chooseDeliveryAddress = () => {
  const deliveryAddressChecked = document.querySelector(
    ".delivery_data_item__delivery__method"
  );
  const valueCheckedDEliveryAddress =
    deliveryAddressForm.elements.address.value;
  const deliveryAddressInTotal = document.querySelector(
    ".total_delivery_address"
  );
  const deliveryMethodInTotal = document.querySelector(
    ".total_item_header_title"
  );

  for (let key in deliveryAddresses) {
    const checkedDeliveryAddress = deliveryAddresses[key].find(
      (address) => address.id === valueCheckedDEliveryAddress
    );

    if (checkedDeliveryAddress !== undefined) {
      deliveryAddressChecked.innerHTML = `${
        checkedDeliveryAddress.rating !== undefined
          ? `<p class="delivery_data_item_title">Пункт выдачи</p>
                <div class="delivery_address__checked">
                    <p>${checkedDeliveryAddress.value}</p>
                    <p class="delivery_data_address__checked_information">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path 
                              fill-rule="evenodd" 
                              clip-rule="evenodd" 
                              d="M6.69769 1.14922C6.43817 0.528396 5.56198 0.528387 5.30244 1.14919L6.69769 1.14922ZM5.30244 1.14919L4.14719 3.90977L1.19202 4.16613C0.519264 4.22467 0.262282 5.05966 0.759713 5.49464L3.00514 7.45915L2.33207 10.3824C2.18436 11.0238 2.87792 11.5567 3.46133 11.2023L6.00032 9.65611L8.53797 11.2015C9.12269 11.5588 9.81568 11.0227 9.66861 10.3826L8.99549 7.45915L11.2402 5.49537C11.7385 5.05961 11.4793 4.22519 10.8083 4.16667L7.85294 3.91029L6.69769 1.14922" 
                              fill="#FF970D" 
                            />
                        </svg>
                        ${
                          checkedDeliveryAddress.rating !== null
                            ? `<span>${checkedDeliveryAddress.rating}</span>`
                            : ""
                        }
                        <span>Ежедневно с 10 до 21 </span>
                    </p>
                </div>`
          : `<p class="delivery_data_item_title">Курьер</p>
                <div class="delivery_address__checked">
                    <p>${checkedDeliveryAddress.value}</p>
                </div>`
      }`;

      deliveryMethodInTotal.innerHTML = `${
        checkedDeliveryAddress.rating !== undefined
          ? "Доставка в пункт выдачи"
          : "Доставка на дом"
      }`;

      deliveryAddressInTotal.innerHTML = `${checkedDeliveryAddress.value}`;
    }
  }
};

const saveChosenDeliveryAddress = () => {
  const valueCheckedDeliveryAddress =
    deliveryAddressForm.elements.address.value;

  for (let key in deliveryAddresses) {
    deliveryAddresses[key].map((address) => {
      address.id === valueCheckedDeliveryAddress
        ? (address.isChecked = true)
        : (address.isChecked = false);
    });
  }

  localStorage.setItem("deliveryAddresses", JSON.stringify(deliveryAddresses));
};

document.querySelector(".delivery_footer span").onmouseover = function () {
  document.querySelector(
    ".delivery_footer_delivery_cost__information"
  ).style.display = "block";
};

document.querySelector(".delivery_footer span").onmouseout = function () {
  document.querySelector(
    ".delivery_footer_delivery_cost__information"
  ).style.display = "none";
};

const initializeListDeliveryAddress = () => {
  for (let key in deliveryAddresses) {
    const checkedDeliveryAddress = deliveryAddresses[key].find(
      (address) => address.isChecked === true
    );

    if (checkedDeliveryAddress && key === "deliveryMethodYourself") {
      printAddressesDeliveryMethodYourself();
      btnDeliveryMethodYourself.style.border = "2px solid #cb11ab";
      btnDeliveryMethodCourier.style.border =
        "2px solid rgba(203, 17, 171, 0.15)";

      return;
    }

    btnDeliveryMethodCourier.style.border = "2px solid #cb11ab";
    btnDeliveryMethodYourself.style.border =
      "2px solid rgba(203, 17, 171, 0.15)";
    printAddressesDeliveryMethodCourier();
  }
};

const printAddressesDeliveryMethodYourself = () => {
  listDeliveryAddress.innerHTML = `${deliveryAddresses.deliveryMethodYourself
    .map((address) => {
      const { id, value, rating, isChecked } = address;

      return `<label class="address" id='address__label__${id}'>
        <input type="radio" name="address" value=${id} ${
        isChecked ? "checked" : ""
      }>
        <div class="address__information">
            <p>${value}</p>
            <p class="address_rating">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                >
                    <path 
                      fill-rule="evenodd" 
                      clip-rule="evenodd" 
                      d="M6.69769 1.14922C6.43817 0.528396 5.56198 0.528387 5.30244 1.14919L6.69769 1.14922ZM5.30244 1.14919L4.14719 3.90977L1.19202 4.16613C0.519264 4.22467 0.262282 5.05966 0.759713 5.49464L3.00514 7.45915L2.33207 10.3824C2.18436 11.0238 2.87792 11.5567 3.46133 11.2023L6.00032 9.65611L8.53797 11.2015C9.12269 11.5588 9.81568 11.0227 9.66861 10.3826L8.99549 7.45915L11.2402 5.49537C11.7385 5.05961 11.4793 4.22519 10.8083 4.16667L7.85294 3.91029L6.69769 1.14922" 
                      fill="#FF970D" 
                    />
                </svg>
                ${rating ? `<span>${rating}</span>` : ""}
                <span>Пункт выдачи</span>
            </p>
        </div>
        <button class="delivery_address_removal__cover removal__cover" onclick=removeDeliveryAddress("${id}")>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
            >
                <path 
                    class="removal" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" 
                    fill="#9797AF" 
                />
                <path 
                    class="removal" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" 
                    fill="#9797AF" 
                />
                <path 
                    class="removal" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" 
                    fill="#9797AF" 
                />
            </svg>
        </button>
    </label>`;
    })
    .join("")}`;
};

const printAddressesDeliveryMethodCourier = () => {
  listDeliveryAddress.innerHTML = `${deliveryAddresses.deliveryMethodCourier
    .map((address) => {
      const { id, value, isChecked } = address;

      return `<label class="address" id="address__label__${id}">
        <input type="radio" name="address" value=${id} ${
        isChecked ? "checked" : ""
      } />
        <p>${value}</p>
        <button class="delivery_address_removal__cover removal__cover" onclick=removeDeliveryAddress("${id}")>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
            >
                <path 
                    class="removal" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" 
                    fill="#9797AF" 
                />
                <path 
                    class="removal" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" 
                    fill="#9797AF" 
                />
                <path 
                    class="removal" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" 
                    fill="#9797AF" 
                />
            </svg>
        </button>
    </label>`;
    })
    .join("")}`;
};
