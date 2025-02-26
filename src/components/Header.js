import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import ProgressBar from "./ProgressBar";
import SideMenu from "./SideMenu";
import HeroSlider from "./HeroSlider";
import HeaderTop from "./HeaderTop";

import digitalaraaLogo from '../assets/images/logo/digitalaraa-logo.png'; // Ensure to include the file extension

function Header() {
  
  const location = useLocation(); // Get the current route

  return (
    <>
      <ProgressBar />
      <header
        className="site-header tekup-header-section site-header--menu-right light-color"
        id="sticky-menu"
      >
        <HeaderTop />

        <div className="container-fluid">
          <div className="tekup-header-bottom border_bottom">
            <nav className="navbar site-navbar">
              {/* Brand Logo */}
              <div className="brand-logo">
                <Link to="/">
                  <img
                    src={digitalaraaLogo}
                    alt="Logo"
                    className="light-version-logo"
                  />
                </Link>
              </div>

              <div className="menu-block-wrapper">
                <div className="menu-overlay" />
                <nav className="menu-block" id="append-menu-header">
                  <div className="mobile-menu-head">
                    <div className="go-back">
                      <i className="fa fa-angle-left" />
                    </div>
                    <div className="current-menu-title" />
                    <div className="mobile-menu-close">×</div>
                  </div>
                  <ul className="site-menu-main">
                    {/* Home */}
                    <li className="nav-item nav-item-has-children">
                      <Link to="/" className="nav-link-item drop-trigger">
                        Home
                      </Link>
                    </li>

                    {/* About Us */}
                    <li className="nav-item">
                      <Link to="/about" className="nav-link-item">
                        About Us
                      </Link>
                    </li>

                    {/* Services */}
                    <li className="nav-item">
                      <Link to="/services" className="nav-link-item">
                        Services
                      </Link>
                    </li>

                    {/* Course */}
                    <li className="nav-item">
                      <Link to="/course" className="nav-link-item">
                        Course
                      </Link>
                    </li>

                    {/* Contact Us */}
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link-item">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Mobile Menu Trigger */}
              <div className="mobile-menu-trigger">
                <span />
              </div>
            </nav>
          </div>
        </div>
      </header>
      <SideMenu />
      {location.pathname === "/" && <HeroSlider />}
    </>
  );
}

export default Header;
