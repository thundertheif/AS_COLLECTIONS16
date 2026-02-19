import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const newProduct = {
      name: form.name.value,
      category: form.category.value,
      price: form.price.value,
      stock: form.stock.value,
    };
    setProducts([...products, newProduct]);
    form.reset();
  };

  const deleteProduct = (i) => {
    const newList = products.filter((_, index) => index !== i);
    setProducts(newList);
  };

  return (
    <div>
      <h1>Manage Sarees, Tops, Kurtis</h1>

      {/* Add Product Form */}
      <form onSubmit={addProduct} style={box}>
        <input name="name" placeholder="Product Name" required />
        <select name="category">
          <option>Sarees</option>
          <option>Tops</option>
          <option>Kurtis</option>
        </select>
        <input name="price" placeholder="Price" required />
        <input name="stock" placeholder="Stock" required />
        <button>Add Product</button>
      </form>

      {/* Product Table */}
      <table style={table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => deleteProduct(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const box = { background: "#fff", padding: 15, display: "grid", gap: 10, marginBottom: 20 };
const table = { width: "100%", background: "#fff", borderCollapse: "collapse" };
