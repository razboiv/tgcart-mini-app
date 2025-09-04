// Заглушка API для теста
export async function getProducts() {
  return {
    products: [
      {
        id: 1,
        title: "Маникюр классический",
        description: "Уход за ногтями + покрытие лаком",
        price: 2000,
        discountPercentage: 20,
        images: [
          "https://i.ibb.co/2d1rL8Q/nails1.jpg"
        ],
      },
      {
        id: 2,
        title: "Педикюр SPA",
        description: "Полный уход за стопами + массаж",
        price: 2500,
        discountPercentage: 15,
        images: [
          "https://i.ibb.co/3vF2r0W/pedicure.jpg"
        ],
      },
      {
        id: 3,
        title: "Наращивание ресниц",
        description: "Эффект объёма 2D/3D",
        price: 3000,
        discountPercentage: 10,
        images: [
          "https://i.ibb.co/mJjZPkk/lashes.jpg"
        ],
      },
    ],
  };
}

export async function getCategories() {
  return ["all", "Маникюр", "Педикюр", "Ресницы"];
}

export async function getProduct(id) {
  const all = await getProducts();
  return all.products.find((p) => p.id == id);
}
