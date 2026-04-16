import { Link } from "react-router-dom";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useShop } from "../../context/ShopContext";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const isFavorite = wishlist.some((item) => item._id === product._id);

  return (
    <article className="product-card">
      <div className="product-media">
        <img src={product.image} alt={product.name} />
        <div className="product-actions">
          <button onClick={() => addToCart(product._id, 1)} aria-label="Add to cart">
            <FiShoppingCart />
          </button>
          <button
            className={isFavorite ? "active-action" : ""}
            onClick={() => toggleWishlist(product._id)}
            aria-label="Add to wishlist"
          >
            <FiHeart />
          </button>
          <Link to={`/product/${product._id}`} aria-label="View details">
            <FiEye />
          </Link>
        </div>
      </div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="price-row">
          <p>${Number(product.price).toFixed(2)}</p>
          <span>$35.00</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
