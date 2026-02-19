import { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div style={grid}>
        <div style={card}>Total Products: {products.length}</div>
        <div style={card}>Total Orders: 25</div>
        <div style={card}>Total Customers: 10</div>
        <div style={card}>Revenue: ₹1,50,000</div>
      </div>
    </div>
  );
}

const grid = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 15, marginTop: 20 };
const card = { background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,.1)" };
