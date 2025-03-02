import React from "react";

const EnrollButton = () => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    console.log("Enroll Now link clicked!");
    // Add further logic (e.g., open modal, navigate dynamically)
  };

  return (
    <div className="rbt-btn-wrapper">
      <a
        className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient rounded-full text-sm transform-none"
        href="#"
        onClick={handleClick}
      >
        <span data-text="Enroll Now">Enroll Now</span>
      </a>
    </div>
  );
};

export default EnrollButton;
