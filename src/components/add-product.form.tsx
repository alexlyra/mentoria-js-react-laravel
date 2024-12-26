import { revalidatePath } from "next/cache"
import prisma from "@/lib/prisma";

export function AddProductForm() {
  const action = async (data: FormData) => {
    "use server"

    const { name, amount, description } = Object.fromEntries(data)

    await prisma.product.create({
      data: {
        amount: Number(amount),
        name: name as string,
        description: description as string
      }
    })

    revalidatePath("/")
  }

  return (
    <form action={action} className="flex flex-col gap-2 items-center">
      <input type="text" name="name" className="text-black px-2" />
      <input type="number" name="amount" className="text-black px-2" />
      <input type="text" name="description" className="text-black px-2" />

      <button className="text-green-300" type="submit">Enviar</button>
    </form>
  )
}