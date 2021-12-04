let data = {
  order: null,
  users: null,
  currentUser: null,
  user_data: null,
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
  usedCurrency: { VND: 1, symbol: "VND " },
  // exchange rates can be got from any api source
  exchangeRates: {
    base: "VND",
    date: "12-3-2021",
    rates: {
      VND: 1,
      USD: 0.000044,
      GBP: 0.000033,
      EUR: 0.000039,

    },
  },
  // overkill but doing it for fun
  currencySymbols: {

    USD: "$",
    GBP: "£",
    EUR: "€",

  },
  priceFilter: {
    min: 0,
    max: 500000,
    pricerange: 500000,
  },
  products: null
};  









let products = null

data.products = products

export default data;
