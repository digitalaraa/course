import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allCourses } from '../data/courses';
import { FaChevronDown, FaChevronUp, FaHome, FaBook, FaStar, FaFire, FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/images/css/courseDetails.css';
import '../assets/images/css/animations.css';

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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

    const handleEnrollClick = () => {
        navigate('/contact', {
            state: {
                courseData: {
                    id: course.id,
                    title: course.title,
                    price: course.price
                }
            }
        });
    };

    return (
        <>
            <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${course.image})` }}>
                <div className="container">
                    <h1 className="post__title">{course.title}</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <ul>
                            <li><Link to="/"><FaHome /> Home</Link></li>
                            <li><Link to="/course"><FaBook /> Course</Link></li>
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
                        <span><FaGraduationCap /> {course.lessons} Lessons</span>
                        <span><FaStar /> {course.rating} Rating</span>
                        <span><FaFire /> {course.discount}</span>
                    </div>
                </div>
                <p className="course-description zoom-in">{course.description}</p>
                
                {/* Updated Enroll Now Button */}
                {/* <button onClick={handleEnrollClick} className="enroll-button pulse">
                    Enroll Now
                </button> */}
                <div style={{ 
  display: 'flex', 
  justifyContent: 'center',
  margin: '24px 0'
}}>
  <button
    onClick={handleEnrollClick}
    style={{
      position: 'relative',
      padding: '14px 36px',
      minWidth: '200px',
      borderRadius: '8px',
      background: '#07a169',
      color: 'white',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      zIndex: 1
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }}
  >
    <span style={{ position: 'relative', zIndex: 2 }}>Enroll Now</span>
    <span style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
      zIndex: 1
    }}></span>
  </button>
</div>
                <div className="pro-faq-section">
  <h2 className="faq-title">Frequently Asked Questions</h2>
  <div className="faq-container">
    {course.faq.map((item, index) => (
      <div
        key={index}
        className={`faq-card ${activeFAQ === index ? 'active' : ''}`}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-header">
          <h3 className="faq-question">{item.question}</h3>
          <span className="faq-icon">
            {activeFAQ === index ? (
              <FaChevronUp className="text-primary" />
            ) : (
              <FaChevronDown className="text-muted" />
            )}
          </span>
        </div>
        
        <AnimatePresence>
          {activeFAQ === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="faq-content"
            >
              <div className="faq-answer">
                {item.answer}
              </div>
              {item.additionalInfo && (
                <div className="faq-extra mt-3 p-3 bg-light rounded">
                  {item.additionalInfo}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
  </div>
</div>
                {/* <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    {course.faq.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                {item.question} <span>{activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}</span>
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
                </div> */}
            </div>
        </>
    );
};

export default CourseDetails;