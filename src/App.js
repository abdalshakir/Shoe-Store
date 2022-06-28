import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import ProductCard from './Components/ProductCard';

function App() {
  
  return (
    <div className="App">
      {/* <Router>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/product'}>Products</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />}>
            <Route path='' element={<ProductCard />} />
          </Route>
        </Routes>
      </Router> */}
      <ProductCard />
    </div>
  );

}

export default App;
