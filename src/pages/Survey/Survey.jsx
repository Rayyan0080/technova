import React, { useState } from "react";
import "./Survey.css";

const Survey = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container page-container text-center">
        <div className="survey-card">
          <h2>Thank You!</h2>
          <p>
            We appreciate your feedback. It helps us become a better technology
            advisor for you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-container">
      <div className="survey-card">
        <h2 className="text-center">Tell Us How We Did</h2>
        <p
          className="text-center text-light"
          style={{ marginBottom: "1.5rem" }}
        >
          Your opinion matters to us.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group text-center">
            <label>Overall Experience</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? "selected" : ""}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Was the website easy to use?</label>
            <select className="form-control" required>
              <option value="">Select an option</option>
              <option value="yes">Yes, very easy</option>
              <option value="somewhat">Somewhat easy</option>
              <option value="no">No, it was difficult</option>
            </select>
          </div>

          <div className="form-group">
            <label>Any suggestions for improvement?</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Tell us what you think..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={rating === 0}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Survey;
