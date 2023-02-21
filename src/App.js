import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Living from "./pages/living/Living";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/living" element={<Living />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
