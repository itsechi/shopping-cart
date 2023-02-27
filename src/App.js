import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  const [cart, setCart] = React.useState({});

  function addToCart(id, quantity) {
    setCart((prevState) => {
      return {
        ...prevState,
        [id]: quantity,
      };
    });
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Catalog />} />
          <Route
            path="/:id/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
