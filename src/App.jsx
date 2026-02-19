import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Customer Pages
import Home from "./pages/Home";
import Sarees from "./pages/Sarees";
import Tops from "./pages/Tops";
import Kurtis from "./pages/Kurtis";
import Cart from "./pages/Cart";
import DesignerMaterials from "./pages/DesignerMaterials";
import Sale from "./pages/Sale";
import Wishlist from "./pages/Wishlist";

// Customer Auth
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Admin Pages
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Settings from "./pages/admin/Settings";

function LayoutWrapper() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Hide Navbar for Admin */}
      {!isAdmin && <Navbar />}

      <Routes>
        {/* CUSTOMER WEBSITE */}
        <Route path="/" element={<Home />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/kurtis" element={<Kurtis />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/designer" element={<DesignerMaterials />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* CUSTOMER LOGIN & SIGNUP */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ADMIN PANEL */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      {/* Hide Footer for Admin */}
      {!isAdmin && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
