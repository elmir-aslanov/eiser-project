const Checkout = () => {
  return (
    <main>
      <section className="inner-banner"><div className="container"><h1>Product Checkout</h1></div></section>
      <section className="checkout-section">
        <div className="container checkout-grid">
          <form className="checkout-form">
            <h3>Billing Details</h3>
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Email Address" />
            <input placeholder="Address line 01" />
            <input placeholder="Address line 02" />
            <textarea placeholder="Order Notes" rows={4} />
            <button type="button" className="cta-btn">Place Order</button>
          </form>
          <div className="order-box">
            <h3>Your Order</h3>
            <p>Product <span>Total</span></p>
            <p>Fresh Blackberry <span>$720.00</span></p>
            <p>Fresh Tomatoes <span>$720.00</span></p>
            <p>Fresh Broccoli <span>$720.00</span></p>
            <p className="order-total">Total <span>$2160.00</span></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
