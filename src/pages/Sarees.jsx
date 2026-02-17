import { useState } from "react";
import "./Sarees.css";
// IMPORT SAREE IMAGES
import silk1 from "../assets/sarees/silk/silk1.jpg";
import cotton1 from "../assets/sarees/cotton/cotton1.jpg";
import banarasi1 from "../assets/sarees/banarasi/banarasi1.jpg";
import designer1 from "../assets/sarees/designer/designer1.jpg";
import bridal1 from "../assets/sarees/bridal/bridal1.jpg";
import party1 from "../assets/sarees/partywear/party1.jpg";

export default function Sarees() {

  const sareeProducts = [
    { id: 1, name: "Pure Silk Saree", category: "Silk", price: 4999, rating: 4.8, image: silk1 },
    { id: 2, name: "Cotton Daily Wear Saree", category: "Cotton", price: 1499, rating: 4.3, image: cotton1 },
    { id: 3, name: "Banarasi Wedding Saree", category: "Banarasi", price: 8999, rating: 4.9, image: banarasi1 },
    { id: 4, name: "Designer Party Saree", category: "Designer", price: 6999, rating: 4.6, image: designer1 },
    { id: 5, name: "Bridal Heavy Saree", category: "Bridal", price: 15999, rating: 5.0, image: bridal1 },
    { id: 6, name: "Party Wear Saree", category: "Partywear", price: 5999, rating: 4.4, image: party1 },
  ];

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(20000);

  let filtered = sareeProducts.filter(p => p.price <= maxPrice);

  if (category !== "All") filtered = filtered.filter(p => p.category === category);

  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="sarees-page">

      <h1 className="saree-title">Premium Sarees Collection</h1>

      <div className="saree-controls">
        <input
          type="text"
          placeholder="Search sarees..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort By</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>
      </div>

      <div className="price-filter">
        <label>Max Price: ₹{maxPrice}</label>
        <input
          type="range"
          min="1000"
          max="20000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <div className="saree-menu">
        {["All", "Silk", "Cotton", "Banarasi", "Designer", "Bridal", "Partywear"].map(cat => (
          <button key={cat} className={category === cat ? "active" : ""} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="saree-grid">
  {filtered.length === 0 ? (
    <p className="no-products">No sarees found.</p>
  ) : (
    filtered.map(product => (
      <div className="saree-card" key={product.id}>
        <span className="wishlist">♡</span>

        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>

        <p className="rating">⭐ {product.rating}</p>
        <p className="price">₹ {product.price}</p>

        <div className="btn-group">
          <button className="cart-btn">Add to Cart</button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    ))
  )}
</div>


    </div>
  );
}
