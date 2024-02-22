import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './pages/ShopCategory';
import { Shop } from './pages/Shop';
import Product from './pages/Product';
import { Cart } from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory category="men"/>} />
        <Route path='/womens' element={<ShopCategory category="women" />} />
        <Route path='/kids' element={<ShopCategory category="kid" />} />
        <Route path='product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
