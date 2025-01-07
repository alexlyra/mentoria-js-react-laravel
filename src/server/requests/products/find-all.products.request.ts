export async function findAllProductsRequest() {
  const response = await fetch(process.env.API_BASE_URL + '/products', {
    method: 'GET',
  });

  return response.json()
}