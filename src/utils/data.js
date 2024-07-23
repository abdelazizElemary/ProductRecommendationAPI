const products = [
  {
    id: 1,
    name: "Breadfast Classic Millefeuille Cup",
    category: "Bakeries & Pastries",
    subCategory: "Millefeuille & Profiterole",
    brand: "Breadfast",
  },
  {
    id: 2,
    name: "Bic Evolution Black Pencil (12 Pens)",
    category: "Stationery & Games",
    subCategory: "Pencils",
    brand: "Bic",
  },
  {
    id: 3,
    name: "iLock 3 Outlet Wall Plug (3500W)",
    category: "Home",
    subCategory: "Cables & Plugs",
    brand: "iLock",
  },
  {
    id: 4,
    name: "Breadfast Mini Croissants",
    category: "Bakeries & Pastries",
    subCategory: "Croissants",
    brand: "Breadfast",
  },
  {
    id: 5,
    name: "Bic Cristal Original Ballpoint Pen (10 Pens)",
    category: "Stationery & Games",
    subCategory: "Pens",
    brand: "Bic",
  },
  {
    id: 6,
    name: "iLock Surge Protector Power Strip",
    category: "Home",
    subCategory: "Cables & Plugs",
    brand: "iLock",
  },
];

const users = [
  {
    id: 1,
    name: "Ahmed",
    email: "ahmed@example.com",
    preferences: {
      subCategories: ["Millefeuille & Profiterole", "Cables & Plugs"],
      brands: ["Breadfast"],
    },
    purchaseHistory: [
      {
        productId: 1,
        date: "2024-05-01",
      },
      {
        productId: 3,
        date: "2024-04-15",
      },
      {
        productId: 1,
        date: "2024-04-10",
      },
    ],
  },
  {
    id: 2,
    name: "Mohamed",
    email: "mohamed@example.com",
    preferences: {
      subCategories: ["Croissants", "Pencils", "Cables & Plugs"],
      brands: ["Bic", "iLock"],
    },
    purchaseHistory: [
      {
        productId: 2,
        date: "2024-04-20",
      },
      {
        productId: 4,
        date: "2024-04-10",
      },
      {
        productId: 4,
        date: "2024-04-09",
      },
      {
        productId: 4,
        date: "2024-04-08",
      },
    ],
  },
];

module.exports = {
  products,
  users,
};
