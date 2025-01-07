import { findOneProductRequest } from "@/server/requests/products/find-one.products.request";

type ProductPageProps = {
  params: {
    productId: string;
  }
}

export default async function ProductPage(prosp: ProductPageProps) {
  const product = await findOneProductRequest(prosp.params.productId);
  return <div>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <p>{(product.amount / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
  </div>
}
