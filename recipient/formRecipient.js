const formRecipient = document.getElementById("form__order");

const firstName = document.getElementById("name__first");

const messageFirstName = document.querySelector(".name__first_message");

const lastName = document.getElementById("name__last");

const messageLastName = document.querySelector(".name__last_message");

const email = document.getElementById("email");

const messageEmail = document.querySelector(".email_message");

const tel = document.getElementById("tel");

const messageTel = document.querySelector(".tel_message");

const individualTaxpayerNumber = document.getElementById(
  "individual__taxpayer__number"
);

const messageIndividualTaxpayerNumber = document.querySelector(
  ".individual__taxpayer__number_message"
);

const explanationIndividualTaxpayerNumber = document.querySelector(
  ".individual__taxpayer__number_explanation"
);

const labelIndividualTaxpayerNumber = document.querySelector(
  ".individual__taxpayer__number_label"
);

firstName.onchange = function () {
  if (regularExpressions.REGEX_FOR_CHECK_NAME.test(firstName.value)) {
    firstName.style.color = "#F55123";

    firstName.style.borderBottom = "2px solid #F55123";

    messageFirstName.style.display = "block";

    messageFirstName.innerHTML = "Проверьте правильность написания имени";

    return;
  }

  if (regularExpressions.REGEX_FOR_CHECK_EMPTY_VALUE.test(firstName.value)) {
    firstName.style.color = "#000000";

    firstName.style.borderBottom = "2px solid #00000033";

    messageFirstName.style.display = "none";
  }
};

firstName.oninput = function () {
  if (
    messageFirstName.style.display === "block" &&
    firstName.value.length > 1 &&
    firstName.style.color === "rgb(245, 81, 35)"
  ) {
    firstName.style.color = "#000000";

    firstName.style.borderBottom = "2px solid #00000033";

    messageFirstName.style.display = "none";
  }
};

lastName.onchange = function () {
  if (regularExpressions.REGEX_FOR_CHECK_NAME.test(lastName.value)) {
    lastName.style.color = "#F55123";

    lastName.style.borderBottom = "2px solid #F55123";

    messageLastName.style.display = "block";

    messageLastName.innerHTML = "Проверьте правильность написания фамилии";

    return;
  }

  if (regularExpressions.REGEX_FOR_CHECK_EMPTY_VALUE.test(lastName.value)) {
    lastName.style.color = "#000000";

    lastName.style.borderBottom = "2px solid #00000033";

    messageLastName.style.display = "none";
  }
};

lastName.oninput = function () {
  if (
    messageLastName.style.display === "block" &&
    lastName.value.length > 1 &&
    lastName.style.color === "rgb(245, 81, 35)"
  ) {
    lastName.style.color = "#000000";

    lastName.style.borderBottom = "2px solid #00000033";

    messageLastName.style.display = "none";
  }
};

email.onchange = function () {
  if (regularExpressions.REGEX_FOR_CHECK_EMPTY_VALUE.test(email.value)) {
    email.style.color = "#000000";

    email.style.borderBottom = "2px solid #00000033";

    messageEmail.style.display = "none";

    return;
  }

  if (!regularExpressions.REGEX_FOR_CHECK_EMAIL.test(email.value)) {
    email.style.color = "#F55123";

    email.style.borderBottom = "2px solid #F55123";

    messageEmail.style.display = "block";

    messageEmail.innerHTML = "Проверьте адрес электронной почты";
  }
};

email.oninput = function () {
  if (
    messageEmail.style.display === "block" &&
    email.value.length > 1 &&
    email.style.color === "rgb(245, 81, 35)"
  ) {
    email.style.color = "#000000";

    email.style.borderBottom = "2px solid #00000033";

    messageEmail.style.display = "none";
  }
};

tel.onchange = function () {
  if (/^\+7$/.test(tel.value)) {
    tel.style.color = "#000000";

    tel.style.borderBottom = "2px solid #00000033";

    messageTel.style.display = "none";

    tel.value = "";

    return;
  }

  if (tel.value.length !== 16 && tel.value.length !== 0) {
    tel.style.color = "#F55123";

    tel.style.borderBottom = "2px solid #F55123";

    messageTel.style.display = "block";

    messageTel.innerHTML = "Формат: +9 999 999 99 99";
  }
};

tel.oninput = function (e) {
  if (tel.value.length === 0) {
    tel.style.color = "#000000";

    tel.style.borderBottom = "2px solid #00000033";

    messageTel.style.display = "none";

    tel.value = "";

    return;
  }

  telElements = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

  if (
    messageTel.style.display === "block" &&
    tel.value.length > 1 &&
    tel.style.color === "rgb(245, 81, 35)"
  ) {
    tel.style.color = "#000000";

    tel.style.borderBottom = "2px solid #00000033";

    messageTel.style.display = "none";
  }

  e.target.value = !telElements[2]
    ? "+7"
    : "+7 " +
      telElements[2] +
      (telElements[3] ? " " + telElements[3] : "") +
      (telElements[4] ? "-" + telElements[4] : "") +
      (telElements[5] ? "-" + telElements[5] : "");
};

individualTaxpayerNumber.onchange = function () {
  if (
    !regularExpressions.REGEX_FOR_CHECK_INDIVIDUAL_TAXPAYER_NUMBER.test(
      individualTaxpayerNumber.value
    ) &&
    individualTaxpayerNumber.value.length !== 0
  ) {
    individualTaxpayerNumber.style.color = "#F55123";

    individualTaxpayerNumber.style.borderBottom = "2px solid #F55123";

    messageIndividualTaxpayerNumber.style.display = "block";

    explanationIndividualTaxpayerNumber.style.display = "none";

    messageIndividualTaxpayerNumber.innerHTML = "Проверьте ИНН";

    labelIndividualTaxpayerNumber.innerHTML = "ИНН для таможни";

    return;
  }
};

individualTaxpayerNumber.oninput = function () {
  if (
    messageIndividualTaxpayerNumber.style.display === "block" &&
    individualTaxpayerNumber.value.length >= 0 &&
    individualTaxpayerNumber.style.color === "rgb(245, 81, 35)"
  ) {
    individualTaxpayerNumber.style.color = "#000000";

    individualTaxpayerNumber.style.borderBottom = "2px solid #00000033";

    messageIndividualTaxpayerNumber.style.display = "none";

    labelIndividualTaxpayerNumber.innerHTML = "ИНН";

    explanationIndividualTaxpayerNumber.style.display = "block";
  }
};

const regularExpressions = {
  REGEX_FOR_CHECK_NAME: /[^A-Za-z\s]/,
  REGEX_FOR_CHECK_EMAIL:
    /^([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  REGEX_FOR_CHECK_EMPTY_VALUE: /^\s*$/,
  REGEX_FOR_CHECK_INDIVIDUAL_TAXPAYER_NUMBER: /^\d{14}$/,
};

const createMessageMistake = (element, messageElement, text) => {
  element.style.color = "#F55123";
  element.style.borderBottom = "2px solid #F55123";

  if (element === individualTaxpayerNumber)
    explanationIndividualTaxpayerNumber.style.display = "none";

  messageElement.style.display = "block";

  messageElement.innerHTML = text;

  document.getElementById("recipient").scrollIntoView();
};

const deleteMessageMistake = (element, messageElement, text) => {
  element.style.borderBottom = "2px solid #00000033";

  messageElement.style.display = "none";

  if (element === individualTaxpayerNumber)
    explanationIndividualTaxpayerNumber.style.display = "none";
};

const checkFormData = () => {
  if (firstName.value.replace(/\s/g, "").length === 0)
    createMessageMistake(firstName, messageFirstName, "Укажите имя");

  if (lastName.value.replace(/\s/g, "").length === 0)
    createMessageMistake(lastName, messageLastName, "Введите фамилию");

  if (email.value.replace(/\s/g, "").length === 0)
    createMessageMistake(email, messageEmail, "Укажите электронную почту");

  if (tel.value.replace(/\s/g, "").length === 0)
    createMessageMistake(tel, messageTel, "Укажите номер телефона");

  if (individualTaxpayerNumber.value.replace(/\s/g, "").length === 0)
    createMessageMistake(
      individualTaxpayerNumber,
      messageIndividualTaxpayerNumber,
      "Укажите ИНН"
    );
};

formRecipient.addEventListener("submit", (e) => {
  e.preventDefault(), checkFormData();
});
