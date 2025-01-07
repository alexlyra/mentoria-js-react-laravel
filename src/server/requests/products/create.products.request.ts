export async function createProductRequest(product: any) {
  console.log(product)
  const response = await fetch(process.env.API_BASE_URL + '/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  return response
}