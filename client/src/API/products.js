discountPercentage: 8,
    thumbnail: "https://source.unsplash.com/400x300/?flower-gift-basket",
    images: [
      "https://source.unsplash.com/800x600/?gift-basket-flowers",
      "https://source.unsplash.com/800x600/?flowers-and-chocolates"
    ],
    category: "Подарки"
  },
  {
    id: 10,
    title: "Осенний букет — сезонный",
    description: "Букет из осенних оттенков: хризантемы, амарантус, декоративная зелень.",
    price: 2600,
    discountPercentage: 15,
    thumbnail: "https://source.unsplash.com/400x300/?autumn-flowers,bouquet",
    images: [
      "https://source.unsplash.com/800x600/?autumn-flowers",
      "https://source.unsplash.com/800x600/?chrysanthemum"
    ],
    category: "Сезонные"
  },
  {
    id: 11,
    title: "Королевский букет — премиум",
    description: "Эксклюзивная композиция из редких сортов. Под заказ, сроки согласовываются.",
    price: 12000,
    discountPercentage: 5,
    thumbnail: "https://source.unsplash.com/400x300/?luxury-flowers,bouquet",
    images: [
      "https://source.unsplash.com/800x600/?luxury-flowers",
      "https://source.unsplash.com/800x600/?premium-bouquet"
    ],
    category: "Букеты"
  },
  {
    id: 12,
    title: "Мини-букет «Спасибо»",
    description: "Маленький аккуратный букет, идеально для быстрой благодарности.",
    price: 900,
    discountPercentage: 0,
    thumbnail: "https://source.unsplash.com/400x300/?small-bouquet,thank-you",
    images: [
      "https://source.unsplash.com/800x600/?small-bouquet",
      "https://source.unsplash.com/800x600/?mini-bouquet"
    ],
    category: "Подарки"
  }
];

export async function getProducts({ category = "all", limit = 20 } = {}) {
  let filtered =
    category === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  if (limit) filtered = filtered.slice(0, limit);
  return { products: filtered };
}

export async function getCategories() {
  return ["all", ...new Set(PRODUCTS.map((p) => p.category))];
}

export async function getProduct(id) {
  return PRODUCTS.find((p) => p.id == id);
}
