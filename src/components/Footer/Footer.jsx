import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <h3>TechNova</h3>
          <p>
            Your friendly technology advisor. We provide the best gear for
            students and professionals.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/products">Shop All</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/survey">Feedback Survey</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Shipping Info</li>
            <li>Returns & Warranty</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} TechNova. Created for SEG3125
          Assignment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
