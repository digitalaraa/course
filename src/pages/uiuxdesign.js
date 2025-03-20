import React from 'react';

import ServiceSidebar from "../components/ServiceSidebar";
import ContactSection from "../components/ContactSection";

const UIUXDesign = () => {
  
    return (
      <>
         <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/uiuxdesign.jpg)' }}>
          <div className="container">
            <h1 className="post__title">UI/UX Design</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page"> UI/UX Design</li>
              </ul>
            </nav>
          </div>
        </div>
          {/* End breadcrumb */}
          <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                  <img src="/assets/images/hero/uiuxcontent-banner.jpg" alt="UI/UX Design" />
                  <div className="tekup-service-details-item">
                    <h3>Overview</h3>
                    <p>UI/UX design plays a crucial role in ensuring that a website or application not only looks great but also provides an intuitive, user-friendly experience. By focusing on how users interact with the platform, we enhance engagement and satisfaction.</p>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Features</h3>
                    <ul>
                      <li><i className="ri-check-line"></i> User-Centered Design</li>
                      <li><i className="ri-check-line"></i> Intuitive Navigation</li>
                      <li><i className="ri-check-line"></i> Consistent Visual Hierarchy</li>
                      <li><i className="ri-check-line"></i> Mobile Responsiveness</li>
                      <li><i className="ri-check-line"></i> A/B Testing for Usability</li>
                    </ul>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Goal</h3>
                    <p>The ultimate goal of our UI/UX design services is to create digital experiences that are seamless, engaging, and aligned with the user’s needs, thereby improving overall satisfaction and business success.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
              <ServiceSidebar />
              </div>
            </div>
          </div>
        </div>

        <ContactSection />

        <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
          <div className="container">
            <div className="tekup-cta-wrap">
              <div className="tekup-cta-content center">
                <h2>Let’s collaborate on your next project</h2>
                <p>We combine creativity and technology to deliver solutions that help businesses grow.</p>
                <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                  <a className="tekup-default-btn tekup-white-btn" href="/contact/">Start a Project <i className="ri-arrow-right-up-line"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default UIUXDesign;