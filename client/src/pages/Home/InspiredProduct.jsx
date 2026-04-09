import React from 'react';
import './InspiredProduct.css';

const InspiredProduct = () => {
  const products = [
    { id: 1, name: "LATEST MEN'S SNEAKER", price: 25.0, oldPrice: 35.0, image: "/assets/image/sekl1.jpg" },
    { id: 2, name: "LATEST MEN'S SNEAKER", price: 25.0, oldPrice: 35.0, image: "/assets/image/sekil 2.jpg" },
    { id: 3, name: "LATEST MEN'S SNEAKER", price: 25.0, oldPrice: 35.0, image: "/assets/image/sekil3.jpg" },
    { id: 4, name: "LATEST MEN'S SNEAKER", price: 25.0, oldPrice: 35.0, image: "/assets/image/sekl1.jpg" },
    { id: 5, name: "LATEST MEN'S SNEAKER", price: 25.0, oldPrice: 35.0, image: "/assets/image/sekil3.jpg" },
    { id: 6, name: "LATEST MEN'S SNEAKER", price: 25.0, oldPrice: 35.0, image: "/assets/image/sekl1.jpg" },
    { id: 7, name: "LATEST MEN'S SNEAKER", price: 25.0, oldPrice: 35.0, image: "/assets/image/sekil 2.jpg" },
    { id: 8, name: "LATEST MEN'S SNEAKER", price: 25.0, oldPrice: 35.0, image: "/assets/image/sekil3.jpg" },
  ];

  return (
    <section className="inspired-section">
      <div className="container">
        <div className="section-title">
          <h2>INSPIRED PRODUCTS</h2>
          <p>Bring called seed first of third give itself now ment</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-actions">
                  <button className="icon-btn"><i className="far fa-eye"></i></button>
                  <button className="icon-btn"><i className="far fa-heart"></i></button>
                  <button className="icon-btn"><i className="fas fa-shopping-cart"></i></button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price-tag">
                  <span className="current-price">${product.price.toFixed(2)}</span>
                  <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspiredProduct;