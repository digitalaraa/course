import React from "react";

const EnrollButton = () => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    console.log("Enroll Now button clicked!");
    // Add further logic (e.g., open modal, navigate dynamically)
  };

  return (
    <div className="rbt-btn-wrapper">
      <button
        className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient rounded-full text-sm transform-none"
        onClick={handleClick}
      >
        <span data-text="Enroll Now">Enroll Now</span>
      </button>
    </div>
  );
};

export default EnrollButton;
