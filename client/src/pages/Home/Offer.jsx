import React from 'react';
import './Offer.css';

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="container">
        <div className="offer-wrapper">
          <div className="offer-image">
             {/* Şəkili assets/image qovluğundan istifadə edərək özün əlavə edəcəksən */}
             {/* <img src="/assets/image/offer-man.png" alt="Offer Man" /> */}
          </div>
          <div className="offer-content">
            <p className="offer-subtitle">ALL MEN’S COLLECTION</p>
            <h1 className="offer-title">50% OFF</h1>
            <button className="offer-btn">DISCOVER NOW</button>
            <p className="offer-timer">Limited Time Offer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;