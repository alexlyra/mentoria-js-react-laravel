import { PropsWithChildren } from "react";
import { Name } from "./name";
import { useUser } from "../context/user.context";

export function NameDecorator() {
  const user = useUser()
  return <Name>
    {user.name}
  </Name>
}