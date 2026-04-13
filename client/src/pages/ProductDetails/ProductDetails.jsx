import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import { useShop } from "../../context/ShopContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, toggleWishlist } = useShop();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <main><section className="inner-banner"><div className="container"><h1>Loading...</h1></div></section></main>;

  return (
    <main>
      <section className="inner-banner"><div className="container"><h1>Product Details</h1></div></section>
      <section className="details-section">
        <div className="container details-grid">
          <img src={product.image} alt={product.name} className="details-image" />
          <div>
            <h2>{product.name}</h2>
            <p className="details-price">${Number(product.price).toFixed(2)}</p>
            <p className="details-text">Mill Oil is an innovative oil filled radiator with the most modern technology.</p>
            <div className="details-actions">
              <button className="cta-btn" onClick={() => addToCart(product._id, 1)}>Add to cart</button>
              <button className="outline-btn" onClick={() => toggleWishlist(product._id)}>Add to wishlist</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
