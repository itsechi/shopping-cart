import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  const [cart, setCart] = React.useState([]);

  function addToCart(item, quantity) {
    const product = cart.find((product) => product.item.id === item.id);
    const newCart = cart;
    if (product)
      newCart.map((item) => {
        if (item === product) return (item.quantity = quantity);
        else return item;
      });
    else
      newCart.push({
        item,
        quantity,
      });
    setCart(newCart);
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
