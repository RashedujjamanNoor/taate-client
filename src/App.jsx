import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Devlivery from "./pages/policies/Devlivery";
import Exchange from "./pages/policies/Exchange";
import Privacy from "./pages/policies/Privacy";
import Men from "./pages/Men";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/delivery-policy" element={<Devlivery />} />
            <Route path="/exchange-policy" element={<Exchange />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
