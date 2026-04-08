import React from 'react';
import './FeaturedProduct.css';

// Şəkillərin adlarını sənin qovluğundakı ilə tam eyni etdim:
import img1 from '../../../assets/image/sekil3.jpg';   // Səndə 'i' hərfi yoxdur: sekl1
import img2 from '../../../assets/image/sekil 2.jpg'; // Səndə arada boşluq var: sekil 2
import img3 from '../../../assets/image/sekl1.jpg';  // Bu normaldır

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      name: "LATEST MEN'S SNEAKER",
      price: 25.00,
      oldPrice: 35.00,
      image: img1 
    },
    {
      id: 2,
      name: "RED WOMEN PURSES",
      price: 25.00,
      oldPrice: 35.00,
      image: img2
    },
    {
      id: 3,
      name: "MEN STYLIST SMART WATCH",
      price: 25.00,
      oldPrice: 35.00,
      image: img3
    }
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-title">
          <h2>FEATURED PRODUCT</h2>
          <p>Bring called seed first of third give itself now ment</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-actions">
                  <button className="icon-btn" title="View"><i className="far fa-eye"></i></button>
                  <button className="icon-btn" title="Wishlist"><i className="far fa-heart"></i></button>
                  <button className="icon-btn" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
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

export default FeaturedProduct;