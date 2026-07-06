import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container page-container about-container">
      <div className="about-content">
        <h1 className="section-title">About TechNova</h1>
        <p className="about-text">
          Welcome to TechNova, your ultimate destination for premium
          electronics. Built exclusively for the University of Ottawa SEG3125
          Assignment 4, this application demonstrates User-Centered Design
          principles applied to a modern React e-commerce environment.
        </p>

        <h3>Our Mission</h3>
        <p className="about-text">
          We aim to provide a seamless, intuitive, and accessible shopping
          experience. We believe that technology should empower, not frustrate.
          That's why our interface is designed with clarity, minimizing
          cognitive load and prioritizing user goals.
        </p>

        <h3>Interactive Processes Included</h3>
        <ul className="about-list">
          <li>
            <strong>Explore:</strong> Complex Faceted Search on the Products
            page.
          </li>
          <li>
            <strong>Follow Instructions:</strong> Step-by-step Guided Checkout
            Stepper.
          </li>
          <li>
            <strong>Communicate:</strong> System feedback via Survey, and
            engaging Writer-Reader tone.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
