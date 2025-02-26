import React from 'react';

const PrivacyPolicy = () => {
    return (
        <>
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/privacy-banner-2.jpg)' }}>
          <div className="container">
            <h1 className="post__title">Privacy Policy</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page">Privacy Policy</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="section tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                  <div className="tekup-service-details-item">
                    <h3>Privacy Policy</h3>
                    <p>
                      At Digital Araa, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
                      use, disclose, and safeguard your information when you visit our website. By accessing or using the site, 
                      you agree to the terms of this policy.
                    </p>
                    <p>
                      We may collect personal information such as your name, email address, and contact details to provide you 
                      with better services. Your information is securely stored, and we do not share it with third parties 
                      without your consent.
                    </p>
                    <p>
                      This policy may change from time to time, so please revisit this page periodically to stay informed. 
                      If you have any questions regarding our Privacy Policy, feel free to contact us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
          <div className="container">
            <div className="tekup-cta-wrap">
              <div className="tekup-cta-content center">
                <h2>Let’s work together</h2>
                <p>
                  We are architects of innovation, trailblazers of advancement, and partners in your success. 
                  As a dynamic and forward-thinking company, we offer cutting-edge digital solutions to elevate your business.
                </p>
                <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                  <a className="tekup-default-btn tekup-white-btn" href="/contact">Start a Project <i className="ri-arrow-right-up-line"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;