import React, { useState, useEffect } from 'react';
import { FaTrash, FaShoppingCart, FaHeart } from 'react-icons/fa';

const Wishlist = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // LocalStorage-dan "wishlist" məlumatlarını oxuyuruq
    const items = JSON.parse(localStorage.getItem('wishlist')) || [];
    setFavorites(items);
  }, []);

  const removeFromWishlist = (id) => {
    const filtered = favorites.filter(item => item._id !== id);
    setFavorites(filtered);
    localStorage.setItem('wishlist', JSON.stringify(filtered));
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item._id === product._id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Məhsul səbətə əlavə edildi!");
  };

  return (
    <div className="container mx-auto py-20 px-4 min-h-screen">
      <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest text-center flex items-center justify-center gap-3">
        <FaHeart className="text-red-500" /> İstək Siyahısı
      </h2>
      
      {favorites.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <p className="text-gray-400 italic">Bəyəndiyiniz məhsul yoxdur.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map(product => (
            <div key={product._id} className="border bg-white p-4 group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden aspect-square bg-[#f6f6f6] mb-4">
                <img 
                  src={`/src/assets/image/${product.image}`} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-center font-medium uppercase text-[10px] text-gray-500 mb-2">{product.name}</h3>
              <p className="text-center font-bold text-lg text-[#2a2a2a] mb-4">${product.price.toFixed(2)}</p>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-[#71cd14] text-white py-2 rounded-sm flex items-center justify-center gap-2 hover:bg-black transition-colors text-[10px] font-bold uppercase"
                >
                  <FaShoppingCart /> Səbətə At
                </button>
                <button 
                  onClick={() => removeFromWishlist(product._id)} 
                  className="bg-gray-100 text-gray-400 p-2 rounded-sm hover:bg-red-500 hover:text-white transition-all"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;