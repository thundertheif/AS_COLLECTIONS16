import { useEffect, useState } from "react";
import "./Sale.css";

// 🔥 IMPORT YOUR IMAGES
import silk1 from "../assets/sarees/silk/silk1.jpg";
import cotton1 from "../assets/sarees/cotton/cotton1.jpg";
import kurti1 from "../assets/materials/rayon.jpg";
import top1 from "../assets/materials/georgette.jpg";

export default function Sale() {
  // ⏰ Countdown timer (24 hours)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // 🛍️ SALE PRODUCTS
  const saleProducts = [
    {
      id: 1,
      name: "Silk Party Saree",
      category: "Sarees",
      originalPrice: 4999,
      salePrice: 2499,
      rating: 4.6,
      image: silk1,
    },
    {
      id: 2,
      name: "Cotton Daily Saree",
      category: "Sarees",
      originalPrice: 1999,
      salePrice: 999,
      rating: 4.3,
      image: cotton1,
    },
    {
      id: 3,
      name: "Rayon Designer Kurti",
      category: "Kurtis",
      originalPrice: 1799,
      salePrice: 899,
      rating: 4.5,
      image: kurti1,
    },
    {
      id: 4,
      name: "Georgette Party Top",
      category: "Tops",
      originalPrice: 1499,
      salePrice: 699,
      rating: 4.2,
      image: top1,
    },
  ];

  const getDiscount = (orig, sale) =>
    Math.round(((orig - sale) / orig) * 100);

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? saleProducts
      : saleProducts.filter((p) => p.category === filter);

  return (
    <div className="sale-page">
      {/* 🔥 TOP BANNER */}
      <div className="sale-banner">
        <h1>🔥 MEGA FASHION SALE</h1>
        <p>Up to 70% OFF on Sarees, Kurtis & Tops</p>

        <div className="countdown">
          ⏰ Sale ends in: <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* 🎯 FILTER BUTTONS */}
      <div className="sale-filters">
        {["All", "Sarees", "Kurtis", "Tops"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🛍️ PRODUCT GRID */}
      <div className="sale-grid">
        {filtered.map((product) => {
          const discount = getDiscount(
            product.originalPrice,
            product.salePrice
          );

          return (
            <div className="sale-card" key={product.id}>
              <span className="sale-badge">{discount}% OFF</span>
              <span className="wishlist">♡</span>

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>
              <p className="rating">⭐ {product.rating}</p>

              <div className="price-box">
                <span className="old-price">
                  ₹{product.originalPrice}
                </span>
                <span className="new-price">
                  ₹{product.salePrice}
                </span>
              </div>

              <div className="btn-group">
                <button className="cart-btn">Add to Cart</button>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}