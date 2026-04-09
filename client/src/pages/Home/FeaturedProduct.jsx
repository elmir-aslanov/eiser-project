import React from 'react';
import { FiEye, FiHeart } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import './FeaturedProduct.css';

// Using existing assets
import img1 from '../../../assets/image/sekil3.jpg';
import img2 from '../../../assets/image/sekil 2.jpg';
import img3 from '../../../assets/image/sekl1.jpg';

const ProductCard = ({ product }) => {
  if (!product) return null;
  return (
    <div className="product-card group">
      <div className="product-image relative overflow-hidden bg-[#f6f6f6]">
        <img src={product.image} alt={product.name} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
        <div className="product-actions absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#71cd14] hover:text-white transition-colors">
            <FiEye size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#71cd14] hover:text-white transition-colors">
            <FiHeart size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#71cd14] hover:text-white transition-colors">
            <FaShoppingCart size={18} />
          </button>
        </div>
      </div>
      <div className="product-info p-5 text-center bg-white">
        <h3 className="text-sm font-medium text-gray-800 uppercase mb-2 group-hover:text-[#71cd14] transition-colors">{product.name}</h3>
        <div className="price flex items-center justify-center gap-3">
          <span className="text-lg font-bold text-[#2a2a2a]">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

const FeaturedProduct = () => {
  const newProducts = [
    { id: 1, name: "NIKE LATEST SNEAKER", price: 25.00, oldPrice: 35.00, image: img1 },
    { id: 2, name: "MEN'S DENIM JEANS", price: 25.00, oldPrice: 35.00, image: img2 },
    { id: 3, name: "QUARTZ HAND WATCH", price: 25.00, oldPrice: 35.00, image: img3 },
    { id: 4, name: "ADIDAS SPORT SHOE", price: 25.00, oldPrice: 35.00, image: img1 }
  ];

  const inspiredProducts = [
    { id: 5, name: "LATEST MEN'S SNEAKER", price: 25.00, oldPrice: 35.00, image: img1 },
    { id: 6, name: "LATEST MEN'S SNEAKER", price: 25.00, oldPrice: 35.00, image: img2 },
    { id: 7, name: "LATEST MEN'S SNEAKER", price: 25.00, oldPrice: 35.00, image: img3 },
    { id: 8, name: "LATEST MEN'S SNEAKER", price: 25.00, oldPrice: 35.00, image: img1 },
    { id: 9, name: "LATEST MEN'S SNEAKER", price: 25.00, oldPrice: 35.00, image: img1 },
    { id: 10, name: "LATEST MEN'S SNEAKER", price: 25.00, oldPrice: 35.00, image: img2 },
    { id: 11, name: "LATEST MEN'S SNEAKER", price: 25.00, oldPrice: 35.00, image: img3 },
    { id: 12, name: "LATEST MEN'S SNEAKER", price: 25.00, oldPrice: 35.00, image: img1 }
  ];

  return (
    <>
      {/* New Products Section */}
      <section className="new-products-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2a2a2a] uppercase mb-4 tracking-wider">NEW PRODUCTS</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Bring called seed first of third give itself now ment</p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            {/* Featured Large Item (Matches Image 1) */}
            <div className="lg:w-1/2 relative bg-[#f6f6f6] p-10 flex flex-col items-center justify-center group overflow-hidden">
              <div className="text-center z-10 mb-8">
                <p className="text-gray-500 text-xs tracking-widest mb-2 uppercase">COLLECTION OF 2019</p>
                <h3 className="text-2xl font-bold text-[#2a2a2a] uppercase mb-6">MEN'S SUMMER T-SHIRT</h3>
                <div className="text-3xl font-bold text-[#2a2a2a] mb-6">$120.70</div>
                <button className="bg-[#71cd14] text-white px-8 py-3 rounded-sm font-bold uppercase text-xs hover:bg-black transition-colors">ADD TO CART</button>
              </div>
              <img src={img1} alt="Featured" className="max-w-xs w-full transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Grid of 4 Small Items */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {newProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspired Products Section (Matches Image 2) */}
      <section className="inspired-products-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2a2a2a] uppercase mb-4 tracking-wider">INSPIRED PRODUCTS</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Bring called seed first of third give itself now ment</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspiredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
