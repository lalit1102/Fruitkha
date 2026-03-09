import React from 'react'
// import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <CartProvider>
      <div>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/:id" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App