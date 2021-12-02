let data = {
  cart: [],
  wishlist: [],
  vat: 16, //vat in percentage
  cartTotal: 0,
  isLoading: true,
  orderSuccess: false,
  promoCode: [
    {
      code: "TENPERCENT",
      percentage: 10,
    },
    {
      code: "FIVEPERCENT",
      percentage: 5,
    },
  ],
  usedPromoCode: null,
  deliveryOptions: [
    {
      id: 1,
      name: "standard",
      duration: "24 - 72 hours",
      cost: 300,
    },
    {
      id: 2,
      name: "fastest",
      duration: "1 - 24 hours",
      cost: 1000,
    },
  ],
  productMaxShowModal: false,
  modalMessage: null,
  showSideNavigation: false,
  // used currency should load with the default currency name and rate
  usedCurrency: { VND: 230, symbol: "VND " },
  // exchange rates can be got from any api source
  exchangeRates: {
    base: "KES",
    date: "2019-01-29",
    rates: {
      VND: 230,
      KES: 1,
      USD: 0.0099,
      GBP: 0.0075,
      EUR: 0.0087,

    },
  },
  // overkill but doing it for fun
  currencySymbols: {
    KES: "Ksh ",
    USD: "$",
    GBP: "£",
    EUR: "€",

  },
  priceFilter: {
    min: 0,
    max: 3700,
    pricerange: 3700,
  },
  
};  









let products = null

data.products = products

export default data;
