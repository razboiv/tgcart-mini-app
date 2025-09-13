// client/src/API/products.js

// Категории
export const CATEGORIES = [
  { slug: "all", name: "All" },
  { slug: "bouquets", name: "Букеты" },
  { slug: "indoor", name: "Комнатные растения" },
  { slug: "wedding", name: "Свадебные композиции" },
  { slug: "gifts", name: "Подарки" },
  { slug: "seasonal", name: "Сезонные цветы" },
];

// Продукты
export const PRODUCTS = [
  {
    id: 1,
    title: "Розы красные",
    description: "Классический букет из свежих красных роз.",
    price: 2000,
    discountPercentage: 20,
    category: "bouquets",
    thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    ],
  },
  {
    id: 2,
    title: "Орхидея в горшке",
    description: "Белая орхидея в стильном кашпо.",
    price: 2500,
    discountPercentage: 15,
    category: "indoor",
    thumbnail: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
    images: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800",
    ],
  },
  {
    id: 3,
    title: "Свадебный букет",
    description: "Нежный букет для невесты из пионов и роз.",
    price: 3000,
    discountPercentage: 10,
    category: "wedding",
    thumbnail: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400",
    images: [
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=800",
    ],
  },
];

// Получить категории
export async function getCategories() {
  return CATEGORIES;
}

// Получить продукты
export async function getProducts({ category = "all", limit = 20 }) {
  let items = PRODUCTS;
  if (category !== "all") {
    items = items.filter((p) => p.category === category);
  }
  return { products: items.slice(0, limit) };
}

// Получить один продукт
export async function getProduct(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}
