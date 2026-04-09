import React from "react";
import Features from "../../components/Layout/Footer/Features";
import FeaturedProduct from "./FeaturedProduct";
import HeroSection from "./HeroSection";
import Blog from "./Blog";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedProduct />
      <Blog />
      <Features />
    </div>
  );
};

export default Home;