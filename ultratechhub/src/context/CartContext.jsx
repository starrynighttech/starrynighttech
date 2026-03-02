
import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({children}){
  const [cart,setCart]=useState([])

  const add=(product)=>{
    setCart(prev=>[...prev,product])
  }

  const total=cart.reduce((sum,p)=>sum+p.price,0)

  return(
    <CartContext.Provider value={{cart,add,total}}>
      {children}
    </CartContext.Provider>
  )
}
