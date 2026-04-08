import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Details from './pages/Details/Details';
import Basket from './pages/Basket/Basket';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import FeaturedProduct from './pages/Home/FeaturedProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<FeaturedProduct />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
