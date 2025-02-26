import React, { useEffect } from 'react';
import { Link } from "react-router";
import ContactSection from '../components/ContactSection';

function Contact() {

    useEffect(() => {
        import('aos').then(AOS => {
          AOS.init({ duration: 100 });
        });
      }, []);


    return (
    <>
        <div className="search-overlay" />
        {/* Breadcrumb Section */}
        <div
          className="tekup-breadcrumb"
          style={{ backgroundImage: "url(/assets/images/hero/contact-banner.jpg)" }}
        >
          <div className="container">
            <h1 className="post__title">Contact Us</h1>
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li aria-current="page">Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>
        {/* End breadcrumb */}
        
        <ContactSection />
        {/* End section */}

        {/* Google Map */}
        <div id="map" style={{ height: '400px', width: '100%' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314054.2439590543!2d76.92572241929492!3d11.0168448392633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8579bb0f01b43%3A0x1e0c0a6c77557ae5!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1635415068353!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
    </>
    )
}
export default Contact;