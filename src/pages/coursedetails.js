// import React from "react";
// import { useParams } from "react-router-dom";
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";

// // Dummy course data (you should fetch from a database or API)
// const coursesData = {
//     1: { title: "UI/UX Design for Beginners", description: "Learn UI/UX basics.", image: courseBg1, lessons: 35 },
//     2: { title: "React JS from Scratch", description: "Master React fundamentals.", image: courseBg2, lessons: 50 }
// };

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = coursesData[id];

//     if (!course) {
//         return <h1>Course Not Found</h1>;
//     }

//     return (
//         <div className="container" style={{ paddingTop: "100px" }}>
//             <h1>{course.title}</h1>
//             <img src={course.image} alt={course.title} width="100%" />
//             <p>{course.description}</p>
//             <p><strong>Lessons:</strong> {course.lessons}</p>
//         </div>
//     );
// };

// export default CourseDetails;




// import React from "react";
// import placeholderImage from "../assets/images/course-bg-1.webp"; // Make sure this path is correct

// const CourseDetails = () => {
//   return (
//     <div className="nav-tab-wrapper section-padding">
//       <div className="container">
//         <div className="grid grid-cols-12 gap-6">
//           <div className="lg:col-span-8 col-span-12">
//             <div className="single-course-details">
              
//               {/* Course Main Image */}
//               <div className="xl:h-[470px] h-[350px] mb-10">
//                 <img 
//                   src={placeholderImage} 
//                   alt="Course Thumbnail" 
//                   className="rounded-md object-cover w-full h-full block" 
//                 />
//               </div>

//               {/* Course Category */}
//               <div className="mb-6">
//                 <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white">
//                   Data Science
//                 </span>
//               </div>

//               {/* Course Title */}
//               <h2 className="text-3xl font-bold">
//                 UI/UX Design and Graphics Learning Bootcamp 2022
//               </h2>

//               {/* Author Meta */}
//               <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-10 space-y-5 sm:space-y-0">
//                 <div className="flex space-x-4 items-center">
//                   <div className="h-12 w-12 rounded bg-gray-300"></div>
//                   <span className="text-secondary">
//                     Trainer: <a href="#" className="text-black">Md Shamim Hossain</a>
//                   </span>
//                 </div>
//                 <span className="text-secondary">
//                   Last Update: <a href="#" className="text-black">10 February, 2022</a>
//                 </span>
//               </div>

//               {/* Course Overview */}
//               <div className="mt-12">
//                 <h3 className="text-2xl font-bold">Overview</h3>
//                 <p className="mt-4">
//                   This bootcamp covers UI/UX design principles, wireframing, prototyping, and graphic design for digital interfaces.
//                 </p>
//               </div>

//               {/* Curriculum */}
//               <div className="mt-12">
//                 <h3 className="text-2xl font-bold">Curriculum</h3>
//                 <ul className="mt-4 list-disc pl-5">
//                   <li>Introduction to UI/UX</li>
//                   <li>Wireframing and Prototyping</li>
//                   <li>Graphic Design Basics</li>
//                   <li>Adobe XD & Figma Training</li>
//                 </ul>
//               </div>

//               {/* Instructor */}
//               <div className="mt-12">
//                 <h3 className="text-2xl font-bold">Instructor</h3>
//                 <p className="mt-4">
//                   Md Shamim Hossain is an experienced UI/UX designer with over 10 years of experience in the field.
//                 </p>
//               </div>

//               {/* Reviews */}
//               <div className="mt-12">
//                 <h3 className="text-2xl font-bold">Reviews</h3>
                
//                 <div className="mt-6">
//                   <div className="flex items-center space-x-4 mb-5">
//                     <div className="flex-none">
//                       <div className="flex space-x-1 text-xl text-tertiary">
//                         ⭐⭐⭐⭐⭐
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <div className="progressbar-group flex items-center space-x-4">
//                         <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
//                           <div className="h-[6px] bg-secondary absolute left-0 top-1/2 -translate-y-1/2" style={{ width: "40%" }}></div>
//                         </div>
//                         <div className="flex-none">
//                           <span className="block mb-2 font-semibold">40%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Reviews List */}
//                   <div className="mt-8">
//                     <ul className="space-y-6">
//                       <li className="flex space-x-6">
//                         <div className="h-[72px] w-[72px] rounded-full bg-gray-300"></div>
//                         <div className="flex-1">
//                           <div className="flex space-x-3 mb-4">⭐⭐⭐⭐⭐</div>
//                           <p>Great course! The explanations were clear, and the hands-on practice was very useful.</p>
//                           <div className="author mt-4">
//                             <span className="block text-xl font-bold text-black">Daniel Smith</span>
//                             <span className="block">Jan 24, 2022</span>
//                           </div>
//                         </div>
//                       </li>

//                       <li className="flex space-x-6">
//                         <div className="h-[72px] w-[72px] rounded-full bg-gray-300"></div>
//                         <div className="flex-1">
//                           <div className="flex space-x-3 mb-4">⭐⭐⭐⭐⭐</div>
//                           <p>Very informative and well-structured course!</p>
//                           <div className="author mt-4">
//                             <span className="block text-xl font-bold text-black">Sarah Johnson</span>
//                             <span className="block">Feb 15, 2022</span>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>

//                 </div> {/* End Reviews Section */}

//               </div> {/* End Course Details */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;



// import React from "react";
// import { useParams } from "react-router-dom";
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";
// import courseBg3 from "../assets/images/course-bg-3.webp";
// import courseBg4 from "../assets/images/course-bg-4.webp";
// import courseBg5 from "../assets/images/course-bg-5.webp";
// import courseBg6 from "../assets/images/course-bg-6.webp";
// import courseBg7 from "../assets/images/course-bg-7.webp";
// import courseBg8 from "../assets/images/course-bg-8.webp";
// import courseBg9 from "../assets/images/course-bg-9.webp";

// // All Courses Data
// const allCourses = [
//     { id: 1, title: "UI/UX Design for Beginners", description: "Learn UI/UX basics.", lessons: 35, rating: 4.7, category: "UI/UX", discount: "15% Off", image: courseBg1 },
//     { id: 2, title: "React JS from Scratch", description: "Master React fundamentals.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg2 },
//     { id: 3, title: "Full Stack JavaScript Bootcamp", description: "Full-stack JavaScript.", lessons: 65, rating: 4.9, category: "Full Stack", discount: "25% Off", image: courseBg3 },
//     { id: 4, title: "Advanced UI/UX Research", description: "Enhance UX research skills.", lessons: 45, rating: 4.6, category: "UI/UX", discount: "18% Off", image: courseBg4 },
//     { id: 5, title: "HTML & CSS Mastery", description: "Modern web design.", lessons: 40, rating: 4.8, category: "Frontend", discount: "15% Off", image: courseBg5 },
//     { id: 6, title: "JavaScript Essentials", description: "Master JavaScript.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg6 },
//     { id: 7, title: "PHP & MySQL Development", description: "Backend web development.", lessons: 55, rating: 4.7, category: "Backend", discount: "18% Off", image: courseBg7 },
//     { id: 8, title: "MongoDB for Beginners", description: "NoSQL with MongoDB.", lessons: 45, rating: 4.6, category: "Database", discount: "15% Off", image: courseBg8 },
//     { id: 9, title: "SEO & Digital Marketing", description: "SEO & marketing strategies.", lessons: 40, rating: 4.7, category: "Marketing", discount: "20% Off", image: courseBg9 }
// ];

// function CourseDetails() {
//     const { id } = useParams();
//     const course = allCourses.find((course) => course.id === parseInt(id));

//     if (!course) {
//         return <h2>Course not found!</h2>;
//     }

//     return (
//         <section className="course-details-page" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="course-details-wrapper">
//                             <img src={course.image} alt={course.title} className="course-details-image" />
//                             <h2>{course.title}</h2>
//                             <p>{course.description}</p>
//                             <p><strong>Lessons:</strong> {course.lessons}</p>
//                             <p><strong>Category:</strong> {course.category}</p>
//                             <p><strong>Rating:</strong> {course.rating} / 5</p>
//                             <p><strong>Discount:</strong> {course.discount}</p>
//                             <button className="bd-btn btn-outline-primary">Enroll Now</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CourseDetails;



// import React from "react";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";
// import courseBg3 from "../assets/images/course-bg-3.webp";
// import courseBg4 from "../assets/images/course-bg-4.webp";
// import courseBg5 from "../assets/images/course-bg-5.webp";
// import courseBg6 from "../assets/images/course-bg-6.webp";
// import courseBg7 from "../assets/images/course-bg-7.webp";
// import courseBg8 from "../assets/images/course-bg-8.webp";
// import courseBg9 from "../assets/images/course-bg-9.webp";

// const allCourses = [
//     { id: 1, title: "UI/UX Design for Beginners", description: "Learn UI/UX basics.", lessons: 35, rating: 4.7, category: "UI/UX", discount: "15% Off", image: courseBg1 },
//     { id: 2, title: "React JS from Scratch", description: "Master React fundamentals.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg2 },
//     { id: 3, title: "Full Stack JavaScript Bootcamp", description: "Full-stack JavaScript.", lessons: 65, rating: 4.9, category: "Full Stack", discount: "25% Off", image: courseBg3 },
//     { id: 4, title: "Advanced UI/UX Research", description: "Enhance UX research skills.", lessons: 45, rating: 4.6, category: "UI/UX", discount: "18% Off", image: courseBg4 },
//     { id: 5, title: "HTML & CSS Mastery", description: "Modern web design.", lessons: 40, rating: 4.8, category: "Frontend", discount: "15% Off", image: courseBg5 },
//     { id: 6, title: "JavaScript Essentials", description: "Master JavaScript.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg6 },
//     { id: 7, title: "PHP & MySQL Development", description: "Backend web development.", lessons: 55, rating: 4.7, category: "Backend", discount: "18% Off", image: courseBg7 },
//     { id: 8, title: "MongoDB for Beginners", description: "NoSQL with MongoDB.", lessons: 45, rating: 4.6, category: "Database", discount: "15% Off", image: courseBg8 },
//     { id: 9, title: "SEO & Digital Marketing", description: "SEO & marketing strategies.", lessons: 40, rating: 4.7, category: "Marketing", discount: "20% Off", image: courseBg9 }
// ];

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find((c) => c.id === parseInt(id));

//     if (!course) {
//         return <div className="container text-center mt-5">Course not found</div>;
//     }

//     return (
//         <motion.section 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="course-details container mt-5"
//         >
//             <div className="row align-items-center">
//                 <div className="col-lg-6">
//                     <motion.img 
//                         src={course.image} 
//                         alt={course.title} 
//                         className="img-fluid rounded" 
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5 }}
//                     />
//                 </div>
//                 <div className="col-lg-6">
//                     <motion.h2 
//                         className="mb-3" 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         {course.title}
//                     </motion.h2>
//                     <p><strong>Category:</strong> {course.category}</p>
//                     <p><strong>Lessons:</strong> {course.lessons}</p>
//                     <p><strong>Rating:</strong> {course.rating} ⭐</p>
//                     <p><strong>Discount:</strong> {course.discount}</p>
//                     <p>{course.description}</p>
//                     <motion.button 
//                         className="btn btn-primary mt-3" 
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                     >
//                         Enroll Now
//                     </motion.button>
//                 </div>
//             </div>
//         </motion.section>
//     );
// };

// export default CourseDetails;


// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { allCourses } from "../data/courses"; // Assuming courses data is stored separately

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find((c) => c.id === parseInt(id));

//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     if (!course) {
//         return <div className="container text-center"><h2>Course Not Found</h2></div>;
//     }

//     const faqData = [
//         { question: `What will I learn in ${course.title}?`, answer: "You will gain in-depth knowledge on " + course.description },
//         { question: "Who is this course for?", answer: "This course is for beginners and professionals looking to upskill in " + course.category },
//         { question: "How long does the course take?", answer: `This course includes ${course.lessons} lessons and can be completed at your own pace.` },
//         { question: "Will I get a certificate?", answer: "Yes! You will receive a certificate upon successful completion of the course." },
//     ];

//     return (
//         <div className="course-details-page" style={{ padding: "100px 0" }}>
//             <div className="container">
//                 {/* Course Banner */}
//                 <div className="course-banner" data-aos="fade-up">
//                     <img src={course.image} alt={course.title} className="w-100 rounded shadow-lg" />
//                 </div>

//                 {/* Course Title & Info */}
//                 <div className="course-info mt-5" data-aos="fade-up">
//                     <h1 className="fw-bold">{course.title}</h1>
//                     <p className="text-muted">{course.description}</p>
//                     <span className="badge bg-primary fs-5 p-2">{course.category}</span>
//                     <span className="badge bg-success fs-5 p-2 ms-2">{course.discount}</span>
//                 </div>

//                 {/* Course Details */}
//                 <div className="course-content mt-5" data-aos="fade-up">
//                     <h3>Course Overview</h3>
//                     <p>
//                         This comprehensive course on <strong>{course.title}</strong> covers all essential aspects of {course.category}. 
//                         You will learn {course.description.toLowerCase()}, hands-on projects, and real-world applications.
//                     </p>

//                     <ul className="list-group mt-3">
//                         <li className="list-group-item"><i className="fas fa-book"></i> <strong>Total Lessons:</strong> {course.lessons}</li>
//                         <li className="list-group-item"><i className="fas fa-star"></i> <strong>Rating:</strong> {course.rating} / 5</li>
//                         <li className="list-group-item"><i className="fas fa-tag"></i> <strong>Category:</strong> {course.category}</li>
//                     </ul>
//                 </div>

//                 {/* FAQ Section */}
//                 <div className="faq-section mt-5" data-aos="fade-up">
//                     <h3>Frequently Asked Questions</h3>
//                     <div className="accordion" id="faqAccordion">
//                         {faqData.map((faq, index) => (
//                             <div className="accordion-item" key={index}>
//                                 <h2 className="accordion-header" id={`heading${index}`}>
//                                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true">
//                                         {faq.question}
//                                     </button>
//                                 </h2>
//                                 <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                                     <div className="accordion-body">{faq.answer}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Enroll Now Button */}
//                 <div className="text-center mt-5" data-aos="fade-up">
//                     <a href="/enroll" className="btn btn-lg btn-primary">
//                         Enroll Now <i className="fas fa-arrow-right"></i>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseDetails;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import courses from "../data/courses";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../assets/css/courseDetails.css";

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = courses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     if (!course) {
//         return <div className="not-found">Course Not Found</div>;
//     }

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <div className="course-details-container" style={{ paddingTop: "120px", paddingBottom: "70px" }}>
//             {/* Banner Section */}
//             <div className="course-banner" style={{ backgroundImage: `url(${course.banner})` }}>
//                 <div className="overlay">
//                     <h1 data-aos="fade-up">{course.title}</h1>
//                     <p data-aos="fade-up" data-aos-delay="300">{course.description}</p>
//                 </div>
//             </div>

//             {/* Course Overview */}
//             <div className="course-content container">
//                 <div className="course-info" data-aos="fade-up">
//                     <h2>Course Overview</h2>
//                     <p>{course.details}</p>
//                 </div>
                
//                 {/* Course Features */}
//                 <div className="course-features" data-aos="fade-up" data-aos-delay="300">
//                     <h2>What You Will Learn</h2>
//                     <ul>
//                         {course.features.map((feature, index) => (
//                             <li key={index} data-aos="fade-right" data-aos-delay={index * 100}>{feature}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* FAQ Section */}
//             <div className="faq-section" data-aos="fade-up">
//                 <h2>Frequently Asked Questions</h2>
//                 <div className="faq-list">
//                     {course.faq.map((faq, index) => (
//                         <div key={index} className={`faq-item ${activeFAQ === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
//                             <h3>{faq.question}</h3>
//                             <p className="faq-answer" style={{ display: activeFAQ === index ? "block" : "none" }}>{faq.answer}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseDetails;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { allCourses } from '../data/courses';
// import { Link } from 'react-router';
// import '../assets/images/css/courseDetails.css';

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));

//     if (!course) {
//         return <h2 className="course-details">Course not found.</h2>;
//     }

//     const toggleFAQ = (index) => {
//         const faqItems = document.querySelectorAll('.faq-item');
//         faqItems[index].classList.toggle('active');
//     };

//     return (
//         <>
//         <div
//         className="tekup-breadcrumb"
//         style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
//       >
//         <div className="container">
//           <h1 className="post__title">{course.title}</h1>
//           <nav className="breadcrumbs" aria-label="Breadcrumb">
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/course">Course</Link></li>
//               <li aria-current="page">{course.title}</li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//         <div className="course-details">
//             <img src={course.banner} alt={course.title} className="course-banner" />

//             <div className="course-header">
//                 <h1 className="course-title">{course.title}</h1>
//                 <div className="course-meta">
//                     <span>🎓 {course.lessons} Lessons</span>
//                     <span>⭐ {course.rating} Rating</span>
//                     <span>🔥 {course.discount}</span>
//                 </div>
//             </div>

//             <p className="course-description">{course.description}</p>

//             <div className="faq-section">
//                 <h2>📌 Frequently Asked Questions</h2>
//                 {course.faq.map((item, index) => (
//                     <div className="faq-item" key={index}>
//                         <div className="faq-question" onClick={() => toggleFAQ(index)}>
//                             {item.question}
//                         </div>
//                         <div className="faq-answer">{item.answer}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </>
//     );
// };

// export default CourseDetails;


// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { allCourses } from '../data/courses';
// import '../assets/images/css/courseDetails.css';
// import '../assets/images/css/animations.css'; // Add new CSS for animations

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     if (!course) {
//         return <h2 className="course-details">Course not found.</h2>;
//     }

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <>
//         <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.banner})` }}>
//             <div className="container">
//                 <h1 className="post__title">{course.title}</h1>
//                 <nav className="breadcrumbs" aria-label="Breadcrumb">
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/course">Course</Link></li>
//                         <li aria-current="page">{course.title}</li>
//                     </ul>
//                 </nav>
//             </div>
//         </div>
        
//         <div className="course-details">
//             <img src={course.banner} alt={course.title} className="course-banner fade-in" />
//             <div className="course-header slide-in">
//                 <h1 className="course-title">{course.title}</h1>
//                 <div className="course-meta">
//                     <span>🎓 {course.lessons} Lessons</span>
//                     <span>⭐ {course.rating} Rating</span>
//                     <span>🔥 {course.discount}</span>
//                 </div>
//             </div>

//             <p className="course-description zoom-in">{course.description}</p>

//             <button className="enroll-button pulse">Enroll Now</button>

//             <div className="faq-section">
//                 <h2>📌 Frequently Asked Questions</h2>
//                 {course.faq.map((item, index) => (
//                     <div className={`faq-item ${activeFAQ === index ? 'active' : ''}`} key={index}>
//                         <div className="faq-question" onClick={() => toggleFAQ(index)}>
//                             {item.question} <span>{activeFAQ === index ? '🔼' : '🔽'}</span>
//                         </div>
//                         <div className="faq-answer" style={{ maxHeight: activeFAQ === index ? '200px' : '0' }}>
//                             {item.answer}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </>
//     );
// };

// export default CourseDetails;

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allCourses } from '../data/courses';
import '../assets/images/css/courseDetails.css';
import '../assets/images/css/animations.css'; // Add new CSS for animations

const CourseDetails = () => {
    const { id } = useParams();
    const course = allCourses.find(course => course.id === parseInt(id));
    const [activeFAQ, setActiveFAQ] = useState(null);

    // Handle course not found
    if (!course) {
        return (
            <div className="course-details">
                <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
            </div>
        );
    }

    // Toggle FAQ visibility
    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <>
            {/* Breadcrumb Section */}
            <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.banner})` }}>
                <div className="container">
                    <h1 className="post__title">{course.title}</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/course">Course</Link></li>
                            <li aria-current="page">{course.title}</li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Course Details Section */}
            <div className="course-details">
                {/* Course Banner */}
                <img src={course.banner} alt={course.title} className="course-banner fade-in" />

                {/* Course Header */}
                <div className="course-header slide-in">
                    <h1 className="course-title">{course.title}</h1>
                    <div className="course-meta">
                        <span>🎓 {course.lessons} Lessons</span>
                        <span>⭐ {course.rating} Rating</span>
                        <span>🔥 {course.discount}</span>
                    </div>
                </div>

                {/* Course Description */}
                <p className="course-description zoom-in">{course.description}</p>

                {/* Enroll Button */}
                <button className="enroll-button pulse">Enroll Now</button>

                {/* FAQ Section */}
                <div className="faq-section">
                    <h2>📌 Frequently Asked Questions</h2>
                    {course.faq.map((item, index) => (
                        <div
                            className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                            key={index}
                            aria-expanded={activeFAQ === index}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                role="button"
                                tabIndex={0}
                                aria-controls={`faq-answer-${index}`}
                            >
                                {item.question} <span>{activeFAQ === index ? '🔼' : '🔽'}</span>
                            </div>
                            <div
                                id={`faq-answer-${index}`}
                                className="faq-answer"
                                style={{ maxHeight: activeFAQ === index ? '200px' : '0' }}
                                aria-hidden={activeFAQ !== index}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CourseDetails;
