import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  addToCartApi,
  getCartApi,
  removeFromCartApi,
  updateCartItemApi
} from "../services/cartService";
import {
  addToWishlistApi,
  getWishlistApi,
  removeFromWishlistApi
} from "../services/wishlistService";

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const syncCart = async () => {
    const data = await getCartApi();
    setCart(data?.products || []);
  };

  const syncWishlist = async () => {
    const data = await getWishlistApi();
    setWishlist(data?.products || []);
  };

  useEffect(() => {
    syncCart();
    syncWishlist();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    await addToCartApi(productId, quantity);
    await syncCart();
  };

  const updateCartQty = async (productId, quantity) => {
    await updateCartItemApi(productId, quantity);
    await syncCart();
  };

  const removeFromCart = async (productId) => {
    await removeFromCartApi(productId);
    await syncCart();
  };

  const toggleWishlist = async (productId) => {
    const exists = wishlist.some((item) => item._id === productId);
    if (exists) {
      await removeFromWishlistApi(productId);
    } else {
      await addToWishlistApi(productId);
    }
    await syncWishlist();
  };

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      cartCount: cart.reduce((total, item) => total + item.quantity, 0),
      wishlistCount: wishlist.length,
      addToCart,
      updateCartQty,
      removeFromCart,
      toggleWishlist
    }),
    [cart, wishlist]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);
