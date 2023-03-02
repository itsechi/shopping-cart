import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);

  const toggleModal = () => {
    setShowCart(!showCart);
  };

  const addToCart = (item, quantity) => {
    const product = cart.find((product) => product.item.id === item.id);
    const newCart = [...cart];
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
  };

  const removeFromCart = (item) => {
    const product = cart.findIndex((product) => product.item.id === item.id);
    const newCart = [...cart];
    newCart.splice(product, 1);
    setCart(newCart);
  };

  return (
    <>
      <Router>
        <Header
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          toggleModal={toggleModal}
          showCart={showCart}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Catalog />} />
          <Route
            path="/:id/:id"
            element={
              <ProductDetails
                removeFromCart={removeFromCart}
                cart={cart}
                addToCart={addToCart}
                toggleModal={toggleModal}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
