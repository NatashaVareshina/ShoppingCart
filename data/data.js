const productsData = [
  {
    id: "1",
    image: "./images/firstProduct",
    title: "Футболка UZcotton мужская",
    characteristic: [
      {
        parameter: "color",
        title: "Цвет",
        value: "белый",
      },
      {
        parameter: "size",
        title: "размер",
        value: "56",
      },
    ],
    company: "OOO Вайлдберриз",
    informationAboutCompany: [
      "ООО Вайлдберриз",
      "ОГРН: 1067746062449",
      "142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    ],
    productsInShoppingCart: 1,
    remainingProduct: 2,
    isStockAvailability: true,
    unitPrice: 1051,
    totalPrice: 1051,
    discount: 50.3,
    forPayment: 522,
    isChecked: true,
    isFavourites: false,
  },
  {
    id: "2",
    image: "./images/secondProduct",
    title:
      "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    characteristic: [
      {
        parameter: "color",
        title: "Цвет",
        value: "прозрачный",
      },
    ],
    company: "OOO Мегапрофстиль",
    informationAboutCompany: [
      "OOO «МЕГАПРОФСТИЛЬ»",
      "ОГРН: 5167746237148",
      "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    ],
    productsInShoppingCart: 200,
    remainingProduct: 10,
    isStockAvailability: true,
    unitPrice: 11500.235,
    totalPrice: 2300047,
    discount: 8.69547,
    forPayment: 2100047,
    isChecked: true,
    isFavourites: false,
  },
  {
    id: "3",
    image: "./images/thirdProduct",
    title:
      'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    characteristic: [],
    company: "OOO Вайлдберриз",
    informationAboutCompany: [
      "ООО Вайлдберриз",
      "ОГРН: 1067746062449",
      "142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    ],
    productsInShoppingCart: 2,
    remainingProduct: 2,
    isStockAvailability: true,
    unitPrice: 475,
    totalPrice: 950,
    discount: 48,
    forPayment: 494,
    isChecked: true,
    isFavourites: false,
  },
  {
    id: "4",
    image: "./images/firstProduct",
    title: "Футболка UZcotton мужская",
    characteristic: [
      {
        parameter: "color",
        title: "Цвет",
        value: "белый",
      },
      {
        parameter: "size",
        title: "размер",
        value: "56",
      },
    ],
    company: "OOO Вайлдберриз",
    informationAboutCompany: [
      "ООО Вайлдберриз",
      "ОГРН: 1067746062449",
      "142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    ],
    productsInShoppingCart: 1,
    remainingProduct: 0,
    isStockAvailability: false,
    unitPrice: 1051,
    totalPrice: 1051,
    discount: 50.3,
    forPayment: 522,
    isChecked: false,
    isFavourites: false,
  },
  {
    id: "5",
    image: "./images/secondProduct",
    title:
      "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    characteristic: [
      {
        parameter: "color",
        title: "Цвет",
        value: "прозрачный",
      },
    ],
    company: "OOO Мегапрофстиль",
    informationAboutCompany: [
      "OOO «МЕГАПРОФСТИЛЬ»",
      "ОГРН: 5167746237148",
      "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    ],
    productsInShoppingCart: 200,
    remainingProduct: 0,
    isStockAvailability: false,
    unitPrice: 11500.235,
    totalPrice: 2300047,
    discount: 8.69547,
    forPayment: 2100047,
    isChecked: false,
    isFavourites: false,
  },
  {
    id: "6",
    image: "./images/thirdProduct",
    title:
      'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    characteristic: [
      {
        parameter: "pencils__data",
        value: "56/54/52/53",
      },
    ],
    company: "OOO Вайлдберриз",
    informationAboutCompany: [
      "ООО Вайлдберриз",
      "ОГРН: 1067746062449",
      "142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    ],
    productsInShoppingCart: 2,
    remainingProduct: 0,
    isStockAvailability: false,
    unitPrice: 475,
    totalPrice: 950,
    discount: 48,
    forPayment: 494,
    isChecked: false,
    isFavourites: false,
  },
];

const deliveryAddressesData = {
  deliveryMethodCourier: [
    {
      id: "address__first",
      value: "Бишкек, улица Табышалиева, 57",
      isChecked: false,
    },
    {
      id: "address__second",
      value: "Бишкек, улица Жукеева-Пудовкина, 77/1",
      isChecked: false,
    },
    {
      id: "address__third",
      value: `Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1`,
      isChecked: false,
    },
  ],
  deliveryMethodYourself: [
    {
      id: "address__fourst",
      value: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
      rating: null,
      isChecked: false,
    },
    {
      id: "address__fifth",
      value: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
      rating: 4.99,
      isChecked: false,
    },
    {
      id: "address__sixth",
      value: "г. Бишкек, улица Табышалиева, д. 57",
      rating: 4.99,
      isChecked: false,
    },
    {
      id: "address__seventh",
      value: "Бишкек, улица Ахматбека Суюмбаева, 12/1",
      rating: 4.99,
      isChecked: true,
    },
  ],
};

const bankCardsData = [
  {
    id: "mir",
    img: "./images/mir.svg",
    number: "1234 5685 7569 1234",
    isChecked: true,
  },
  {
    id: "visa",
    img: "./images/visa.svg",
    number: "1234 5675 2655 1234",
    isChecked: false,
  },
  {
    id: "mastercard",
    img: "./images/mastercard.svg",
    number: "1234 5615 7295 1234",
    isChecked: false,
  },
  {
    id: "maestro",
    img: "./images/maestro.svg",
    number: "1234 5685 7577 1234",
    isChecked: false,
  },
];
