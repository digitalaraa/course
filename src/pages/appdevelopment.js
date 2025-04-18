import React from "react";
import ServiceSidebar from "../components/ServiceSidebar";
import ContactSection from "../components/ContactSection";

function AppDevelopment () {
    return (
        <>
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/appdevelopment-banner.jpg)' }}>
          <div className="container">
            <h1 className="post__title">App Development</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page">App Development</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                  <img src="/assets/images/hero/appdevelopment-banner.jpg" alt="App Development" />
                  <div className="tekup-service-details-item">
                    <h3>Overview</h3>
                    <p>Our App Development services help businesses reach their target audiences through robust and scalable mobile applications. We focus on creating seamless experiences on iOS and Android platforms that drive engagement and improve customer satisfaction.</p>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Features</h3>
                    <ul>
                      <li><i className="ri-check-line"></i> Cross-platform development</li>
                      <li><i className="ri-check-line"></i> User-friendly interfaces</li>
                      <li><i className="ri-check-line"></i> High performance and scalability</li>
                      <li><i className="ri-check-line"></i> Robust security features</li>
                    </ul>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Goal</h3>
                    <p>We aim to deliver high-quality mobile applications that enable our clients to stay ahead of the competition while providing their users with excellent mobile experiences.</p>
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
                <p>We are architects of innovation, trailblazers of advancement, and partners in your success. As a dynamic and forward-thinking team, we’re ready to take your app development to the next level.</p>
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

export default AppDevelopment;