// client/src/API/products.js

export async function getCategories() {
  return ["all", "Маникюр", "Педикюр", "Ресницы"];
}

export async function getProducts({ category = "all", limit = 20 } = {}) {
  const allProducts = [
    {
      id: 1,
      title: "Маникюр классический",
      description: "Уход за ногтями + покрытие лаком",
      price: 2000,
      discountPercentage: 20,
      thumbnail: "https://i.ibb.co/2d1rL8Q/nails1.jpg",
      images: [
        "https://i.ibb.co/2d1rL8Q/nails1.jpg",
        "https://i.ibb.co/7yKnx9S/nails2.jpg"
      ]
    },
    {
      id: 2,
      title: "Педикюр SPA",
      description: "Полный уход за стопами + массаж",
      price: 2500,
      discountPercentage: 15,
      thumbnail: "https://i.ibb.co/3vF2r0W/pedicure.jpg",
      images: ["https://i.ibb.co/3vF2r0W/pedicure.jpg"]
    },
    {
      id: 3,
      title: "Наращивание ресниц",
      description: "Эффект объёма 2D/3D",
      price: 3000,
      discountPercentage: 10,
      thumbnail: "https://i.ibb.co/mJjZPkk/lashes.jpg",
      images: ["https://i.ibb.co/mJjZPkk/lashes.jpg"]
    }
  ];

  let filtered =
    category === "all" ? allProducts : allProducts.filter((p) => p.category === category);

  if (limit) filtered = filtered.slice(0, limit);
  return { products: filtered };
}

export async function getProduct(id) {
  const all = await getProducts();
  return all.products.find((p) => p.id == id);
}
