import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import Offer from "./Offer";
import InspiredProduct from "./InspiredProduct";
import Features from "../../components/Layout/Footer/Features";
import "./home.css";

const Home = () => {
  return (
    <>
      {/* 1. Hero / Banner Bölməsi */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">MEN COLLECTION</p>
          <h1 className="hero-title">
            Show Your <br />
            Personal <span>Style</span>
          </h1>
          <p className="hero-desc">
            Fowl saw dry which a above together place.
          </p>
          <button className="hero-btn">VIEW COLLECTION</button>
        </div>
      </section>

      {/* 2. Mağaza Xüsusiyyətləri (Giriş hissəsində və ya Featured-dan əvvəl) */}
      <Features />

      {/* 3. Seçilmiş Məhsullar (3 dənə olan) */}
      <FeaturedProduct />

      {/* 4. Kampaniya Bölməsi (50% OFF) */}
      <Offer />

      {/* 5. İlham Verən Məhsullar (8 dənə olan grid) */}
      <InspiredProduct />

      {/* Blog bölməsini hazır olanda bura əlavə edə bilərsən */}
      {/* <Blog /> */}
    </>
  );
};

export default Home;