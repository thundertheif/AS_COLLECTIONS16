import React, { useState } from "react";
import "./DesignerMaterials.css";

import cotton from "../assets/materials/cotton.JPG";
import rayon from "../assets/materials/rayon.JPG";
import chanderi from "../assets/materials/chanderi.JPG";
import georgette from "../assets/materials/georgette.JPG";
import silk from "../assets/materials/silk.JPG";

export default function DesignerMaterials() {
  // ✅ DATA
  const materialsData = [
    { id: 1, name: "Premium Cotton Kurti", price: 1199, image: cotton },
    { id: 2, name: "Rayon Designer Kurti", price: 1499, image: rayon },
    { id: 3, name: "Chanderi Festive Kurti", price: 2499, image: chanderi },
    { id: 4, name: "Georgette Party Wear", price: 2999, image: georgette },
    { id: 5, name: "Silk Blend Kurti", price: 2799, image: silk },
  ];

  // ✅ STATES
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(5000);

  // ✅ FILTER LOGIC
  let filteredMaterials = materialsData.filter(
    (item) => item.price <= maxPrice
  );

  // search filter
  filteredMaterials = filteredMaterials.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // sorting
  if (sort === "low") {
    filteredMaterials.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredMaterials.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="designer-container">
      <h1 className="page-title">Designer Materials</h1>

      {/* ✅ FILTERS */}
      <div className="filters">
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search materials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* SORT */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>

        {/* PRICE RANGE */}
        <div className="price-filter">
          <label>Max Price: ₹{maxPrice}</label>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* ✅ GRID */}
      <div className="materials-grid">
        {filteredMaterials.length === 0 ? (
          <p>No materials found.</p>
        ) : (
          filteredMaterials.map((item) => (
            <div className="material-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}