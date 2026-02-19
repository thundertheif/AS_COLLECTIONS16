import { Link, Outlet } from "react-router-dom";
import "./Admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-container">

      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2>AS COLLECTIONS ADMIN</h2>

        <Link className="admin-link" to="/admin">Dashboard</Link>
        <Link className="admin-link" to="/admin/products">Products</Link>
        <Link className="admin-link" to="/admin/orders">Orders</Link>
        <Link className="admin-link" to="/admin/settings">Settings</Link>

        {/* Logout Button */}
        <button
          className="admin-logout"
          onClick={() => {
            localStorage.removeItem("adminLoggedIn");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        <Outlet />
      </div>

    </div>
  );
}
