import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sarees from "./pages/Sarees";
import Tops from "./pages/Tops";
import Kurtis from "./pages/Kurtis";
import Cart from "./pages/Cart";
import DesignerMaterials from "./pages/DesignerMaterials";
import Sale from "./pages/Sale";
import Wishlist from "./pages/Wishlist";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar shows on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/kurtis" element={<Kurtis />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/designer" element={<DesignerMaterials />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/wishlist" element={<Wishlist />} />

      </Routes>

      {/* Footer shows on all pages */}
      <Footer />
    </BrowserRouter>
  );
}
