import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import ProductLaunch from './Components/ProductLaunch';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Product />}>
            <Route path='' element={<ProductCard />} />
            <Route path=':slug' element={<ProductLaunch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );

}

export default App;
