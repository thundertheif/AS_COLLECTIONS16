import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP ADMIN LOGIN (Change later)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("adminLoggedIn", "true");
      alert("Admin Login Success!");
      navigate("/admin");
    } else {
      alert("Wrong Admin Credentials!");
    }
  };

  return (
    <div style={box}>
      <h2>AS COLLECTIONS Admin Login</h2>

      <form onSubmit={handleLogin} style={form}>
        <input
          placeholder="Admin Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>

      <p>Default Admin: admin / 1234</p>
    </div>
  );
}

const box = { display: "flex", flexDirection: "column", alignItems: "center", marginTop: 100 };
const form = { display: "grid", gap: 10, width: 300 };

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP ADMIN LOGIN (Change later)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("adminLoggedIn", "true");
      alert("Admin Login Success!");
      navigate("/admin");
    } else {
      alert("Wrong Admin Credentials!");
    }
  };

  return (
    <div style={box}>
      <h2>AS COLLECTIONS Admin Login</h2>

      <form onSubmit={handleLogin} style={form}>
        <input
          placeholder="Admin Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>

      <p>Default Admin: admin / 1234</p>
    </div>
  );
}

