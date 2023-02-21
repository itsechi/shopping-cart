import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Catalog />} />
          <Route path="/:id/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
