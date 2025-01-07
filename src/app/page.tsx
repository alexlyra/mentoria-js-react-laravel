
import { AddProductForm } from "@/components/add-product.form";
import { findAllProductsRequest } from "@/server/requests/products/find-all.products.request";
import Link from "next/link";

export default async function Home() {
  const products = await findAllProductsRequest();
  return (
    <div>
      <div className="flex flex-col gap-6">
        {
          products.map((product: any) => {
            return (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div >
                  {product.name} - {(product.amount / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} - {product.description}
                </div>
              </Link>
            )
          })
        }
      </div>
      <AddProductForm />
    </div>
  );
}
