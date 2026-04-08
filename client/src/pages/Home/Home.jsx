<<<<<<< HEAD
// import React from 'react';
// import Features from '../../components/Layout/Footer/Features';

// const Home = () => {
//   return (
//     <main>
//       <h1>Home Page</h1>
//       <Features />
//     </main>
//   );
// };

// export default Home;





//  menim yazdigim


// import React from "react";
// import Features from "../../components/Layout/Footer/Features";
// const Home = () => {
//   return (
//     <main>
//       <Features />
//     </main>
//   );
// };

// export default Home;


import React from "react";
import Features from "../../components/Layout/Footer/Features";
import Blog from "../../components/Layout/Blog";

const Home = () => {
  return (
    <main>
      <Features />
      <Blog />
    </main>
=======
import "./home.css";

const Home = () => {
  return (
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
>>>>>>> e8a9c64f23d511d7bbf30fcd711f5afb329a2a4f
  );
};

export default Home;