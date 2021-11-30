let data = {
  cart: [],
  wishlist: [],
  vat: 16, //vat in percentage
  cartTotal: 0,
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
      TZS: 22.92,
      UGX: 36.33,
      NGN: 3.59,
      INR: 0.71,
    },
  },
  // overkill but doing it for fun
  currencySymbols: {
    KES: "Ksh ",
    USD: "$",
    GBP: "£",
    EUR: "€",
    TZS: "TSh ",
    UGX: "USh ",
    NGN: "₦",
    INR: "₹",
  },
  priceFilter: {
    min: 0,
    max: 3700,
    pricerange: 3700,
  },
  
};  









let products = [
  {
    id: 1,
    name: "men's analog quartz watch",
    slug: "mens-analog-quartz-watch-547383",
    price: 500,
    discount_price: 2800,
    category: "men",
    color: "black",
    
    sale: true,
    
    quantity: 5,
    img: "analog-quartz-watch.jpg",
    
    
    shipped_from_abroad: false,
    
    
    
      star_ratings: 4.8,
      votes: 350,
    
  },
  {
    id: 2,
    name: "singedani four set handbag",
    slug: "singedani-four-set-handbag-647483",
    price: 1160,
    discount_price: 2320,
    category: "women",
    color: "gray",
    
    sale: false,
    
    quantity: 8,
    img: "singedani-handbag.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 3.6,
      votes: 200,
    
  },
  {
    id: 3,
    name: "Boys gray boxer set",
    slug: "boys-gray-boxer-set-546488",
    price: 900,
    discount_price: 1200,
    category: "kids",
    color: "blue",
    sizes: ["S", "L", "M"],
    
    sale: true,
    
    quantity: 3,
    img: "boy_boxers.jpg",
    
    
    shipped_from_abroad: false,
    
    
    
      star_ratings: 2.5,
      votes: 150,
    
  },
  {
    id: 4,
    name: "Hiamok men leather belt",
    slug: "hiamok-men-leather-belt-238192",
    price: 392,
    discount_price: 1098,
    category: "men",
    color: "brown",
    
    sale: false,
    
    quantity: 10,
    img: "belt.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 3.8,
      votes: 20,
    
  },
  {
    id: 5,
    name: "vintage print flare dress",
    slug: "vintage-print-flare-dress-987426",
    price: 1720,
    discount_price: 5160,
    category: "women",
    color: "White",
    sizes: ["S", "M", "L"],
    
    sale: true,
    
    quantity: 0,
    img: "vintage-flare-dress.jpg",
    
    
    shipped_from_abroad: false,
    
    
    
      star_ratings: 4.0,
      votes: 130,
    
  },
  {
    id: 6,
    name: "capped sleeves red cotton dress",
    slug: "capped-sleeves-red-cotton-dress-349824",
    price: 1100,
    discount_price: 1650,
    category: "kids",
    color: "Red",
    sizes: ["S", "M"],
    
    sale: true,
    
    quantity: 2,
    img: "cotton-dress.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 2.1,
      votes: 268,
    
  },
  {
    id: 7,
    name: "gemch men casual running shoes",
    slug: "gemch-men-casual-running-shoes-459123",
    price: 3020,
    discount_price: 3580,
    category: "men",
    color: "black",
    sizes: ["39", "40", "42"],
    
    sale: false,
    
    quantity: 6,
    img: "gemch_shoes.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 4,
      votes: 250,
    
  },
  {
    id: 8,
    name: "Boho printed floral dress",
    slug: "boho-printed-floral-dress-656623",
    price: 1999,
    discount_price: 2199,
    category: "women",
    color: "skyblue",
    sizes: ["M", "L", "XL"],
    
    sale: true,
    
    quantity: 10,
    img: "floral-dress.jpg",
    
    
    shipped_from_abroad: false,
    
    
    
      star_ratings: 3.6,
      votes: 129,
    
  },
  {
    id: 9,
    name: "Baby girl bowknot leather shoes",
    slug: "baby-girl-bowknot-leather-shoes-312947",
    price: 493,
    discount_price: 502,
    category: "kids",
    color: "Silver",
    sizes: ["S"],
    
    sale: false,
    
    quantity: 9,
    img: "leather-shoes.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 4.1,
      votes: 50,
    
  },
  {
    id: 10,
    name: "men khaki trouser - navy blue",
    slug: "men-khaki-trouser-navy-blue-537329",
    price: 1346,
    discount_price: 1347,
    category: "men",
    color: "Navy Blue",
    sizes: ["M", "L"],
    
    sale: false,
    
    quantity: 0,
    img: "gsoft-khaki.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 2.0,
      votes: 35,
    
  },
  {
    id: 11,
    name: "Women printed bodycon dress",
    slug: "women-printed-bodycon-dress-439618",
    price: 1554,
    discount_price: 1640,
    category: "women",
    sizes: ["M", "L", "XL"],
    
    sale: false,
    
    quantity: 7,
    img: "bodycon-dress.jpg",
    
    
    shipped_from_abroad: false,
    
    
    
      star_ratings: 3.2,
      votes: 240,
    
  },
  {
    id: 12,
    name: "girl princess lace dress",
    slug: "girl-princess-lace-dress-123567",
    price: 1808,
    discount_price: 2350,
    category: "kids",
    color: "White",
    sizes: ["S", "M", "L"],
    
    sale: true,
    
    quantity: 4,
    img: "princes-dress.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 3.6,
      votes: 70,
    
  },
  {
    id: 13,
    name: "men's formal slim fit suit",
    slug: "mens-formal-slim-fit-suit-345987",
    price: 3627,
    discount_price: 6045,
    category: "men",
    color: "Dark Blue",
    sizes: ["M", "L", "XL"],
    
    sale: true,
    
    quantity: 3,
    img: "slim-fit-suit.jpg",
    
    
    shipped_from_abroad: false,
    
    
    
      star_ratings: 5.0,
      votes: 210,
    
  },
  {
    id: 14,
    name: "Women's rome strappy gladiator loe flat flip",
    slug: "womens-rome-strappy-gladiator-loe-flat-flip-230978",
    price: 876,
    discount_price: 987,
    category: "women",
    sizes: ["25", "35", "40"],
    
    sale: true,
    
    quantity: 2,
    img: "gladiator-flat-flip.jpg",
    
    
    shipped_from_abroad: false,
    
    
    
      star_ratings: 1.5,
      votes: 3,
    
  },
  {
    id: 15,
    name: "navy long sleeved boys t-shirt",
    slug: "navy-long-sleeved-boys-tshirt-786534",
    price: 960,
    discount_price: 1200,
    category: "kids",
    color: "black",
    sizes: ["M", "L"],
    
    sale: false,
    
    quantity: 0,
    img: "boys-t-shirt.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 2.9,
      votes: 65,
    
  },
  {
    id: 16,
    name: "3 piece men's vest - white",
    slug: "3-piece-mens-vest-white-891267",
    price: 899,
    discount_price: 1800,
    category: "men",
    color: "White",
    sizes: ["M", "L"],
    
    sale: true,
    
    quantity: 8,
    img: "vest.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 3.0,
      votes: 289,
    
  },
  {
    id: 17,
    name: "checkers faix leather wrist watch",
    slug: "checkers-faix-leather-wrist-watch-120934",
    price: 341,
    discount_price: 443,
    category: "women",
    color: "Gold",
    
    sale: true,
    
    quantity: 4,
    img: "quartz-wrist-watch.jpg",
    
    
    shipped_from_abroad: true,
    
    
    
      star_ratings: 4.0,
      votes: 200,
    
  },
  {
    id: 18,
    name: "boys black crew neck t-shirt",
    slug: "boys-black-crew-neck-tshirt-784301",
    price: 890,
    discount_price: 1200,
    category: "kids",
    color: "Black",
    sizes: ["S", "M"],
    
    sale: true,
    
    quantity: 7,
    img: "crew-neck-tshirt.jpg",
    
    
    shipped_from_abroad: false,
    
    
    
      star_ratings: 4.7,
      votes: 130,
    
  },
]

data.products = products

export default data;
