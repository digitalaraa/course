import React from "react";
import ServiceSidebar from "../components/ServiceSidebar";
import ContactSection from "../components/ContactSection";

function DigitalMarketing () {
    return (
        <>
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/banner.jpg)' }}>
          <div className="container">
            <h1 className="post__title">Digital Marketing</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page">Digital Marketing</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                  <img src="/assets/images/hero/4.jpg" alt="Digital Marketing" />
                  <div className="tekup-service-details-item">
                    <h3>Overview</h3>
                    <p>Our Digital Marketing services help businesses connect with their target audience online. We specialize in SEO, social media marketing, content creation, and paid campaigns that drive traffic and improve brand awareness.</p>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Features</h3>
                    <ul>
                      <li><i className="ri-check-line"></i> SEO and SEM strategies</li>
                      <li><i className="ri-check-line"></i> Social media marketing</li>
                      <li><i className="ri-check-line"></i> Pay-per-click advertising</li>
                      <li><i className="ri-check-line"></i> Content creation and optimization</li>
                      <li><i className="ri-check-line"></i> Analytics and reporting</li>
                    </ul>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Goal</h3>
                    <p>Our goal is to provide businesses with the tools and strategies they need to reach and engage their customers through digital channels, ultimately driving growth and improving ROI.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                  <ServiceSidebar />
              </div>
            </div>
          </div>
        </div>

        <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
          <div className="container">
            <div className="tekup-cta-wrap">
              <div className="tekup-cta-content center">
                <h2>Let’s work together</h2>
                <p>We are architects of innovation, trailblazers of advancement, and partners in your success. As a dynamic and forward-thinking team, we’re ready to take your digital marketing strategy to the next level.</p>
                <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                  <a className="tekup-default-btn tekup-white-btn" href="/contact">Start a Project <i className="ri-arrow-right-up-line"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactSection />
        </>
    )
}

export default DigitalMarketing;