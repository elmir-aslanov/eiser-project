import React, { useState, useEffect } from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // LocalStorage-dan "cart" məlumatlarını oxuyuruq
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const updateQuantity = (id, delta) => {
    const updated = cartItems.map(item => {
      if (item._id === id) {
        const newQty = Math.max(1, (item.quantity || 1) + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const filtered = cartItems.filter(item => item._id !== id);
    setCartItems(filtered);
    localStorage.setItem('cart', JSON.stringify(filtered));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="container mx-auto py-20 px-4 min-h-screen">
      <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest text-center">Səbətim</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed">
          <p className="text-gray-500">Səbətiniz boşdur.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-400 text-sm uppercase font-bold">
                <th className="py-4">Məhsul</th>
                <th className="py-4">Qiymət</th>
                <th className="py-4 text-center">Say</th>
                <th className="py-4">Cəmi</th>
                <th className="py-4 text-right">Sil</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-6 flex items-center gap-4">
                    {/* Sənin strukturuna uyğun şəkil yolu */}
                    <img 
                      src={`/src/assets/image/${item.image}`} 
                      alt={item.name} 
                      className="w-20 h-20 object-contain bg-gray-100 p-2 rounded" 
                    />
                    <span className="font-semibold text-gray-800">{item.name}</span>
                  </td>
                  <td className="py-6 text-gray-600">${item.price.toFixed(2)}</td>
                  <td className="py-6">
                    <div className="flex items-center justify-center gap-3 border w-fit mx-auto px-3 py-1 rounded-full bg-gray-50">
                      <button onClick={() => updateQuantity(item._id, -1)} className="text-gray-500 hover:text-[#71cd14]"><FaMinus size={10}/></button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity || 1}</span>
                      <button onClick={() => updateQuantity(item._id, 1)} className="text-gray-500 hover:text-[#71cd14]"><FaPlus size={10}/></button>
                    </div>
                  </td>
                  <td className="py-6 font-bold text-[#71cd14]">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </td>
                  <td className="py-6 text-right">
                    <button onClick={() => removeItem(item._id)} className="text-red-400 hover:text-red-600 p-2 transition-colors">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-10 flex flex-col items-end border-t pt-8">
            <div className="flex gap-10 items-center mb-6">
              <span className="text-gray-500 uppercase font-bold text-sm">Ümumi:</span>
              <span className="text-3xl font-bold text-[#2a2a2a]">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="bg-[#71cd14] text-white px-12 py-4 rounded-sm font-bold uppercase text-xs hover:bg-black transition-all">
              Sifarişi Tamamla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;