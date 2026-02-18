import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/ASC.jpeg";  


export default function Navbar() {
  return (
    <header className="nav-main">

      {/* Top Section */}
      <div className="nav-top">

        {/* LOGO WITH IMAGE */}
        <Link to="/" className="logo-container">
          <img src={logo} alt="AS Collections Logo" className="logo-img" />
          <span className="logo-text">AS COLLECTIONS</span>
        </Link>

        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search for sarees, kurtis, tops and more..." />
          <button>🔍</button>
        </div>

       {/* Icons */}
   <div className="nav-icons">
        <Link to="/wishlist">
          <button className="nav-btn wishlist-btn">♡ Wishlist</button>
       </Link>

      <Link to="/cart">
          <button className="nav-btn cart-btn">🛒 Cart</button>
      </Link>

      <button className="nav-btn login-btn">
          Login / Signup
      </button>
    </div>

      </div>

      {/* Menu */}
      <nav className="nav-menu">
        <Link to="/sarees">SAREES</Link>
        <Link to="/designer">DESIGNER MATERIALS</Link>
        <Link to="/Tops">TOPS</Link>
        <Link to="/kurtis">KURTIS</Link>
        <Link to="/sale">SALE</Link>

      </nav>

    </header>
  );
}
