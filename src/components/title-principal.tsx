import { ReactNode } from "react"

type TitlePrincipalProps = {
  children: ReactNode
}

export function TitlePrincipal(props: Readonly<TitlePrincipalProps>) {
  return (
    <h1 className='text-green-300 text-l5xl underline'>
      {
        props.children
      }
    </h1>
  )
}