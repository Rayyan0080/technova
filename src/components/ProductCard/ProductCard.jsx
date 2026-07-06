import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </Link>
        {product.stock < 10 && (
          <span className="badge badge-warning">Low Stock</span>
        )}
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="product-rating">
          <span className="stars">★</span> {product.rating}
        </div>
        <div className="product-bottom">
          <span className="product-price">
            ${product.price.toLocaleString()}
          </span>
          <button
            className="btn btn-primary add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
