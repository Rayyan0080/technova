import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  const featured = products.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <h1>Upgrade Your Tech Lifestyle</h1>
          <p>
            Discover premium electronics, from high-performance laptops to
            immersive audio gear.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="promo-banner">
        <div className="container promo-content">
          <h2>🔥 Limited Time Sale!</h2>
          <p>
            Save up to 25% on select student-friendly laptops and headphones.
            Only Today!
          </p>
          <Link to="/products" className="btn btn-secondary">
            Grab the Deal
          </Link>
        </div>
      </section>

      <section className="container section-padding">
        <h2 className="section-title">Featured Products</h2>
        <div className="grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
