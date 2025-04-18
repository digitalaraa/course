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

//     // For email templates:
//     const getLogoUrl = () => {
//         if (process.env.NODE_ENV === 'development') {
//         return `${window.location.origin}/logo.png`;
//         }
//         // In production, use your hosted URL:
//         return 'https://digitalaraa.com/logo.png'; // CHANGE THIS
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const currentYear = new Date().getFullYear();
        
//         // EmailJS configuration
//         const serviceID = 'service_i364uht';
//         const templateID = 'template_m8x0yf7'; // Admin template
//         const userTemplateID = 'template_b8x3h89'; // User confirmation template
//         const userID = 'iz1N0uoVjI_Z8UCdb';

//         // Use absolute URLs for all images in emails
//         //const logoUrl = 'https://digitalaraa.com/wp-content/uploads/2023/05/digitalaraa-logo.png'; // REPLACE with your actual hosted logo URL
//         //const logoUrl = 'logo.png'; // REPLACE with your actual hosted logo URL

                
//         // Social media icon URLs (using reliable CDN)
//         const socialIcons = {
//             facebook: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
//             twitter: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
//             linkedin: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
//             instagram: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
//         };

//         // Prepare email data
//         const emailData = {
//             // User information
//             name: formData.name,
//             phone: formData.phone,
//             email: formData.email,
//             message: formData.message,
            
//             // Course information
//             courseId: courseData ? formData.courseTitle : '',
//             courseTitle: courseData ? formData.courseTitle : '',
//             enrollmentType: formData.enrollmentType || '',
//             coursePrice: courseData ? courseDetails[courseData.title]?.price : '',
            
//             // Brand information
//             logoUrl: getLogoUrl(),
//             currentYear: currentYear,
//             inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
            
//             // Contact information
//             contactEmail: 'digitalaraa@gmail.com',
//             contactPhone: '+91 86678 53720',
//             websiteUrl: 'https://digitalaraa.com/',
            
//             // Social media
//             facebookUrl: 'https://www.facebook.com/digitalaraa',
//             twitterUrl: 'https://twitter.com/digitalaraa',
//             linkedinUrl: 'https://www.linkedin.com/company/digitalaraa',
//             instagramUrl: 'https://www.instagram.com/digitalaraa29',
            
//             // Social media icons
//             facebookIcon: socialIcons.facebook,
//             twitterIcon: socialIcons.twitter,
//             linkedinIcon: socialIcons.linkedin,
//             instagramIcon: socialIcons.instagram,
            
//             // Legal links
//             privacyPolicyUrl: 'https://digitalaraa.com/privacypolicy',
//             termsUrl: 'https://digitalaraa.com/termsconditions',
            
//             // System information
//             timestamp: new Date().toLocaleString(),
//             submissionDate: new Date().toLocaleString(),
//             subject: formData.name,
//             ipAddress: '123.456.789.0' // You might want to get this from the request
//         };

//         // Send to admin
//         emailjs.send(serviceID, templateID, emailData, userID)
//             .then(() => {
//                 // Send confirmation to user
//                 return emailjs.send(serviceID, userTemplateID, emailData, userID);
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
//                                 </div>
//                             )}
                            
//                             <div className="tekup-contact-info-wrap wrap2">
//                                 <div className="tekup-contact-info mb-0">
//                                     <i className="ri-map-pin-2-fill" />
//                                     <h5>Address</h5>
//                                     <p>Coimbatore, Tamilnadu,<br />India.</p>
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


// import React, { useEffect, useState } from 'react';
// import emailjs from 'emailjs-com';
// import { useLocation } from 'react-router-dom';
// import 'aos/dist/aos.css';
// import '../assets/images/css/contactCourse.css';

// const ContactSection = () => {
//     const location = useLocation();
//     const courseData = location.state?.courseData;
    
//     const courseDetails = {
//         "Complete UI/UX Design Mastery": { price: "₹12,999" },
//         "React JS from Scratch": { price: "₹12,999" },
//         "Full Stack JavaScript Bootcamp": { price: "₹18,999" },
//         "HTML & CSS Mastery": { price: "₹6,999" },
//         "JavaScript Essentials": { price: "₹9,999" },
//         "PHP & MySQL Development": { price: "₹11,999" },
//         "Python Programming Masterclass": { price: "₹14,999" },
//         "React Native Mobile App Development": { price: "₹15,999" },
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

//     // For email templates:
//     const getLogoUrl = () => {
//         if (process.env.NODE_ENV === 'development') {
//         return `${window.location.origin}/logo.png`;
//         }
//         // In production, use your hosted URL:
//         return 'https://digitalaraa.com/logo.png'; // CHANGE THIS
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const currentYear = new Date().getFullYear();
        
//         // EmailJS configuration
//         const serviceID = 'service_i364uht';
//         const templateID = 'template_m8x0yf7'; // Admin template
//         const userTemplateID = 'template_b8x3h89'; // User confirmation template
//         const userID = 'iz1N0uoVjI_Z8UCdb';

//         // Social media icon URLs (using reliable CDN)
//         const socialIcons = {
//             facebook: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
//             twitter: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
//             linkedin: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
//             instagram: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
//         };

//         // Prepare email data
//         const emailData = {
//             // User information
//             name: formData.name,
//             phone: formData.phone,
//             email: formData.email,
//             message: formData.message,
            
//             // Course information
//             courseId: courseData ? formData.courseTitle : '',
//             courseTitle: courseData ? formData.courseTitle : '',
//             enrollmentType: formData.enrollmentType || '',
//             coursePrice: courseData ? courseDetails[courseData.title]?.price : '',
            
//             // Brand information
//             logoUrl: getLogoUrl(),
//             currentYear: currentYear,
//             inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
            
//             // Contact information
//             contactEmail: 'digitalaraa@gmail.com',
//             contactPhone: '+91 86678 53720',
//             websiteUrl: 'https://digitalaraa.com/',
            
//             // Social media
//             facebookUrl: 'https://www.facebook.com/digitalaraa',
//             twitterUrl: 'https://twitter.com/digitalaraa',
//             linkedinUrl: 'https://www.linkedin.com/company/digitalaraa',
//             instagramUrl: 'https://www.instagram.com/digitalaraa29',
            
//             // Social media icons
//             facebookIcon: socialIcons.facebook,
//             twitterIcon: socialIcons.twitter,
//             linkedinIcon: socialIcons.linkedin,
//             instagramIcon: socialIcons.instagram,
            
//             // Legal links
//             privacyPolicyUrl: 'https://digitalaraa.com/privacypolicy',
//             termsUrl: 'https://digitalaraa.com/termsconditions',
            
//             // System information
//             timestamp: new Date().toLocaleString(),
//             submissionDate: new Date().toLocaleString(),
//             subject: formData.name,
//             ipAddress: '123.456.789.0' // You might want to get this from the request
//         };

//         // Send to admin
//         emailjs.send(serviceID, templateID, emailData, userID)
//             .then(() => {
//                 // Send confirmation to user
//                 return emailjs.send(serviceID, userTemplateID, emailData, userID);
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
//                                 <div className="course-details-box mb-4 p-4 bg-light rounded ">
//                                     <h4 className="mb-3">{courseData.title}</h4>
//                                     <p className="mb-1 hidden"><strong>Price:</strong> {courseDetails[courseData.title]?.price}</p>
//                                     <p className="mb-1 hidden"><strong>Category:</strong> {courseData.category}</p>
//                                     <p className="mb-1 hidden"><strong>Rating:</strong> {courseData.rating}/5</p>
//                                 </div>
//                             )}
                            
//                             <div className="tekup-contact-info-wrap wrap2">
//                                 <div className="tekup-contact-info mb-0">
//                                     <i className="ri-map-pin-2-fill" />
//                                     <h5>Address</h5>
//                                     <p>Coimbatore, Tamilnadu,<br />India.</p>
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
//                                                         <option value="Complete UI/UX Design Mastery">Complete UI/UX Design Mastery</option>
//                                                         <option value="React JS from Scratch">React JS from Scratch</option>
//                                                         <option value="Full Stack JavaScript Bootcamp">Full Stack JavaScript Bootcamp</option>
//                                                         <option value="HTML & CSS Mastery">HTML & CSS Mastery</option>
//                                                         <option value="JavaScript Essentials">JavaScript Essentials</option>
//                                                         <option value="PHP & MySQL Development">PHP & MySQL Development</option>
//                                                         <option value="Python Programming Masterclass">Python Programming Masterclass</option>
//                                                         <option value="React Native Mobile App Development">React Native Mobile App Development</option>
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

const ContactSection = () => {
    const location = useLocation();
    const courseData = location.state?.courseData;
    
    const courseDetails = {
        "Complete UI/UX Design Mastery": { price: "₹12,999" },
        "React JS from Scratch": { price: "₹12,999" },
        "Full Stack JavaScript Bootcamp": { price: "₹18,999" },
        "HTML & CSS Mastery": { price: "₹6,999" },
        "JavaScript Essentials": { price: "₹9,999" },
        "PHP & MySQL Development": { price: "₹11,999" },
        "Python Programming Masterclass": { price: "₹14,999" },
        "React Native Mobile App Development": { price: "₹15,999" },
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

    const getLogoUrl = () => {
        return process.env.NODE_ENV === 'development' 
            ? `${window.location.origin}/logo.png`
            : 'https://digitalaraa.com/logo.png';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(false);
        setSuccess(false);

        try {
            const emailData = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
                courseTitle: formData.courseTitle,
                enrollmentType: formData.enrollmentType,
                coursePrice: formData.coursePrice,
                logoUrl: getLogoUrl(),
                currentYear: new Date().getFullYear(),
                inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
                contactEmail: 'digitalaraa@gmail.com',
                contactPhone: '+91 86678 53720',
                websiteUrl: 'https://digitalaraa.com/',
                timestamp: new Date().toLocaleString()
            };

            // Send to admin
            await emailjs.send(
                'service_i364uht',
                'template_m8x0yf7', // Admin template
                emailData,
                'iz1N0uoVjI_Z8UCdb'
            );

            // Send customized confirmation to user
            await emailjs.send(
                'service_i364uht',
                'template_b8x3h89', // User confirmation template
                {
                    ...emailData,
                    subject: `Thank you for contacting DigitalAraa!`,
                    message: `We've received your ${courseData ? 'course enrollment' : 'message'} and will contact you shortly.`
                },
                'iz1N0uoVjI_Z8UCdb'
            );

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
        } catch (err) {
            console.error('Email error:', err);
            setError(true);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSuccess(false);
                setError(false);
            }, 5000);
        }
    };

    return (
        <div className="section tekup-section-padding">
            <div className="container">
                <div className="row">
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
                                    <h4 className="mb-3">{courseData.title}</h4>
                                    <p className="mb-1 hidden"><strong>Price:</strong> {courseDetails[courseData.title]?.price}</p>
                                    <p className="mb-1 hidden"><strong>Category:</strong> {courseData.category}</p>
                                    <p className="mb-1 hidden"><strong>Rating:</strong> {courseData.rating}/5</p>
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
                                    Thank you for contacting us! We'll get back to you shortly.
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
                                                        <option value="Complete UI/UX Design Mastery">Complete UI/UX Design Mastery</option>
                                                        <option value="React JS from Scratch">React JS from Scratch</option>
                                                        <option value="Full Stack JavaScript Bootcamp">Full Stack JavaScript Bootcamp</option>
                                                        <option value="HTML & CSS Mastery">HTML & CSS Mastery</option>
                                                        <option value="JavaScript Essentials">JavaScript Essentials</option>
                                                        <option value="PHP & MySQL Development">PHP & MySQL Development</option>
                                                        <option value="Python Programming Masterclass">Python Programming Masterclass</option>
                                                        <option value="React Native Mobile App Development">React Native Mobile App Development</option>
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