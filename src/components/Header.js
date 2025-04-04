// import React from "react";
// import { Link, useLocation } from "react-router-dom"; // Import useLocation
// import ProgressBar from "./ProgressBar";
// import SideMenu from "./SideMenu";
// import HeroSlider from "./HeroSlider";
// import HeaderTop from "./HeaderTop";

// import digitalaraaLogo from '../assets/images/logo/digitalaraa-logo.png'; // Ensure to include the file extension

// function Header() {
  
//   const location = useLocation(); // Get the current route

//   return (
//     <>
//       <ProgressBar />
//       <header
//         className="site-header tekup-header-section site-header--menu-right dark-color"
//         id="sticky-menu"
//       >
//         <HeaderTop />

//         <div className="container-fluid  bg-light">
//           <div className="tekup-header-bottom border_bottom-old">
            
//             <nav className="navbar site-navbar">
//               {/* Brand Logo */}
//               <div className="brand-logo">
//                 <Link to="/">
//                   <img
//                     src={digitalaraaLogo}
//                     alt="Logo"
//                     className="light-version-logo"
//                   />
//                 </Link>
//               </div>
              

//               <div className="menu-block-wrapper">
//                 <div className="menu-overlay" />
//                 <nav className="menu-block" id="append-menu-header">
//                   <div className="mobile-menu-head">
//                     <div className="go-back">
//                       <i className="fa fa-angle-left" />
//                     </div>
//                     <div className="current-menu-title" />
//                     <div className="mobile-menu-close">×</div>
//                   </div>
//                   <ul className="site-menu-main">
//                     {/* Home */}
//                     <li className="nav-item nav-item-has-children">
//                       <Link to="/" className="nav-link-item drop-trigger">
//                         Home
//                       </Link>
//                     </li>

//                     {/* About Us */}
//                     <li className="nav-item">
//                       <Link to="/about" className="nav-link-item">
//                         About Us
//                       </Link>
//                     </li>

//                     {/* Services */}
//                     <li className="nav-item">
//                       <Link to="/services" className="nav-link-item">
//                         Services
//                       </Link>
//                     </li>

//                     {/* Course */}
//                     <li className="nav-item">
//                       <Link to="/course" className="nav-link-item">
//                         Course
//                       </Link>
//                     </li>

//                     {/* Contact Us */}
//                     <li className="nav-item">
//                       <Link to="/contact" className="nav-link-item">
//                         Contact Us
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//                 {/* Show EnrollButton only on the /course page */}
              
//               </div>

//               {/* Mobile Menu Trigger */}
//               <div className="mobile-menu-trigger">
//                 <span />
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//       <SideMenu />
//       {location.pathname === "/" && <HeroSlider />}
//     </>
//   );
// }

// export default Header;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import SideMenu from "./SideMenu";
import HeroSlider from "./HeroSlider";
import HeaderTop from "./HeaderTop";

import digitalaraaLogo from '../assets/images/logo/digitalaraa-logo.png';

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('mobile-menu-visible');
  };

  return (
    <>
      <ProgressBar />
      <header
        className="site-header tekup-header-section site-header--menu-right dark-color"
        id="sticky-menu"
      >
        <HeaderTop />

        <div className="container-fluid bg-light">
          <div className="tekup-header-bottom border_bottom-old">
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
                <div className="menu-overlay" onClick={toggleMobileMenu} />
                <nav className={`menu-block ${mobileMenuOpen ? 'active' : ''}`} id="append-menu-header">
                  <div className="mobile-menu-head">
                    <div className="go-back">
                      <i className="fa fa-angle-left" />
                    </div>
                    <div className="current-menu-title" />
                    <div className="mobile-menu-close" onClick={toggleMobileMenu}>×</div>
                  </div>
                  <ul className="site-menu-main">
                    <li className="nav-item nav-item-has-children">
                      <Link to="/" className="nav-link-item drop-trigger" onClick={toggleMobileMenu}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link-item" onClick={toggleMobileMenu}>
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services" className="nav-link-item" onClick={toggleMobileMenu}>
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/course" className="nav-link-item" onClick={toggleMobileMenu}>
                        Course
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link-item" onClick={toggleMobileMenu}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Mobile Menu Trigger - Now with click handler */}
              <div className="mobile-menu-trigger" onClick={toggleMobileMenu}>
                <span />
                <span />
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