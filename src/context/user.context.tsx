import { createContext, PropsWithChildren, useContext } from "react";

type UserForContext = {
  id: number,
  name: string
  cardNumber: string
}

const userContext = createContext<UserForContext>({} as UserForContext)

type UserProviderProps = PropsWithChildren<{
  user: UserForContext
}>

/**
 * Component that provides the user context to all its children.
 * 
 * The user context is an object that contains the user's id, name and card number.
 * 
 * @example
 * 
*/
export function UserProvider(props: UserProviderProps) {

  return (
    <userContext.Provider value={props.user}>
      {props.children}
    </userContext.Provider>
  )
}

export function useUser() {
  const context = useContext(userContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
