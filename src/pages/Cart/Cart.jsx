import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } =
    useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0)
    return (
      <div className="container page-container text-center">
        <h2>Your Cart is Empty</h2>
      </div>
    );

  return (
    <div className="container page-container">
      <ProgressStepper currentStep={0} />
      <h1 className="section-title">Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
