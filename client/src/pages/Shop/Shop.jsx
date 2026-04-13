import { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard";
import { getAllProducts } from "../../services/productService";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <main>
      <section className="inner-banner"><div className="container"><h1>Shop Category</h1></div></section>
      <section className="product-section">
        <div className="container">
          <div className="inspired-grid">
            {products.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
