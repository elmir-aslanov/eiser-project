import { Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";

const Cart = () => {
  const { cart, updateCartQty, removeFromCart } = useShop();

  const subtotal = cart.reduce((sum, item) => sum + item.quantity * (item.productId?.price || 0), 0);

  return (
    <main>
      <section className="inner-banner"><div className="container"><h1>Shopping Cart</h1></div></section>
      <section className="cart-section">
        <div className="container">
          <table className="cart-table">
            <thead>
              <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th /></tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.productId?._id}>
                  <td className="cart-product"><img src={item.productId?.image} alt="" /><span>{item.productId?.name}</span></td>
                  <td>${Number(item.productId?.price || 0).toFixed(2)}</td>
                  <td><input type="number" min="1" value={item.quantity} onChange={(e) => updateCartQty(item.productId?._id, Number(e.target.value))} /></td>
                  <td>${Number((item.productId?.price || 0) * item.quantity).toFixed(2)}</td>
                  <td><button className="link-btn" onClick={() => removeFromCart(item.productId?._id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-bottom">
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <Link to="/checkout" className="cta-btn">Proceed to checkout</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
