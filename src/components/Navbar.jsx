import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png"; // change if needed

export default function Navbar() {
  const loggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };

  return (
    <header className="nav-main">

      {/* ================= TOP NAV BAR ================= */}
      <div className="nav-top">

        {/* LOGO */}
        <Link to="/" className="logo-container">
          <img src={logo} alt="AS COLLECTIONS" className="logo-img" />
          <span className="logo-text">AS COLLECTIONS</span>
        </Link>

        {/* SEARCH BAR */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for sarees, kurtis, tops and more..."
          />
          <button>🔍</button>
        </div>

        {/* ICONS */}
        <div className="nav-icons">
          <Link to="/wishlist">
            <span>♡ Wishlist</span>
          </Link>

          <Link to="/cart" className="cart">
            <span>🛒 Cart</span>
            <span className="cart-count">2</span> {/* optional cart count */}
          </Link>

          {!loggedIn ? (
            <>
              <Link to="/login">
                <span>Login</span>
              </Link>
              <Link to="/signup">
                <span>Signup</span>
              </Link>
            </>
          ) : (
            <span onClick={handleLogout} style={{ cursor: "pointer", color: "#dc2626" }}>
              Logout
            </span>
          )}
        </div>

      </div>

      {/* ================= MENU BAR ================= */}
      <nav className="nav-menu">
        <Link to="/sarees">SAREES</Link>
        <Link to="/designer">DESIGNER MATERIALS</Link>
        <Link to="/tops">TOPS</Link>
        <Link to="/kurtis">KURTIS</Link>
        <Link to="/sale" className="sale">SALE</Link>
      </nav>

    </header>
  );
}
