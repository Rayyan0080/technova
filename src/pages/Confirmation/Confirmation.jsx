import React from "react";
import { Link } from "react-router-dom";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import "./Confirmation.css";

const Confirmation = () => {
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <div className="container page-container">
      <ProgressStepper currentStep={4} />

      <div className="confirmation-content text-center">
        <div className="success-icon">✓</div>
        <h1>Order Confirmed!</h1>
        <p className="order-number">Order #{orderNumber}</p>
        <p className="message">
          Thank you for your purchase. Your friendly tech advisors at TechNova
          are preparing your order for shipment.
        </p>

        <div className="survey-prompt">
          <h3>Help us improve!</h3>
          <p>We'd love to hear about your experience.</p>
          <Link to="/survey" className="btn btn-primary mt-4">
            Take Quick Survey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
