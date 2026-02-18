/* ======================= Cart.jsx ======================= */
import { useCart } from "../context/CartContext";
import "./page.css";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="page-container">
      <h2 className="page-title">🛒 Your Shopping Cart</h2>
      <div className="page-divider"></div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty 😔</h3>
          <p>Start shopping to add items!</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p className="price">₹ {item.price}</p>

                  <div className="qty">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <p className="subtotal">
                    Subtotal: ₹ {item.price * item.qty}
                  </p>

                  <button
                    className="remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CART SUMMARY */}
          <div className="cart-summary">
            <h3>Total Amount: ₹ {total}</h3>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
