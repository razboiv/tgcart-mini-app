const API_URL = "https://fvwvaveaqjjtlmtubvfk.supabase.co";
const API_KEY = "<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2d3ZhdmVhcWpqdGxtdHVidmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODAwMjksImV4cCI6MjA3MzM1NjAyOX0.6GHpuEnzZ0snODMS7zFE4COIj3djF5CU0stkjsjUiq0>";

export async function getProducts(category) {
  const res = await fetch(`${API_URL}?select=*`, {
    headers: {
      apikey: API_KEY,
      Authorization: Bearer ${API_KEY},
    },
  });
  let products = await res.json();

  if (category && category !== "All") {
    products = products.filter((p) => p.category === category);
  }

  return products;
}

export async function getCategories() {
  const res = await fetch(`${API_URL}?select=category`, {
    headers: {
      apikey: API_KEY,
      Authorization: Bearer ${API_KEY},
    },
  });
  const data = await res.json();
  return ["All", ...new Set(data.map((p) => p.category))];
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}?id=eq.${id}&select=*`, {
    headers: {
      apikey: API_KEY,
      Authorization: Bearer ${API_KEY},
    },
  });
  const [product] = await res.json();
  return product;
}
