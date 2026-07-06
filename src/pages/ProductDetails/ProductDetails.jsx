import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import { CartContext } from "../../contexts/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container page-container text-center">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary mt-4">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container page-container">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt; <Link to="/products">Products</Link> &gt;{" "}
        <span>{product.name}</span>
      </div>

      <div className="product-details-grid">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-info">
          <div className="brand-tag">{product.brand}</div>
          <h1 className="title">{product.name}</h1>

          <div className="rating-stock">
            <div className="rating">
              <span className="stars">★★★★★</span> {product.rating}
            </div>
            <div
              className={`stock ${product.stock > 0 ? "in-stock" : "out-stock"}`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </div>
          </div>

          <div className="price">${product.price.toLocaleString()}</div>

          <p className="description">{product.description}</p>

          {/* Informative text (Communicate Process) */}
          <div className="specs">
            <h3>Specifications</h3>
            <ul>
              {product.specifications.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="actions">
            <button
              className="btn btn-primary btn-large"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
