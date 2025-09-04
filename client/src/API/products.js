// client/src/API/products.js

export const getCategories = async () => {
  return [
    "all",
    "Маникюр",
    "Парикмахерские услуги",
    "Косметология"
  ];
};

export const getProducts = async ({ category, limit }) => {
  const allProducts = [
    {
      id: 1,
      name: "Маникюр классический",
      category: "Маникюр",
      price: 1500,
      image: "https://via.placeholder.com/300x200?text=Маникюр"
    },
    {
      id: 2,
      name: "Педикюр",
      category: "Маникюр",
      price: 1800,
      image: "https://via.placeholder.com/300x200?text=Педикюр"
    },
    {
      id: 3,
      name: "Стрижка женская",
      category: "Парикмахерские услуги",
      price: 2500,
      image: "https://via.placeholder.com/300x200?text=Стрижка"
    },
    {
      id: 4,
      name: "Окрашивание",
      category: "Парикмахерские услуги",
      price: 3500,
      image: "https://via.placeholder.com/300x200?text=Окрашивание"
    },
    {
      id: 5,
      name: "Чистка лица",
      category: "Косметология",
      price: 3000,
      image: "https://via.placeholder.com/300x200?text=Чистка+лица"
    }
  ];

  // фильтрация по категории
  let filtered = category === "all"
    ? allProducts
    : allProducts.filter(p => p.category === category);

  // ограничение по количеству (limit)
  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  return { products: filtered };
};
