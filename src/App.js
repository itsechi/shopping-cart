import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFNCPAr5MAFssBm15RPHn6fr5OiVXp_hA",
  authDomain: "shoppingcart-71f08.firebaseapp.com",
  projectId: "shoppingcart-71f08",
  storageBucket: "shoppingcart-71f08.appspot.com",
  messagingSenderId: "91829384369",
  appId: "1:91829384369:web:7ba70b4ecde6366cfb5e90",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);
  const [user] = useAuthState(auth);

  async function saveCart(cart) {
    try {
      await setDoc(doc(db, "cart", auth.currentUser.uid), {
        uid: auth.currentUser.uid,
        cart: cart,
      });
    } catch (error) {
      console.error("Error saving cart items to Firebase Database", error);
    }
  }

  const toggleModal = () => {
    setShowCart(!showCart);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    signOut(auth);
    window.location.reload();
  };

  const addToCart = async (item, quantity) => {
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
    saveCart(newCart);
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
          signInWithGoogle={signInWithGoogle}
          signOut={signOutUser}
          user={user}
        />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/shopping-cart/:id" element={<Catalog />} />
          <Route
            path="/shopping-cart/:id/:id"
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
