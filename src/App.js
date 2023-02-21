import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Living from "./pages/living/Living";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/living" element={<Living />} />
          <Route path="/living/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
