import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Replaced Gatsby Link with React Router
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
// Corrected image import paths
import thumb1 from "../assets/images/hero/home-about-banner.jpg";
import rating from "../assets/images/v3/rating.png";
import icon1 from "../assets/images/v2/icon1.png";
import icon2 from "../assets/images/v2/icon2.png";


const BusinessSuccessSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      once: true, // Play animation only once
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on component load
  }, []);

  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img src={thumb1} alt="Thumb" />
              <div className="tekup-thumb-card">
                <img src={rating} alt="Rating" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>Empowering Your Business Success Through Technology</h2>

              <div className="tekup-extra-mt">
                <div className="tekup-icon-list-wrap">
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src={icon1} alt="Icon 1" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Quality Solution for Business</h5>
                      <p>
                        We provide reliable solutions that enhance performance
                        and drive business success.
                      </p>
                    </div>
                  </div>

                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src={icon2} alt="Icon 2" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Amazing Expert Teams</h5>
                      <p>
                        We have skilled teams dedicated to delivering innovative
                        solutions and exceptional results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tekup-extra-mt">
                <Link className="tekup-default-btn" to="/about">
                  More About <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSuccessSection;
