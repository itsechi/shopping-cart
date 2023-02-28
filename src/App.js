import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Cart from "./components/cart/Cart";

function App() {
  const cart = Cart();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Catalog />} />
          <Route
            path="/:id/:id"
            element={<ProductDetails addToCart={cart.addToCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
