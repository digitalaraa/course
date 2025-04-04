import React from 'react';

const SolutionsSection = () => {
  return (
    <>
      <div
        className="tekup-breadcrumb"
        style={{ backgroundImage: "url('/assets/images/hero/banner-3.jpg')" }}
      >
        <div className="container">
          <h1 className="post__title">Our Services</h1>
          <nav className="breadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>
              <li aria-current="page"> Our Services</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End breadcrumb */}

      <div className="section tekup-section-padding4">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="400">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/assets/images/iconbox/icon8.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Expert Team Members</h4>
                  <p>We are architects of innovation, leaders in technological advancement, and partners in success.</p>
                  <a className="tekup-iconbox-btn" href="/">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="600">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/assets/images/iconbox/icon9.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Fastest Customer Service</h4>
                  <p>We provide rapid customer support, ensuring your needs are met swiftly and effectively.</p>
                  <a className="tekup-iconbox-btn" href="/">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="800">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/assets/images/iconbox/icon10.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Competitive Pricing Plan</h4>
                  <p>Our pricing plans deliver exceptional value, making quality services affordable for everyone.</p>
                  <a className="tekup-iconbox-btn" href="/">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End section */}
    </>
  );
};

export default SolutionsSection;