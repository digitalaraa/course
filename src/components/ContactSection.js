// import React, { useEffect, useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: '',
//   });
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     // Initialize AOS for animations
//     import('aos').then(AOS => {
//       AOS.init({ duration: 600 });
//     });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceID = 'service_i364uht';
//     const templateIDToAdmin = 'template_m8x0yf7';
//     const userID = 'iz1N0uoVjI_Z8UCdb';

//     // Email to Admin only
//     emailjs.send(serviceID, templateIDToAdmin, formData, userID)
//       .then((response) => {
//         console.log('Admin Email Sent!', response.status, response.text);
//         setSuccess(true);
//         setFormData({ name: '', phone: '', email: '', message: '' });

//         // Scroll to the success message
//         const successDiv = document.getElementById('success-message');
//         successDiv && successDiv.scrollIntoView({ behavior: 'smooth' });

//         // Set timeout to hide success message after 5 seconds
//         setTimeout(() => {
//           setSuccess(false);
//         }, 5000);
//       })
//       .catch((err) => {
//         console.error('Failed to send admin email...', err);
//         setError(true);

//         // Set timeout to hide error message after 5 seconds
//         setTimeout(() => {
//           setError(false);
//         }, 5000);
//       });
//   };

//   return (
//     <div className="section tekup-section-padding">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-5 col-lg-6 d-flex align-items-center">
//             <div className="tekup-default-content">
//               <h2>Let’s Build an Awesome Project Together</h2>
//               <p>
//                 At our IT solutions company, we prioritize outstanding customer service. If you have technical difficulties or need assistance, we're here to help!
//               </p>
//               <div className="tekup-contact-info-wrap wrap2">
//                 <div className="tekup-contact-info mb-0">
//                   <i className="ri-map-pin-2-fill" />
//                   <h5>Address</h5>
//                   <p>
//                     Coimbatore,
//                     <br />
//                     Tamilnadu, India.
//                   </p>
//                 </div>
//                 <div className="tekup-contact-info mb-0">
//                   <i className="ri-mail-fill" />
//                   <h5>Contact</h5>
//                   <a href="mailto:digitalaraa@gmail.com">digitalaraa@gmail.com</a>
//                   <a href="tel:+918667853720" aria-label="Call us at +91 86678 53720">
//                     +91 86678 53720
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-6 offset-xl-1 col-lg-6">
//             <div className="tekup-main-form">
//               <h3>Fill The Contact Form</h3>
//               <p>We encourage you to contact us; your inquiries are important to us.</p>
//               {success && (
//                 <div
//                   id="success-message"
//                   className="success-message"
//                   data-aos="fade-in"
//                 >
//                   Your message has been sent successfully! We'll be in touch soon.
//                 </div>
//               )}
//               {error && (
//                 <div
//                   id="error-message"
//                   className="error-message"
//                   data-aos="fade-in"
//                 >
//                   There was an error sending your message. Please try again.
//                 </div>
//               )}
//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <div className="tekup-main-field">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="tekup-main-field">
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Phone number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="tekup-main-field">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email address"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="tekup-main-field">
//                       <textarea
//                         name="message"
//                         placeholder="Write your message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <button id="tekup-main-form-btn" type="submit">
//                       Send Message <i className="ri-arrow-right-up-line" />
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;
/*
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';

const ContactSection = () => {
    const location = useLocation();
    const courseData = location.state?.courseData;
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        enrollmentType: '',
        courseId: courseData?.id || '',
        courseTitle: courseData?.title || '',
        coursePrice: courseData?.price || ''
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({ duration: 600 });
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_i364uht';
        const templateIDToAdmin = 'template_m8x0yf7';
        const userID = 'iz1N0uoVjI_Z8UCdb';

        // Prepare data with inquiry type
        const emailData = {
            ...formData,
            inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
            timestamp: new Date().toLocaleString()
        };

        emailjs.send(serviceID, templateIDToAdmin, emailData, userID)
            .then((response) => {
                console.log('Email Sent!', response.status, response.text);
                setSuccess(true);
                setFormData({ 
                    name: '', 
                    phone: '', 
                    email: '', 
                    message: '',
                    enrollmentType: '',
                    courseId: courseData?.id || '',
                    courseTitle: courseData?.title || '',
                    coursePrice: courseData?.price || ''
                });

                const successDiv = document.getElementById('success-message');
                successDiv?.scrollIntoView({ behavior: 'smooth' });

                setTimeout(() => setSuccess(false), 5000);
            })
            .catch((err) => {
                console.error('Failed to send email...', err);
                setError(true);
                setTimeout(() => setError(false), 5000);
            });
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
                            <div className="tekup-contact-info-wrap wrap2">
                                <div className="tekup-contact-info mb-0">
                                    <i className="ri-map-pin-2-fill" />
                                    <h5>Address</h5>
                                    <p>
                                        Coimbatore,
                                        <br />
                                        Tamilnadu, India.
                                    </p>
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
                                <div id="success-message" className="success-message" data-aos="fade-in">
                                    {courseData 
                                        ? "Your enrollment request has been submitted successfully!" 
                                        : "Your message has been sent successfully!"}
                                </div>
                            )}
                            
                            {error && (
                                <div id="error-message" className="error-message" data-aos="fade-in">
                                    There was an error sending your message. Please try again.
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tekup-main-field">
                                            <input
                                                type="text"
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
                                            <input
                                                type="tel"
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
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    {courseData && (
                                        <>
                                            <div className="col-lg-12">
                                                <div className="tekup-main-field">
                                                    <select
                                                        name="enrollmentType"
                                                        value={formData.enrollmentType}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Enrollment Option</option>
                                                        <option value="Full Course">Full Course ({courseData.price})</option>
                                                        <option value="Installment Plan">Installment Plan</option>
                                                        <option value="Scholarship Inquiry">Scholarship Inquiry</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <input type="hidden" name="courseId" value={formData.courseId} />
                                            <input type="hidden" name="courseTitle" value={formData.courseTitle} />
                                            <input type="hidden" name="coursePrice" value={formData.coursePrice} />
                                        </>
                                    )}
                                    
                                    <div className="col-lg-12">
                                        <div className="tekup-main-field">
                                            <textarea
                                                name="message"
                                                placeholder={courseData ? "Any questions or special requests?" : "Write your message"}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button id="tekup-main-form-btn" type="submit">
                                            {courseData ? "Submit Enrollment" : "Send Message"} 
                                            <i className="ri-arrow-right-up-line" />
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
*/


import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';

const ContactSection = () => {
    const location = useLocation();
    const courseData = location.state?.courseData;
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        enrollmentType: '',
        courseId: courseData?.id || '',
        courseTitle: courseData?.title || '',
        coursePrice: courseData?.price || ''
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
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS configuration
        const serviceID = 'service_i364uht';
        const templateIDToAdmin = 'template_m8x0yf7';
        const userTemplateID = 'template_b8x3h89'; // Your auto-reply template
        const userID = 'iz1N0uoVjI_Z8UCdb';

        // Data for admin notification
        const adminEmailData = {
            ...formData,
            inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
            timestamp: new Date().toLocaleString()
        };

        // Data for user auto-reply
        const userEmailData = {
            name: formData.name,
            email: formData.email,
            inquiryType: courseData ? 'Course Enrollment' : 'General Inquiry',
            courseTitle: formData.courseTitle || 'N/A',
            enrollmentType: formData.enrollmentType || 'N/A',
            contactEmail: 'digitalaraa@gmail.com',
            contactPhone: '+91 86678 53720',
            companyName: 'Your Company Name'
        };

        // First send to admin
        emailjs.send(serviceID, templateIDToAdmin, adminEmailData, userID)
            .then((response) => {
                console.log('Admin notification sent:', response.status, response.text);
                
                // Then send auto-reply to user
                return emailjs.send(serviceID, userTemplateID, userEmailData, userID);
            })
            .then((userResponse) => {
                console.log('User auto-reply sent:', userResponse.status, userResponse.text);
                setSuccess(true);
                resetForm();
            })
            .catch((err) => {
                console.error('Email sending error:', err);
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

    const resetForm = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
            enrollmentType: '',
            courseId: courseData?.id || '',
            courseTitle: courseData?.title || '',
            coursePrice: courseData?.price || ''
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
                            <div className="tekup-contact-info-wrap wrap2">
                                <div className="tekup-contact-info mb-0">
                                    <i className="ri-map-pin-2-fill" />
                                    <h5>Address</h5>
                                    <p>Coimbatore, Tamilnadu, India.</p>
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
                            
                            {/* Status Messages */}
                            {success && (
                                <div id="success-message" className="success-message" data-aos="fade-in">
                                    {courseData 
                                        ? "Your enrollment request has been submitted! We'll contact you shortly." 
                                        : "Your message has been sent successfully!"}
                                </div>
                            )}
                            
                            {error && (
                                <div id="error-message" className="error-message" data-aos="fade-in">
                                    There was an error sending your message. Please try again.
                                </div>
                            )}
                            
                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tekup-main-field">
                                            <input
                                                type="text"
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
                                            <input
                                                type="tel"
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
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Course-specific fields */}
                                    {courseData && (
                                        <>
                                            <div className="col-lg-12">
                                                <div className="tekup-main-field">
                                                    <select
                                                        name="enrollmentType"
                                                        value={formData.enrollmentType}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Enrollment Option</option>
                                                        <option value="Full Course">Full Course ({courseData.price})</option>
                                                        <option value="Installment Plan">Installment Plan</option>
                                                        <option value="Scholarship Inquiry">Scholarship Inquiry</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <input type="hidden" name="courseId" value={formData.courseId} />
                                            <input type="hidden" name="courseTitle" value={formData.courseTitle} />
                                            <input type="hidden" name="coursePrice" value={formData.coursePrice} />
                                        </>
                                    )}
                                    
                                    <div className="col-lg-12">
                                        <div className="tekup-main-field">
                                            <textarea
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
                                            id="tekup-main-form-btn" 
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : courseData ? 'Submit Enrollment' : 'Send Message'}
                                            <i className="ri-arrow-right-up-line" />
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