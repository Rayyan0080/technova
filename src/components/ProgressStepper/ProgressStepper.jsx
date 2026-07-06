import React from "react";
import "./ProgressStepper.css";

const ProgressStepper = ({ currentStep }) => {
  const steps = ["Cart", "Shipping", "Payment", "Review"];

  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`stepper-item ${index < currentStep ? "completed" : index === currentStep ? "active" : ""}`}
        >
          <div className="step-counter">
            {index < currentStep ? "✓" : index + 1}
          </div>
          <div className="step-name">{step}</div>
          {index < steps.length - 1 && <div className="step-divider"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressStepper;
