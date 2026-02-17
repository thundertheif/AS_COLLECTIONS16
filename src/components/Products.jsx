import products from "../data/WomenProducts";

function Products() {
  return (
    <section className="products">
      <h2>New Arrivals</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="img-placeholder"></div>
            <p>{p.name}</p>
            <span>₹ {p.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
