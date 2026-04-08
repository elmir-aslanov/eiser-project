import React from "react";
import Features from "../../components/Layout/Footer/Features";
// import Blog from "../../components/Layout/";
import FeaturedProduct from "./FeaturedProduct";
import "./home.css";

const Home = () => {
  return (
    <>
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

      <FeaturedProduct />
      <Features />
      {/* <Blog /> */}
    </>
  );
};

export default Home;