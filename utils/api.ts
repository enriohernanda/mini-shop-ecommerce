const API_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`${API_URL}/products/${id}`);
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${API_URL}/products/categories`);
  return res.json();
}
