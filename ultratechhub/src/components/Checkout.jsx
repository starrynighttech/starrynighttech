
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Checkout(){
  const {total}=useContext(CartContext)

  const pay=async()=>{
    const res=await fetch('/.netlify/functions/paynow',{
      method:'POST',
      body:JSON.stringify({amount:total})
    })
    const data=await res.json()
    window.location=data.url
  }

  return(
    <div className="glass">
      <h2>Checkout</h2>
      <p>Total: ${total}</p>
      <button onClick={pay}>Pay Now</button>
    </div>
  )
}
