import { PropsWithChildren } from "react"

type NameProps = PropsWithChildren

export function Name(props: NameProps) {
  return (
    <h1 className='text-green-300 text-l5xl underline'>
      {props.children}
    </h1>
  )
}