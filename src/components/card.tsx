import { PropsWithChildren } from "react"

type CardProps = PropsWithChildren

/**
 * A Card component that renders its children within a <div> element.
 * 
 * @param props - The props for the Card component, which extends PropsWithChildren.
 */
export function Card(props: CardProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}