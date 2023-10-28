
import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Context/Cartcontext';
import Cart from './cart/cart';
import Checkout from './cart/Checkout';



function App() {

  return (
    <div>
      <CartProvider >

        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/products/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

        </BrowserRouter>
        
      </CartProvider>
  
    </div>
  ) 
}

export default App;