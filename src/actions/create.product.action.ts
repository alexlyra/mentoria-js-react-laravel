"use server"

import { createProductRequest } from "@/server/requests/products/create.products.request"
import { revalidatePath } from "next/cache"

export const createProductAction = async (data: FormData) => {
  "use server"


  const { name, amount, description } = Object.fromEntries(data)


  const response = await createProductRequest({
    amount: Number(amount),
    name: name as string,
    description: description as string
  })

  revalidatePath("/")

  if (!response.ok) {
    return {
      ok: false,
      toast: (await response.json()).message.join(', ')
    }
  }

  return {
    ok: true,
    toast: "Produto criado com sucesso"
  }
}