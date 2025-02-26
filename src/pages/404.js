import React from 'react';
import { Link } from "react-router";

const NotFoundPage = () => {

  return (
    <>
        <div className="tekup-errors-section">
          <div className="container">
            <div className="tekup-errors-content">
              <img 
                src="/assets/images/breadcrumb/errors404.png" 
                alt="404 Error" 
                loading="lazy" // Lazy load the image
              />
              <h2>Oops, this page is not found</h2>
              <p>The page you’re looking for can’t be found. Double-check the URL and try again. We invite you to visit our homepage.</p>
              <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                <Link className="tekup-default-btn left" to="/">
                  Start a Project <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default NotFoundPage;