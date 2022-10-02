import "./scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
