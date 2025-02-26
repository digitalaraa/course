import React from "react";
//import bgImage from '../../static/assets/images/hero/7.jpg'; // Import the image
//import authorImage from '../../static/assets/images/v1/author.png'; 

function HeroSlider () {
    return (
        <>
        <div
      className="tekup-hero-section"
      style={{ backgroundImage: "url(../assets/images/hero/hero-bg1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="tekup-hero-content white-color">
              <h1>Optimize your enterprise with our leading guidance</h1>
              <p>
                We are architects of innovation, trailblazers of technological
                advancement, and partners in your success. As a dynamic and
                forward-thinking
              </p>
              <div
                className="tekup-extra-mt"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <a className="tekup-default-btn" href="contact-us.html">
                  Start a Project <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end justify-content-end">
            <div className="tekup-hero-rating">
              <img
                className="tekup-hero-author"
                src="assets/images/v1/author.png"
                alt=""
              />
              <p>Avg rating 4.8 makes us world best agency.</p>
              <ul>
                <li><i className="ri-star-s-fill" /></li>
                <li><i className="ri-star-s-fill" /></li>
                <li><i className="ri-star-s-fill" /></li>
                <li><i className="ri-star-s-fill" /></li>
                <li><i className="ri-star-s-fill" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default HeroSlider;