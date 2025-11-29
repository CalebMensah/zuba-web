const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchStore(storeId) {
  const res = await fetch(`${BASE_URL}/api/public/store/${storeId}`);
  if (!res.ok) throw new Error('Failed to fetch store');
  return res.json();
}

export async function fetchProduct(productId) {
  const res = await fetch(`${BASE_URL}/api/public/product/${productId}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}
