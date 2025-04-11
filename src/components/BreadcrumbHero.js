// components/BreadcrumbHero.js
import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useLocation } from 'react-router-dom'; // Changed from next/router

const BreadcrumbHero = ({ title, bgImage = "/assets/images/hero/banner-3.jpg" }) => {
  const heroRef = useRef();
  const location = useLocation(); // Changed from useRouter()

  // Auto-scroll to hero on route change
  useEffect(() => {
    if (heroRef.current) {
      window.scrollTo(0, 0); // Instant scroll to top
      heroRef.current.focus({ preventScroll: true }); // For accessibility
    }
  }, [location.pathname]); // Changed from router.asPath

  return (
    <div
      ref={heroRef}
      className="tekup-breadcrumb"
      style={{ backgroundImage: `url('${bgImage}')` }}
      tabIndex={-1} // Makes it focusable but not in tab order
    >
      <div className="container">
        <h1 className="post__title">{title}</h1>
        <nav className="breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li> {/* Changed from <a> to <Link> */}
            <li aria-current="page">{title}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BreadcrumbHero;