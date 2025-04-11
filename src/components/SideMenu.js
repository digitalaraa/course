import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <>
      <div className="search-overlay" />
      <div className="tekup-sidemenu-wraper">
        <div className="tekup-sidemenu-column">
          <div className="tekup-sidemenu-body">
            <div className="tekup-sidemenu-logo">
              <Link to="/about">
                <img src="assets/images/v1/logo.svg" alt="DigitalAraa Logo" />
              </Link>
            </div>
            <p>
              DigitalAraa is a premier digital agency specializing in web development, 
              mobile apps, UI/UX design, and digital marketing solutions to help 
              businesses thrive in the digital landscape.
            </p>
            <div className="tekup-sidemenu-thumb">
              <img src="assets/images/hero/hero-bg1.png" alt="DigitalAraa Team" />
            </div>
            <div className="tekup-contact-info-wrap">
              <div className="tekup-contact-info">
                <i className="ri-map-pin-2-fill" />
                <h5>Address</h5>
                <p>
                  Digital Araa<br />
                  Coimbatore, <br />
                  Tamilnadu,<br />
                  India.<br />
                </p>
              </div>
              <div className="tekup-contact-info">
                <i className="ri-mail-fill" />
                <h5>Contact</h5>
                <a href="mailto:digitalaraa@gmail.com">digitalaraa@gmail.com</a>
                <a href="tel:+918667853720">+91 86678 53720</a>
              </div>
            </div>
            <div className="tekup-social-icon-box">
              <ul>
                <li>
                  <a href="https://www.facebook.com/digitalaraa" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/digitalaraa" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/digitalaraa" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/digitalaraa29" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span className="tekup-sidemenu-close">
            <i className="ri-close-line" />
          </span>
        </div>
        <div className="offcanvas-overlay" />
      </div>
      <div className="offcanves-menu" />
    </>
  );
};

export default SideMenu;