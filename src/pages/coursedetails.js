// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { allCourses } from '../data/courses';
// import '../assets/images/css/courseDetails.css';
// import '../assets/images/css/animations.css'; // Add new CSS for animations

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     // Handle course not found
//     if (!course) {
//         return (
//             <div className="course-details">
//                 <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
//             </div>
//         );
//     }

//     // Toggle FAQ visibility
//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <>
//             {/* Breadcrumb Section */}
//             <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.banner})` }}>
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

//             {/* Course Details Section */}
//             <div className="course-details">
//                 {/* Course Banner */}
//                 <img src={course.banner} alt={course.title} className="course-banner fade-in" />

//                 {/* Course Header */}
//                 <div className="course-header slide-in">
//                     <h1 className="course-title">{course.title}</h1>
//                     <div className="course-meta">
//                         <span>🎓 {course.lessons} Lessons</span>
//                         <span>⭐ {course.rating} Rating</span>
//                         <span>🔥 {course.discount}</span>
//                     </div>
//                 </div>

//                 {/* Course Description */}
//                 <p className="course-description zoom-in">{course.description}</p>

//                 {/* Enroll Button */}
//                 <button className="enroll-button pulse">Enroll Now</button>

//                 {/* FAQ Section */}
//                 <div className="faq-section">
//                     <h2>📌 Frequently Asked Questions</h2>
//                     {course.faq.map((item, index) => (
//                         <div
//                             className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
//                             key={index}
//                             aria-expanded={activeFAQ === index}
//                         >
//                             <div
//                                 className="faq-question"
//                                 onClick={() => toggleFAQ(index)}
//                                 role="button"
//                                 tabIndex={0}
//                                 aria-controls={`faq-answer-${index}`}
//                             >
//                                 {item.question} <span>{activeFAQ === index ? '🔼' : '🔽'}</span>
//                             </div>
//                             <div
//                                 id={`faq-answer-${index}`}
//                                 className="faq-answer"
//                                 style={{ maxHeight: activeFAQ === index ? '200px' : '0' }}
//                                 aria-hidden={activeFAQ !== index}
//                             >
//                                 {item.answer}
//                             </div>
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
// import '../assets/images/css/courseDetails.css';
// import '../assets/images/css/animations.css'; // Add new CSS for animations

// const CourseDetails = () => {
//     const { id } = useParams();
//     const course = allCourses.find(course => course.id === parseInt(id));
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     // Handle course not found
//     if (!course) {
//         return (
//             <div className="course-details">
//                 <h2 className="error-message">🚨 Course not found. Please check the URL or go back to the <Link to="/course">course list</Link>.</h2>
//             </div>
//         );
//     }

//     // Toggle FAQ visibility
//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <>
//             {/* Breadcrumb Section */}
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

//             {/* Course Details Section */}
//             <div className="course-details">
//                 {/* Course Banner */}
//                 <img src={course.image} alt={course.title} className="course-banner fade-in" />

//                 {/* Course Header */}
//                 <div className="course-header slide-in">
//                     <h1 className="course-title">{course.title}</h1>
//                     <div className="course-meta">
//                         <span>🎓 {course.lessons} Lessons</span>
//                         <span>⭐ {course.rating} Rating</span>
//                         <span>🔥 {course.discount}</span>
//                     </div>
//                 </div>

//                 {/* Course Description */}
//                 <p className="course-description zoom-in">{course.description}</p>

//                 {/* Enroll Button */}
//                 <button className="enroll-button pulse">Enroll Now</button>

//                 {/* FAQ Section */}
//                 <div className="faq-section">
//                     <h2>📌 Frequently Asked Questions</h2>
//                     {course.faq.map((item, index) => (
//                         <div
//                             className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
//                             key={index}
//                             aria-expanded={activeFAQ === index}
//                         >
//                             <div
//                                 className="faq-question"
//                                 onClick={() => toggleFAQ(index)}
//                                 role="button"
//                                 tabIndex={0}
//                                 aria-controls={`faq-answer-${index}`}
//                             >
//                                 {item.question} <span>{activeFAQ === index ? '🔼' : '🔽'}</span>
//                             </div>
//                             <div
//                                 id={`faq-answer-${index}`}
//                                 className="faq-answer"
//                                 style={{ maxHeight: activeFAQ === index ? '200px' : '0' }}
//                                 aria-hidden={activeFAQ !== index}
//                             >
//                                 {item.answer}
//                             </div>
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
import '../assets/images/css/courseDetails.css';
import '../assets/images/css/animations.css';

const CourseDetails = () => {
    const { id } = useParams();
    const course = allCourses.find(course => course.id === parseInt(id));
    const [activeFAQ, setActiveFAQ] = useState(null);

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

    return (
        <>
            <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.image})` }}>
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
            <div className="course-details">
                <img src={course.image} alt={course.title} className="course-banner fade-in" />
                <div className="course-header slide-in">
                    <h1 className="course-title">{course.title}</h1>
                    <div className="course-meta">
                        <span>🎓 {course.lessons} Lessons</span>
                        <span>⭐ {course.rating} Rating</span>
                        <span>🔥 {course.discount}</span>
                    </div>
                </div>
                <p className="course-description zoom-in">{course.description}</p>
                <button className="enroll-button pulse">Enroll Now</button>
                <div className="faq-section">
                    <h2>📌 Frequently Asked Questions</h2>
                    {course.faq.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                {item.question} <span>{activeFAQ === index ? '🔼' : '🔽'}</span>
                            </div>
                            {activeFAQ === index && (
                                <div className="faq-answer">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CourseDetails;