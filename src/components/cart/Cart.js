import React from "react";

function Cart() {
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
    console.log(cart);
  }

  return { addToCart };
}

export default Cart;
