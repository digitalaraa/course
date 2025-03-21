// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { allCourses } from '../data/courses';
// import '../assets/images/css/courseDetails.css';
// import '../assets/images/css/animations.css';

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     if (!course) {
//         return (
//             <div className="course-details">
//                 <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
//             </div>
//         );
//     }

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <>
//             <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.image})` }}>
//                 <div className="container">
//                     <h1 className="post__title">{course.title}</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/course">Course</Link></li>
//                             <li aria-current="page">{course.title}</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//             <div className="course-details">
//                 <img src={course.image} alt={course.title} className="course-banner fade-in" />
//                 <div className="course-header slide-in">
//                     <h1 className="course-title">{course.title}</h1>
//                     <div className="course-meta">
//                         <span>🎓 {course.lessons} Lessons</span>
//                         <span>⭐ {course.rating} Rating</span>
//                         <span>🔥 {course.discount}</span>
//                     </div>
//                 </div>
//                 <p className="course-description zoom-in">{course.description}</p>
//                 <button className="enroll-button pulse">Enroll Now</button>
//                 <div className="faq-section">
//                     <h2>📌 Frequently Asked Questions</h2>
//                     {course.faq.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
//                             onClick={() => toggleFAQ(index)}
//                         >
//                             <div className="faq-question">
//                                 {item.question} <span>{activeFAQ === index ? '🔼' : '🔽'}</span>
//                             </div>
//                             {activeFAQ === index && (
//                                 <div className="faq-answer">
//                                     {item.answer}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CourseDetails;


// 

// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { allCourses } from '../data/courses';
// import { FaChevronDown, FaChevronUp, FaHome, FaBook, FaStar, FaFire, FaGraduationCap } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
// import '../assets/images/css/courseDetails.css';
// import '../assets/images/css/animations.css';

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     if (!course) {
//         return (
//             <div className="course-details">
//                 <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
//             </div>
//         );
//     }

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <>
//             <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.image})` }}>
//                 <div className="container">
//                     <h1 className="post__title">{course.title}</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/"><FaHome /> Home</Link></li>
//                             <li><Link to="/course"><FaBook /> Course</Link></li>
//                             <li aria-current="page">{course.title}</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//             <div className="course-details">
//                 <img src={course.image} alt={course.title} className="course-banner fade-in" />
//                 <div className="course-header slide-in">
//                     <h1 className="course-title">{course.title}</h1>
//                     <div className="course-meta">
//                         <span><FaGraduationCap /> {course.lessons} Lessons</span>
//                         <span><FaStar /> {course.rating} Rating</span>
//                         <span><FaFire /> {course.discount}</span>
//                     </div>
//                 </div>
//                 <p className="course-description zoom-in">{course.description}</p>
//                 <button className="enroll-button pulse">Enroll Now</button>
//                 <div className="faq-section">
//                     <h2>📌 Frequently Asked Questions</h2>
//                     {course.faq.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
//                             onClick={() => toggleFAQ(index)}
//                         >
//                             <div className="faq-question">
//                                 {item.question} <span>{activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}</span>
//                             </div>
//                             <AnimatePresence>
//                                 {activeFAQ === index && (
//                                     <motion.div
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: 'auto' }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="faq-answer"
//                                     >
//                                         {item.answer}
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CourseDetails;


// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { allCourses } from '../data/courses';
// import { FaChevronDown, FaChevronUp, FaHome, FaBook, FaStar, FaFire, FaGraduationCap } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion'; // For smooth animations
// import '../assets/images/css/courseDetails.css';
// import '../assets/images/css/animations.css';

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     if (!course) {
//         return (
//             <div className="course-details">
//                 <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
//             </div>
//         );
//     }

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <>
//             <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.image})` }}>
//                 <div className="container">
//                     <h1 className="post__title">{course.title}</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/"><FaHome /> Home</Link></li>
//                             <li><Link to="/course"><FaBook /> Course</Link></li>
//                             <li aria-current="page">{course.title}</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//             <div className="course-details">
//                 <img src={course.image} alt={course.title} className="course-banner fade-in" />
//                 <div className="course-header slide-in">
//                     <h1 className="course-title">{course.title}</h1>
//                     <div className="course-meta">
//                         <span><FaGraduationCap /> {course.lessons} Lessons</span>
//                         <span><FaStar /> {course.rating} Rating</span>
//                         <span><FaFire /> {course.discount}</span>
//                     </div>
//                 </div>
//                 <p className="course-description zoom-in">{course.description}</p>
//                 <button className="enroll-button pulse">Enroll Now</button>
//                 <div className="faq-section">
//                     <h2 className="faq-title">📌 Frequently Asked Questions</h2>
//                     {course.faq.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
//                             onClick={() => toggleFAQ(index)}
//                         >
//                             <div className="faq-question">
//                                 <span className="faq-icon">{activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}</span>
//                                 <span className="faq-text">{item.question}</span>
//                             </div>
//                             <AnimatePresence>
//                                 {activeFAQ === index && (
//                                     <motion.div
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: 'auto' }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="faq-answer"
//                                     >
//                                         {item.answer}
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CourseDetails;


// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { allCourses } from '../data/courses';
// import { FaChevronDown, FaChevronUp, FaHome, FaBook, FaStar, FaFire, FaGraduationCap } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion'; // For smooth animations
// import '../assets/images/css/courseDetails.css';
// import '../assets/images/css/animations.css';

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     if (!course) {
//         return (
//             <div className="course-details">
//                 <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
//             </div>
//         );
//     }

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <>
//             <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.image})` }}>
//                 <div className="container">
//                     <h1 className="post__title">{course.title}</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/"><FaHome /> Home</Link></li>
//                             <li><Link to="/course"><FaBook /> Course</Link></li>
//                             <li aria-current="page">{course.title}</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//             <div className="course-details">
//                 <img src={course.image} alt={course.title} className="course-banner fade-in" />
//                 <div className="course-header slide-in">
//                     <h1 className="course-title">{course.title}</h1>
//                     <div className="course-meta">
//                         <span><FaGraduationCap /> {course.lessons} Lessons</span>
//                         <span><FaStar /> {course.rating} Rating</span>
//                         <span><FaFire /> {course.discount}</span>
//                     </div>
//                 </div>
//                 <p className="course-description zoom-in">{course.description}</p>
//                 <button className="enroll-button pulse">Enroll Now</button>
//                 <div className="faq-section">
//                     <h2 className="faq-title">📌 Frequently Asked Questions</h2>
//                     {course.faq.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
//                             onClick={() => toggleFAQ(index)}
//                         >
//                             <div className="faq-question">
//                                 <span className="faq-icon">{activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}</span>
//                                 <span className="faq-text">{item.question}</span>
//                             </div>
//                             <AnimatePresence>
//                                 {activeFAQ === index && (
//                                     <motion.div
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: 'auto' }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="faq-answer"
//                                     >
//                                         {item.answer}
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CourseDetails;


// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { allCourses } from '../data/courses';
// import { FaChevronDown, FaChevronUp, FaHome, FaBook, FaStar, FaFire, FaGraduationCap } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion'; // For smooth animations
// import '../assets/images/css/courseDetails.css';
// import '../assets/images/css/animations.css';

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     if (!course) {
//         return (
//             <div className="course-details">
//                 <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
//             </div>
//         );
//     }

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <>
//             <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.image})` }}>
//                 <div className="container">
//                     <h1 className="post__title">{course.title}</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/"><FaHome /> Home</Link></li>
//                             <li><Link to="/course"><FaBook /> Course</Link></li>
//                             <li aria-current="page">{course.title}</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//             <div className="course-details">
//                 <img src={course.image} alt={course.title} className="course-banner fade-in" />
//                 <div className="course-header slide-in">
//                     <h1 className="course-title">{course.title}</h1>
//                     <div className="course-meta">
//                         <span><FaGraduationCap /> {course.lessons} Lessons</span>
//                         <span><FaStar /> {course.rating} Rating</span>
//                         <span><FaFire /> {course.discount}</span>
//                     </div>
//                 </div>
//                 <p className="course-description zoom-in">{course.description}</p>
//                 <button className="enroll-button pulse">Enroll Now</button>
//                 <div className="faq-section">
//                     <h2 className="faq-title">Frequently Asked Questions</h2>
//                     {course.faq.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
//                             onClick={() => toggleFAQ(index)}
//                         >
//                             <div className="faq-question">
//                                 <span className="faq-icon">{activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}</span>
//                                 <span className="faq-text">{item.question}</span>
//                             </div>
//                             <AnimatePresence>
//                                 {activeFAQ === index && (
//                                     <motion.div
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: 'auto' }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="faq-answer"
//                                     >
//                                         {item.answer}
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CourseDetails;

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allCourses } from '../data/courses';
import { FaChevronDown, FaChevronUp, FaHome, FaBook, FaStar, FaFire, FaGraduationCap, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/images/css/courseDetails.css';
import '../assets/images/css/animations.css';

const CourseDetails = () => {
    const { id } = useParams();
    const course = allCourses.find(course => course.id === parseInt(id));
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    if (!course) {
        return (
            <div className="course-details">
                <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
            </div>
        );
    }

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <>
            <div className={`tekup-breadcrumb ${darkMode ? 'dark-mode' : ''}`} style={{ backgroundImage: `url(${course.image})` }}>
                <div className="container">
                    <h1 className="post__title">{course.title}</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <ul>
                            <li><Link to="/"><FaHome /> Home</Link></li>
                            <li><Link to="/course"><FaBook /> Course</Link></li>
                            <li aria-current="page">{course.title}</li>
                        </ul>
                    </nav>
                    <button className="dark-mode-toggle hidden" onClick={toggleDarkMode}>
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
            <div className={`course-details ${darkMode ? 'dark-mode' : ''}`}>
                <img src={course.image} alt={course.title} className="course-banner fade-in" />
                <div className="course-header slide-in">
                    <h1 className="course-title">{course.title}</h1>
                    <div className="course-meta">
                        <span><FaGraduationCap /> {course.lessons} Lessons</span>
                        <span><FaStar /> {course.rating} Rating</span>
                        <span><FaFire /> {course.discount}</span>
                    </div>
                </div>
                <p className="course-description zoom-in">{course.description}</p>
                <button className="enroll-button pulse">Enroll Now</button>
                <div className="faq-section">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    {course.faq.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <span className="faq-icon">{activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                                <span className="faq-text">{item.question}</span>
                            </div>
                            <AnimatePresence>
                                {activeFAQ === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CourseDetails;