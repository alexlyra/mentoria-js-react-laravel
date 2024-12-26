
import { AddProductForm } from "@/components/add-product.form";
import prisma from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <div>
      <div className="flex flex-col gap-6">
        {
          products.map((product) => {
            return (
              <div key={product.id}>
                {product.name} - {(product.amount / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} - {product.description}
              </div>
            )
          })
        }
      </div>
      <AddProductForm />
    </div>
  );
}
