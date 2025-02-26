import React from 'react';
//import 'assets/styles/progressbar.css';

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" />
      {/* Progress Circle */}
      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
          <div className="top-arrow">
            <img src="assets/images/rightarrow.svg" alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
