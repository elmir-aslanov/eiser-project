import React from "react";
import bannerBg from "../../../assets/image/banner-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${bannerBg})`,
        backgroundColor: '#f6f6f6' // Fallback color matching Eiser theme
      }}
    >
      <div className="container mx-auto px-4 md:px-15">
        <div className="max-w-2xl pt-20">
          <p className="text-[#71cd14] font-medium tracking-[2px] mb-4 text-sm md:text-base uppercase">
            MEN COLLECTION
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2a2a2a] leading-tight mb-6">
            <span className="text-[#71cd14]">Show</span> Your <br />
            Personal Style
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            Fowl saw dry which a above together place. Bring called seed first of third give itself now ment.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#71cd14] text-white px-10 py-4 rounded-md font-semibold tracking-wider hover:bg-black transition-all duration-300 uppercase text-sm">
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Subtle decorative element matching Eiser's clean look */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block opacity-20 pointer-events-none">
        {/* You could add a faint product image here if available in assets, 
            but keeping it clean as per the reference link's minimal style */}
      </div>
    </section>
  );
};

export default HeroSection;
