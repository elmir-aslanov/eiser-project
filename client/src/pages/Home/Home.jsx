import { useEffect, useMemo, useState } from "react";
import { FaHeadset, FaLock, FaMoneyBillAlt, FaTruck } from "react-icons/fa";
import { getAllProducts } from "../../services/productService";
import ProductCard from "../../components/common/ProductCard";
import BlogCard from "../../components/common/BlogCard";
import { blogPosts } from "../../data/blogData";

const fallbackProducts = [
  { _id: "1", name: "Latest men's sneaker", price: 25, image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i1.jpg.webp" },
  { _id: "2", name: "Red women purses", price: 25, image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i2.jpg.webp" },
  { _id: "3", name: "Men stylist Smart Watch", price: 25, image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i3.jpg.webp" },
  { _id: "4", name: "Nike latest sneaker", price: 25, image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i4.jpg.webp" },
  { _id: "5", name: "Men's denim jeans", price: 25, image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i5.jpg.webp" },
  { _id: "6", name: "Quartz hand watch", price: 25, image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i6.jpg.webp" },
  { _id: "7", name: "Adidas sport shoe", price: 25, image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i7.jpg.webp" },
  { _id: "8", name: "Latest men's sneaker", price: 25, image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i8.jpg.webp" }
];

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  const apiProducts = useMemo(() => (products.length ? products : fallbackProducts), [products]);
  const getChunk = (count, start = 0) => {
    if (!apiProducts.length) return [];
    return Array.from({ length: count }, (_, index) => apiProducts[(start + index) % apiProducts.length]);
  };

  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <span className="subtitle">Men Collection</span>
          <h1>Show Your Personal Style</h1>
          <p>Fowl saw dry which a above together place. Bring called seed first of third give itself now ment.</p>
          <button className="cta-btn">View Collection</button>
        </div>
      </section>

      <section className="feature-section">
        <div className="container feature-grid">
          {[
            { title: "Money back gurantee", icon: <FaMoneyBillAlt /> },
            { title: "Free Delivery", icon: <FaTruck /> },
            { title: "Alway support", icon: <FaHeadset /> },
            { title: "Secure payment", icon: <FaLock /> }
          ].map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>Shall open divide a one</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section featured-products">
        <div className="container">
          <div className="section-heading">
            <h2>Featured product</h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
          <div className="featured-grid">
            {getChunk(3).map((product, index) => (
              <ProductCard key={`${product._id}-featured-${index}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="offer-section">
        <div className="container offer-content">
          <h4>All men's collection</h4>
          <h2>50% off</h2>
          <p>Limited Time Offer</p>
          <button className="cta-btn">Discover now</button>
        </div>
      </section>

      <section className="product-section">
        <div className="container">
          <div className="section-heading">
            <h2>New Products</h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
          <div className="product-layout">
            <article className="promo-card">
              <p>Collection of 2019</p>
              <h3>Men's summer t-shirt</h3>
              <strong>$120.70</strong>
              <button>Add to cart</button>
            </article>
            <div className="product-grid side-grid">
              {getChunk(4, 2).map((product, index) => (
                <ProductCard key={`${product._id}-new-${index}`} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-section inspired-products">
        <div className="container">
          <div className="section-heading">
            <h2>Inspired Products</h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
          <div className="inspired-grid">
            {getChunk(8, 1).map((product, index) => (
              <ProductCard key={`${product._id}-inspired-${index}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="section-heading">
            <h2>Latest Blog</h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((blog) => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;