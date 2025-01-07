export async function findOneProductRequest(productId: string) {
  const response = await fetch(process.env.API_BASE_URL + `/products/${productId}`, {
    method: 'GET',
  });

  return response.json();
}