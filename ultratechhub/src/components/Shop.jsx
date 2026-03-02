
import products from '../data/products.json'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Shop(){
  const {add}=useContext(CartContext)

  return(
    <div className="glass">
      <h2>Products</h2>
      {products.map(p=>(
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={()=>add(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}
