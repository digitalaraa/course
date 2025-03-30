// import React, { useEffect, useState } from 'react';
// import emailjs from 'emailjs-com';
// import { useLocation } from 'react-router-dom';
// import 'aos/dist/aos.css';
// import '../assets/images/css/contactCourse.css';

// const ContactSection = () => {
//     const location = useLocation();
//     const courseData = location.state?.courseData;
    
//     const courseDetails = {
//         "UI/UX Design for Beginners": { price: "₹8,999" },
//         "React JS from Scratch": { price: "₹12,999" },
//         "Full Stack JavaScript Bootcamp": { price: "₹18,999" },
//         "Advanced UI/UX Research": { price: "₹10,999" },
//         "HTML & CSS Mastery": { price: "₹6,999" },
//         "JavaScript Essentials": { price: "₹9,999" },
//         "MongoDB for Beginners": { price: "₹7,999" },
//         "SEO & Digital Marketing": { price: "₹9,499" }
//     };

//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         message: '',
//         enrollmentType: '',
//         courseId: courseData?.title || '',
//         courseTitle: courseData?.title || '',
//         coursePrice: courseData ? courseDetails[courseData.title]?.price : ''
//     });

//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     useEffect(() => {
//         import('aos').then(AOS => {
//             AOS.init({ duration: 600 });
//         });
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const currentYear = new Date().getFullYear();
        
//         // EmailJS configuration
//         const serviceID = 'service_i364uht';
//         const templateID = 'template_m8x0yf7'; // Your main template
//         const userTemplateID = 'template_b8x3h89'; // User confirmation template
//         const userID = 'iz1N0uoVjI_Z8UCdb';

//         // Prepare email data
//         const emailData = {
//             name: formData.name,
//             phone: formData.phone,
//             email: formData.email,
//             message: formData.message,
//             currentYear: currentYear,  // Add this line
//             logoUrl: '../assets/images/logo/digitalaraa-logo.png',
//             inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
//             timestamp: new Date().toLocaleString(),
//             courseId: courseData ? formData.courseTitle : '',
//             courseTitle: courseData ? formData.courseTitle : '',
//             enrollmentType: formData.enrollmentType || '',
//             coursePrice: courseData ? courseDetails[courseData.title]?.price : ''
//         };

//         // Send to admin
//         emailjs.send(serviceID, templateID, emailData, userID)
//             .then(() => {
//                 // Send confirmation to user
//                 return emailjs.send(serviceID, userTemplateID, {
//                     ...emailData,
//                     contactEmail: 'digitalaraa@gmail.com',
//                     contactPhone: '+91 86678 53720',
//                     privacyPolicyUrl: 'https://digitalaraa.com/privacypolicy',
//                     termsUrl: 'https://digitalaraa.com/termsconditions',
//                     websiteUrl: 'https://digitalaraa.com/',
//                     submissionDate: new Date().toLocaleString(),
//                     subject: formData.name,
//                     facebookUrl: 'https://www.facebook.com/digitalaraa',
//                     twitterUrl: 'https://www.twitter.com/digitalaraa',
//                     linkedinUrl: 'https://www.linkedin.com/digitalaraa',
//                     instagramUrl: 'http://instagram.com/digitalaraa'
//                 }, userID);
//             })
//             .then(() => {
//                 setSuccess(true);
//                 setFormData({
//                     name: '',
//                     phone: '',
//                     email: '',
//                     message: '',
//                     enrollmentType: '',
//                     courseId: '',
//                     courseTitle: '',
//                     coursePrice: ''
//                 });
//             })
//             .catch((err) => {
//                 console.error('Email error:', err);
//                 setError(true);
//             })
//             .finally(() => {
//                 setIsSubmitting(false);
//                 setTimeout(() => {
//                     setSuccess(false);
//                     setError(false);
//                 }, 5000);
//             });
//     };

//     return (
//         <div className="section tekup-section-padding">
//             <div className="container">
//                 <div className="row">
//                     {/* Left Column - Contact Info */}
//                     <div className="col-xl-5 col-lg-6 d-flex align-items-center">
//                         <div className="tekup-default-content">
//                             <h2>Let's Build an Awesome Project Together</h2>
//                             <p>
//                                 {courseData 
//                                     ? `Interested in ${courseData.title}? Fill out the form to enroll!`
//                                     : "At our IT solutions company, we prioritize outstanding customer service."}
//                             </p>
                            
//                             {courseData && (
//                                 <div className="course-details-box mb-4 p-4 bg-light rounded">
//                                     <h4 className="mb-3">{courseData.title}</h4>
//                                     <p><strong>Price:</strong> {courseDetails[courseData.title]?.price}</p>
//                                 </div>
//                             )}
                            
//                             <div className="tekup-contact-info-wrap wrap2">
//                                 <div className="tekup-contact-info mb-0">
//                                     <i className="ri-map-pin-2-fill" />
//                                     <h5>Address</h5>
//                                     <p>Coimbatore,<br />Tamilnadu,<br />India.</p>
//                                 </div>
//                                 <div className="tekup-contact-info mb-0">
//                                     <i className="ri-mail-fill" />
//                                     <h5>Contact</h5>
//                                     <a href="mailto:digitalaraa@gmail.com">digitalaraa@gmail.com</a>
//                                     <a href="tel:+918667853720">+91 86678 53720</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Form */}
//                     <div className="col-xl-6 offset-xl-1 col-lg-6">
//                         <div className="tekup-main-form">
//                             <h3>{courseData ? 'Enrollment Form' : 'Contact Us'}</h3>
//                             <p>
//                                 {courseData
//                                     ? "Please provide your details to complete enrollment"
//                                     : "We encourage you to contact us; your inquiries are important to us."}
//                             </p>
                            
//                             {success && (
//                                 <div className="alert alert-success" data-aos="fade-in">
//                                     {courseData 
//                                         ? "Enrollment submitted successfully! We'll contact you shortly." 
//                                         : "Message sent successfully!"}
//                                 </div>
//                             )}
                            
//                             {error && (
//                                 <div className="alert alert-danger" data-aos="fade-in">
//                                     Error sending message. Please try again.
//                                 </div>
//                             )}
                            
//                             <form onSubmit={handleSubmit}>
//                                 <div className="row">
//                                     <div className="col-lg-6">
//                                         <div className="tekup-main-field">
//                                             <label htmlFor="name">Full Name</label>
//                                             <input
//                                                 type="text"
//                                                 id="name"
//                                                 name="name"
//                                                 placeholder="Your name"
//                                                 value={formData.name}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="tekup-main-field">
//                                             <label htmlFor="phone">Phone Number</label>
//                                             <input
//                                                 type="tel"
//                                                 id="phone"
//                                                 name="phone"
//                                                 placeholder="Phone number"
//                                                 value={formData.phone}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="tekup-main-field">
//                                             <label htmlFor="email">Email Address</label>
//                                             <input
//                                                 type="email"
//                                                 id="email"
//                                                 name="email"
//                                                 placeholder="Email address"
//                                                 value={formData.email}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>
                                    
//                                     {courseData && (
//                                         <div className="col-lg-12">
//                                             <div className="tekup-main-field">
//                                                 <label htmlFor="enrollmentType">Select Course</label>
//                                                 <div className="tekup-select">
//                                                     <select
//                                                         id="enrollmentType"
//                                                         name="enrollmentType"
//                                                         value={formData.enrollmentType}
//                                                         onChange={handleChange}
//                                                         required
//                                                     >
//                                                         <option value="">-- Select a Course --</option>
//                                                         <option value="UI/UX Design for Beginners">UI/UX Design for Beginners</option>
//                                                         <option value="React JS from Scratch">React JS from Scratch</option>
//                                                         <option value="Full Stack JavaScript Bootcamp">Full Stack JavaScript Bootcamp</option>
//                                                         <option value="Advanced UI/UX Research">Advanced UI/UX Research</option>
//                                                         <option value="HTML & CSS Mastery">HTML & CSS Mastery</option>
//                                                         <option value="JavaScript Essentials">JavaScript Essentials</option>
//                                                         <option value="MongoDB for Beginners">MongoDB for Beginners</option>
//                                                         <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
//                                                     </select>
//                                                     <i className="ri-arrow-down-s-line"></i>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}
                                    
//                                     <div className="col-lg-12">
//                                         <div className="tekup-main-field">
//                                             <label htmlFor="message">
//                                                 {courseData ? "Questions or Special Requests" : "Your Message"}
//                                             </label>
//                                             <textarea
//                                                 id="message"
//                                                 name="message"
//                                                 placeholder={courseData ? "Any questions or special requests?" : "Write your message"}
//                                                 value={formData.message}
//                                                 onChange={handleChange}
//                                                 required
//                                                 rows="5"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <button 
//                                             className="tekup-default-btn" 
//                                             type="submit"
//                                             disabled={isSubmitting}
//                                         >
//                                             {isSubmitting ? (
//                                                 <span>Sending... <i className="ri-loader-4-line spin-icon" /></span>
//                                             ) : courseData ? (
//                                                 <span>Submit Enrollment <i className="ri-arrow-right-up-line" /></span>
//                                             ) : (
//                                                 <span>Send Message <i className="ri-arrow-right-up-line" /></span>
//                                             )}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactSection;

import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import '../assets/images/css/contactCourse.css';
import logo from '../assets/images/logo/digitalaraa-logo.png'; // Import the logo properly

const ContactSection = () => {
    const location = useLocation();
    const courseData = location.state?.courseData;
    
    const courseDetails = {
        "UI/UX Design for Beginners": { price: "₹8,999" },
        "React JS from Scratch": { price: "₹12,999" },
        "Full Stack JavaScript Bootcamp": { price: "₹18,999" },
        "Advanced UI/UX Research": { price: "₹10,999" },
        "HTML & CSS Mastery": { price: "₹6,999" },
        "JavaScript Essentials": { price: "₹9,999" },
        "MongoDB for Beginners": { price: "₹7,999" },
        "SEO & Digital Marketing": { price: "₹9,499" }
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        enrollmentType: '',
        courseId: courseData?.title || '',
        courseTitle: courseData?.title || '',
        coursePrice: courseData ? courseDetails[courseData.title]?.price : ''
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({ duration: 600 });
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const currentYear = new Date().getFullYear();
        
        // EmailJS configuration
        const serviceID = 'service_i364uht';
        const templateID = 'template_m8x0yf7'; // Admin template
        const userTemplateID = 'template_b8x3h89'; // User confirmation template
        const userID = 'iz1N0uoVjI_Z8UCdb';

        // Prepare email data
        const emailData = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            currentYear: currentYear,
            logoUrl: window.location.origin + logo, // Use absolute path for logo
            inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
            timestamp: new Date().toLocaleString(),
            courseId: courseData ? formData.courseTitle : '',
            courseTitle: courseData ? formData.courseTitle : '',
            enrollmentType: formData.enrollmentType || '',
            coursePrice: courseData ? courseDetails[courseData.title]?.price : '',
            // User template specific data
            contactEmail: 'digitalaraa@gmail.com',
            contactPhone: '+91 86678 53720',
            privacyPolicyUrl: 'https://digitalaraa.com/privacypolicy',
            termsUrl: 'https://digitalaraa.com/termsconditions',
            websiteUrl: 'https://digitalaraa.com/',
            submissionDate: new Date().toLocaleString(),
            subject: formData.name,
            facebookUrl: 'https://www.facebook.com/digitalaraa',
            twitterUrl: 'https://www.twitter.com/digitalaraa',
            linkedinUrl: 'https://www.linkedin.com/digitalaraa',
            instagramUrl: 'http://instagram.com/digitalaraa'
        };

        // Send to admin only
        emailjs.send(serviceID, templateID, emailData, userID)
            .then(() => {
                // Send confirmation to user only if admin email succeeds
                return emailjs.send(serviceID, userTemplateID, emailData, userID);
            })
            .then(() => {
                setSuccess(true);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                    enrollmentType: '',
                    courseId: '',
                    courseTitle: '',
                    coursePrice: ''
                });
            })
            .catch((err) => {
                console.error('Email error:', err);
                setError(true);
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => {
                    setSuccess(false);
                    setError(false);
                }, 5000);
            });
    };

    return (
        <div className="section tekup-section-padding">
            <div className="container">
                <div className="row">
                    {/* Left Column - Contact Info */}
                    <div className="col-xl-5 col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content">
                            <h2>Let's Build an Awesome Project Together</h2>
                            <p>
                                {courseData 
                                    ? `Interested in ${courseData.title}? Fill out the form to enroll!`
                                    : "At our IT solutions company, we prioritize outstanding customer service."}
                            </p>
                            
                            {courseData && (
                                <div className="course-details-box mb-4 p-4 bg-light rounded">
                                    <h4 className="mb-3 text-center">{courseData.title}</h4>
                                </div>
                            )}
                            
                            <div className="tekup-contact-info-wrap wrap2">
                                <div className="tekup-contact-info mb-0">
                                    <i className="ri-map-pin-2-fill" />
                                    <h5>Address</h5>
                                    <p>Coimbatore, Tamilnadu,<br />India.</p>
                                </div>
                                <div className="tekup-contact-info mb-0">
                                    <i className="ri-mail-fill" />
                                    <h5>Contact</h5>
                                    <a href="mailto:digitalaraa@gmail.com">digitalaraa@gmail.com</a>
                                    <a href="tel:+918667853720">+91 86678 53720</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="col-xl-6 offset-xl-1 col-lg-6">
                        <div className="tekup-main-form">
                            <h3>{courseData ? 'Enrollment Form' : 'Contact Us'}</h3>
                            <p>
                                {courseData
                                    ? "Please provide your details to complete enrollment"
                                    : "We encourage you to contact us; your inquiries are important to us."}
                            </p>
                            
                            {success && (
                                <div className="alert alert-success" data-aos="fade-in">
                                    {courseData 
                                        ? "Enrollment submitted successfully! We'll contact you shortly." 
                                        : "Message sent successfully!"}
                                </div>
                            )}
                            
                            {error && (
                                <div className="alert alert-danger" data-aos="fade-in">
                                    Error sending message. Please try again.
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tekup-main-field">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tekup-main-field">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tekup-main-field">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    {courseData && (
                                        <div className="col-lg-12">
                                            <div className="tekup-main-field">
                                                <label htmlFor="enrollmentType">Select Course</label>
                                                <div className="tekup-select">
                                                    <select
                                                        id="enrollmentType"
                                                        name="enrollmentType"
                                                        value={formData.enrollmentType}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">-- Select a Course --</option>
                                                        <option value="UI/UX Design for Beginners">UI/UX Design for Beginners</option>
                                                        <option value="React JS from Scratch">React JS from Scratch</option>
                                                        <option value="Full Stack JavaScript Bootcamp">Full Stack JavaScript Bootcamp</option>
                                                        <option value="Advanced UI/UX Research">Advanced UI/UX Research</option>
                                                        <option value="HTML & CSS Mastery">HTML & CSS Mastery</option>
                                                        <option value="JavaScript Essentials">JavaScript Essentials</option>
                                                        <option value="MongoDB for Beginners">MongoDB for Beginners</option>
                                                        <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                                                    </select>
                                                    <i className="ri-arrow-down-s-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="col-lg-12">
                                        <div className="tekup-main-field">
                                            <label htmlFor="message">
                                                {courseData ? "Questions or Special Requests" : "Your Message"}
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder={courseData ? "Any questions or special requests?" : "Write your message"}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button 
                                            className="tekup-default-btn" 
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span>Sending... <i className="ri-loader-4-line spin-icon" /></span>
                                            ) : courseData ? (
                                                <span>Submit Enrollment <i className="ri-arrow-right-up-line" /></span>
                                            ) : (
                                                <span>Send Message <i className="ri-arrow-right-up-line" /></span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;