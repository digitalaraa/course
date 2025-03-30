// import React, { useEffect, useState } from 'react';
// import emailjs from 'emailjs-com';
// import { useLocation } from 'react-router-dom';
// import 'aos/dist/aos.css';
// import '../assets/images/css/contactCourse.css';
// const ContactSection = () => {
//     const location = useLocation();
//     const courseData = location.state?.courseData;
    
//     // Course details data
//     const courseDetails = {
//         "UI/UX Design for Beginners": {
//             description: "Learn the fundamentals of UI/UX design, including user research, wireframing, and prototyping. Perfect for beginners looking to start a career in design.",
//             duration: "6 weeks",
//             price: "₹8,999",
//             includes: ["Figma tutorials", "Portfolio projects", "Certificate"]
//         },
//         "React JS from Scratch": {
//             description: "Master React JS with hands-on projects. Learn components, hooks, state management, and build dynamic web applications.",
//             duration: "8 weeks",
//             price: "₹12,999",
//             includes: ["React Hooks", "Context API", "Real-world projects"]
//         },
//         "Full Stack JavaScript Bootcamp": {
//             description: "Become a full-stack developer by learning JavaScript, Node.js, Express, and MongoDB. Build real-world projects and deploy them.",
//             duration: "12 weeks",
//             price: "₹18,999",
//             includes: ["MERN Stack", "REST APIs", "Authentication"]
//         },
//         "Advanced UI/UX Research": {
//             description: "Dive deep into advanced UI/UX research techniques, usability testing, and design psychology to create user-centered designs.",
//             duration: "6 weeks",
//             price: "₹10,999",
//             includes: ["User testing", "Design systems", "Advanced prototyping"]
//         },
//         "HTML & CSS Mastery": {
//             description: "Learn modern web design with HTML5 and CSS3. Build responsive, accessible, and visually stunning websites.",
//             duration: "5 weeks",
//             price: "₹6,999",
//             includes: ["Flexbox", "CSS Grid", "Animations"]
//         },
//         "JavaScript Essentials": {
//             description: "Master JavaScript fundamentals, including ES6+ features, DOM manipulation, and asynchronous programming.",
//             duration: "7 weeks",
//             price: "₹9,999",
//             includes: ["ES6+ features", "Async programming", "DOM manipulation"]
//         },
//         "MongoDB for Beginners": {
//             description: "Get started with MongoDB, a NoSQL database. Learn CRUD operations, indexing, and data modeling for modern applications.",
//             duration: "4 weeks",
//             price: "₹7,999",
//             includes: ["NoSQL concepts", "CRUD operations", "Data modeling"]
//         },
//         "SEO & Digital Marketing": {
//             description: "Master SEO strategies, content marketing, and social media advertising to drive traffic and grow your online presence.",
//             duration: "5 weeks",
//             price: "₹9,499",
//             includes: ["SEO techniques", "Google Analytics", "Content strategy"]
//         }
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

//         // EmailJS configuration
//         const serviceID = 'service_i364uht';
//         const templateIDToAdmin = 'template_m8x0yf7';
//         const userTemplateID = 'template_b8x3h89';
//         const userID = 'iz1N0uoVjI_Z8UCdb';

//         // Prepare email data
//         const adminEmailData = {
//             ...formData,
//             inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
//             timestamp: new Date().toLocaleString()
//         };

//         const userEmailData = {
//             name: formData.name,
//             email: formData.email,
//             inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
//             courseTitle: formData.courseTitle || 'N/A',
//             enrollmentType: formData.enrollmentType || 'N/A',
//             contactEmail: 'digitalaraa@gmail.com',
//             contactPhone: '+91 86678 53720',
//             companyName: 'DigitalAraa'
//         };

//         // Send emails
//         emailjs.send(serviceID, templateIDToAdmin, adminEmailData, userID)
//             .then(() => emailjs.send(serviceID, userTemplateID, userEmailData, userID))
//             .then(() => {
//                 setSuccess(true);
//                 setFormData({
//                     name: '',
//                     phone: '',
//                     email: '',
//                     message: '',
//                     enrollmentType: '',
//                     courseId: courseData?.title || '',
//                     courseTitle: courseData?.title || '',
//                     coursePrice: courseData ? courseDetails[courseData.title]?.price : ''
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
                            
//                             {/* Course Details Section */}
//                             {courseData && (
//                                 <div className="course-details-box mb-4 p-4 bg-light rounded">
//                                     <h4 className="mb-3">{courseData.title}</h4>
//                                     <p className="mb-3">{courseDetails[courseData.title]?.description}</p>
                                    
//                                     <div className="course-meta mb-3">
//                                         <div className="meta-item">
//                                             <i className="ri-time-line"></i>
//                                             <span>{courseDetails[courseData.title]?.duration}</span>
//                                         </div>
//                                         <div className="meta-item">
//                                             <i className="ri-money-rupee-circle-line"></i>
//                                             <span>{courseDetails[courseData.title]?.price}</span>
//                                         </div>
//                                     </div>
                                    
//                                     <h5 className="mb-2">Course Includes:</h5>
//                                     <ul className="course-includes">
//                                         {courseDetails[courseData.title]?.includes.map((item, index) => (
//                                             <li key={index}>
//                                                 <i className="ri-check-line"></i> {item}
//                                             </li>
//                                         ))}
//                                     </ul>
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

//         // EmailJS configuration
//         const serviceID = 'service_i364uht';
//         const templateID = 'template_m8x0yf7'; // Use your main template ID
//         const userID = 'iz1N0uoVjI_Z8UCdb';

//         // Prepare email data with proper conditional fields
//         const emailData = {
//             name: formData.name,
//             phone: formData.phone,
//             email: formData.email,
//             message: formData.message,
//             inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
//             timestamp: new Date().toLocaleString(),
//             // Always include these fields but empty if no course
//             courseId: courseData ? formData.courseTitle : '',
//             courseTitle: courseData ? formData.courseTitle : '',
//             enrollmentType: formData.enrollmentType || '',
//             coursePrice: courseData ? courseDetails[courseData.title]?.price : ''
//         };

//         emailjs.send(serviceID, templateID, emailData, userID)
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
        const templateID = 'template_m8x0yf7'; // Your main template
        const userTemplateID = 'template_b8x3h89'; // User confirmation template
        const userID = 'iz1N0uoVjI_Z8UCdb';

        // Prepare email data
        const emailData = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            currentYear: currentYear,  // Add this line
            logoUrl: '../assets/images/logo/digitalaraa-logo.png',
            inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
            timestamp: new Date().toLocaleString(),
            courseId: courseData ? formData.courseTitle : '',
            courseTitle: courseData ? formData.courseTitle : '',
            enrollmentType: formData.enrollmentType || '',
            coursePrice: courseData ? courseDetails[courseData.title]?.price : ''
        };

        // Send to admin
        emailjs.send(serviceID, templateID, emailData, userID)
            .then(() => {
                // Send confirmation to user
                return emailjs.send(serviceID, userTemplateID, {
                    ...emailData,
                    contactEmail: 'digitalaraa@gmail.com',
                    contactPhone: '+91 86678 53720'
                }, userID);
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
                                    <h4 className="mb-3">{courseData.title}</h4>
                                    <p><strong>Price:</strong> {courseDetails[courseData.title]?.price}</p>
                                </div>
                            )}
                            
                            <div className="tekup-contact-info-wrap wrap2">
                                <div className="tekup-contact-info mb-0">
                                    <i className="ri-map-pin-2-fill" />
                                    <h5>Address</h5>
                                    <p>Coimbatore,<br />Tamilnadu,<br />India.</p>
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