import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { CartProvider } from './context/Globalcontext';
// import './App.css'

function App() {

  return (
    <CartProvider>
    <div className="container">
      <ProductList/>
      <hr></hr>
      <Cart />
    </div>
    </CartProvider>
  )
}

export default App
