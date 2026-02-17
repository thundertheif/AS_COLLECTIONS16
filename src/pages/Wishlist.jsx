import React, { useEffect, useState } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // 🔥 Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  // ❌ Remove item
  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // 🛒 Move to bag (demo)
  const moveToBag = (item) => {
    alert(`${item.title} moved to bag 🛒`);
    removeItem(item.id);
  };

  // ❤️ Empty state
  if (wishlist.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h1>❤️ My Wishlist</h1>
        <p>Your wishlist is empty.</p>
        <button style={styles.shopBtn}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>❤️ My Wishlist ({wishlist.length})</h1>

      <div style={styles.grid}>
        {wishlist.map((item) => (
          <div key={item.id} style={styles.card}>
            {/* ❌ remove */}
            <button
              style={styles.removeBtn}
              onClick={() => removeItem(item.id)}
            >
              ✕
            </button>

            {/* 🖼️ image */}
            <img src={item.image} alt={item.title} style={styles.image} />

            {/* 📝 info */}
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.brand}>{item.brand}</p>

            {/* 💰 price */}
            <div style={styles.priceRow}>
              <span style={styles.price}>₹{item.price}</span>
              {item.oldPrice && (
                <span style={styles.oldPrice}>₹{item.oldPrice}</span>
              )}
              {item.discount && (
                <span style={styles.discount}>({item.discount}% OFF)</span>
              )}
            </div>

            {/* 🛒 move to bag */}
            <button
              style={styles.bagBtn}
              onClick={() => moveToBag(item)}
            >
              MOVE TO BAG
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🎨 Styles (Myntra inspired)
const styles = {
  container: {
    padding: "40px",
    background: "#f5f5f6",
    minHeight: "100vh",
  },
  heading: {
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    position: "relative",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    transition: "0.25s",
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "16px",
    margin: "10px 0 4px",
  },
  brand: {
    color: "#777",
    fontSize: "14px",
    marginBottom: "6px",
  },
  priceRow: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginBottom: "12px",
  },
  price: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    fontSize: "14px",
  },
  discount: {
    color: "#ff3f6c",
    fontSize: "13px",
    fontWeight: "bold",
  },
  bagBtn: {
    width: "100%",
    padding: "10px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  removeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "#fff",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
  },
  emptyContainer: {
    padding: "80px",
    textAlign: "center",
  },
  shopBtn: {
    marginTop: "20px",
    padding: "12px 24px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};