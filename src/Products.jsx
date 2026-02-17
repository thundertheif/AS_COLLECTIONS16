import products from "../data/WomenProducts";

function Products() {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.category}</p>
          <span>₹ {p.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Products;
