
import { CartProvider } from './context/CartContext'
import ParticlesBg from './components/ParticlesBg'
import Shop from './components/Shop'
import Checkout from './components/Checkout'

export default function App(){
  return(
    <CartProvider>
      <ParticlesBg/>
      <div className="hero">
        <img src="/logo.png" width="120"/>
        <h1>Ultra Tech Hub</h1>
      </div>
      <Shop/>
      <Checkout/>
    </CartProvider>
  )
}
