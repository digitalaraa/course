import React from "react";
import { Link } from "react-router";
import BusinessSuccessWithSkillBars from "../components/BusinessSuccessWithSkillBars";
import ContactSection from "../components/ContactSection";
import CallToAction from "../components/CallToAction";

function About () {
    return (
        <>
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}>
          <div className="container">
            <h1 className="post__title">About Us</h1>
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li aria-current="page">About Us</li>
              </ul>
            </nav>
          </div>
        </div>

        {/* About Us Section */}
        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6" data-aos="fade-up" data-aos-duration="600">
                <div className="tekup-thumb">
                  <img 
                    src="/assets/images/hero/about-content-2.jpg" 
                    alt="About Us Image" 
                    loading="lazy" // Lazy load the image
                  />
                  <div className="tekup-thumb-card">
                    <img 
                      src="/assets/images/v3/Satisfaction.png" 
                      alt="Satisfaction" 
                      loading="lazy" // Lazy load the image
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
                <div className="tekup-default-content">
                  <h2>Innovative IT Solutions for Your Business</h2>
                  <p>We design powerful digital experiences that drive success. Our mission is to provide modern web solutions that enhance your brand and connect you with your audience.</p>
                  <div className="tekup-icon-list">
                    <ul>
                      <li><i className="ri-check-line"></i>Responsive Web Design for All Devices</li>
                      <li><i className="ri-check-line"></i>Social Media Marketing to Connect with Customers</li>
                      <li><i className="ri-check-line"></i>SEO-Optimized Websites to Boost Visibility</li>
                      <li><i className="ri-check-line"></i>E-commerce Solutions to Grow Sales</li>
                      <li><i className="ri-check-line"></i>Targeted Digital Marketing Strategies</li>
                      
                    </ul>
                  </div>
                  <div className="tekup-extra-mt">
                    <Link className="tekup-default-btn" to="/about">
                      More About <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <BusinessSuccessWithSkillBars />
        <ContactSection />
        <CallToAction />
        </>
    )
}

export default About;