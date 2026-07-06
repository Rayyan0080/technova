import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import "./Checkout.css";

const Checkout = () => {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handlePlaceOrder = () => {
    clearCart();
    navigate("/confirmation");
  };

  return (
    <div className="container page-container checkout-page">
      <ProgressStepper currentStep={step} />
      <div className="checkout-content">
        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
          >
            <h2>Shipping Info</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Continue to Payment
            </button>
          </form>
        )}
        {step === 2 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(3);
            }}
          >
            <h2>Payment Details</h2>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" required className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Review Order
            </button>
          </form>
        )}
        {step === 3 && (
          <div>
            <h2>Review Your Order</h2>
            <button className="btn btn-primary" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
