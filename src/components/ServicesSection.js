import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Updated image paths
import icon3 from '../assets/images/v2/icon3.png';
import icon6 from '../assets/images/v2/icon6.png';
import icon4 from '../assets/images/v2/icon4.png';
import icon7 from '../assets/images/v2/icon7.png';
import icon5 from '../assets/images/v2/icon5.png';
import icon8 from '../assets/images/v2/icon8.png';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build websites that provide seamless experiences and drive business growth.",
    image: icon3,
    link: "/",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "We design effective digital marketing strategies that drive growth and measurable success.",
    image: icon6,
    link: "/",
  },
  {
    id: 3,
    title: "App Development",
    description: "We create app solutions that deliver exceptional performance and user engagement.",
    image: icon4,
    link: "/",
  },
  {
    id: 4,
    title: "IT Management",
    description: "We streamline IT operations to enhance efficiency and support your business goals.",
    image: icon7,
    link: "/",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "We create intuitive designs that enhance user experiences and drive engagement.",
    image: icon5,
    link: "/",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    description: "We develop engaging campaigns that connect your brand with the right audience.",
    image: icon8,
    link: "/",
  },
];

const ServicesSection = () => {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init({ duration: 100 });
    });
  }, []);

  return (
    <div className="section bg-light1 tekup-section-padding2">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>We deal with the aspects of professional IT services</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className={`col-xl-4 col-md-6 ${index < 4 ? "mb-4" : ""}`} key={service.id}>
              <div
                className="tekup-iconbox-wrap3 bg-white"
                data-aos="fade-up"
                data-aos-duration={`${(index + 1) * 200}`}
              >
                <div className="tekup-iconbox-icon3">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="tekup-iconbox-data3">
                  <Link to={service.link} aria-label={`Learn more about ${service.title}`}>
                    <h5>{service.title}</h5>
                  </Link>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center tekup-extra-mt">
          <Link className="tekup-default-btn" to="/services" aria-label="View all services">
            All Services <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
