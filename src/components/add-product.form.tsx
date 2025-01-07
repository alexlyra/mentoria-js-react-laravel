"use client"

import { createProductAction } from "@/actions/create.product.action";
import { toast } from "react-toastify";

export function AddProductForm() {

  const action = async (data: FormData) => {
    const response = await createProductAction(data)
    if (response.ok) {
      toast.success(response.toast)
    } else {
      toast.error(response.toast)
    }
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