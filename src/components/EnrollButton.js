import React from "react";
import { Link } from "react-router-dom";

const EnrollButton = () => {
  return (
    <div className="rbt-btn-wrapper">
      <Link to="/" className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient rounded-full text-sm transform-none">
        <span data-text="Enroll Now">Enroll Now</span>
      </Link>
    </div>
  );
};

export default EnrollButton;
vvvvvvvvvvv