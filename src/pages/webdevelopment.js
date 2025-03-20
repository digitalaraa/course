import React from "react";
import ServiceSidebar from "../components/ServiceSidebar";

function WebDevelopment () {
    return (
        <>
        <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/web-development-banner-2.jpg)' }}>
          <div className="container">
            <h1 className="post__title">Web Development</h1>
            <nav className="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li aria-current="page">Web Development</li>
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
                  <img src="/assets/images/hero/web-development-banner-1.jpg" alt="Service Details" />
                  <div className="tekup-service-details-item">
                    <h3>Overview</h3>
                    <p>A content management system helps you create, manage, and publish content on the web. It keeps content organized and accessible for easy repurposing.</p>
                    <p>CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools for more advanced functions.</p>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Features</h3>
                    <p>A content management system (CMS) allows multiple contributors to create, edit, and publish content, typically stored in a database and displayed via templates.</p>
                    <div className="tekup-icon-list">
                      <ul>
                        <li><i className="ri-check-line"></i> Creating and editing content</li>
                        <li><i className="ri-check-line"></i> Workflows, reporting, and content organization</li>
                        <li><i className="ri-check-line"></i> User & role-based administration and security</li>
                        <li><i className="ri-check-line"></i> Flexibility, scalability, and performance</li>
                        <li><i className="ri-check-line"></i> Multilingual content capabilities</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tekup-service-details-item">
                    <h3>Goal</h3>
                    <p>The goal of a content management system is to streamline the process of managing, organizing, and publishing content in an effective and efficient manner.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
              <ServiceSidebar />
              </div>
            </div>
          </div>
        </div>
        {/* End section */}

        <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
          <div className="container">
            <div className="tekup-cta-wrap">
              <div className="tekup-cta-content center">
                <h2>Let’s work together</h2>
                <p>We are architects of innovation, trailblazers of advancement, and partners in your success.</p>
                <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                  <a className="tekup-default-btn tekup-white-btn" href="/contact">Start a Project <i className="ri-arrow-right-up-line"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default WebDevelopment;