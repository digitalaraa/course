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
                <img src="assets/images/v1/logo.svg" alt="Logo" />
              </Link>
            </div>
            <p>
              Vast numbers of employees now work remotely, and it’s too late to
              develop a set of remote-work policies if you didn’t already have one.
            </p>
            <div className="tekup-sidemenu-thumb">
              <img src="assets/images/hero/hero-bg1.png" alt="Background" />
            </div>
            <div className="tekup-contact-info-wrap">
              <div className="tekup-contact-info">
                <i className="ri-map-pin-2-fill" />
                <h5>Address</h5>
                <p>
                  1791 Yorkshire Circle Kitty
                  <br />
                  Hawk, NC 279499
                </p>
              </div>
              <div className="tekup-contact-info">
                <i className="ri-mail-fill" />
                <h5>Contact</h5>
                <a href="mailto:info@mthemeus.com">info@mthemeus.com</a>
                <a href="tel:5185643200">518-564-3200</a>
              </div>
            </div>
            <div className="tekup-social-icon-box">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
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
