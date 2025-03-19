// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { allCourses } from "../data/courses";

// function Courses() {
//     const [courses, setCourses] = useState(allCourses.slice(0, 6)); // Initial 3 courses
//     const [viewMode, setViewMode] = useState("grid");
//     const [isLoading, setIsLoading] = useState(false);

//     const loadMoreCourses = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setCourses(allCourses); // Load all courses
//             setIsLoading(false);
//         }, 1000); // Simulate network delay
//     };

//     return (
//         <>
//             <div
//                 className="tekup-breadcrumb"
//                 style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
//             >
//                 <div className="container">
//                     <h1 className="post__title">Course</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li aria-current="page">Course</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//             <section className="bd-course-area section-space" style={{ paddingTop: "40px", paddingBottom: "70px" }}>
//                 <div className="container">
//                     <div className="row g-30 align-items-center justify-content-between mb-30">
//                         <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
//                             <div className="bd-top-sorting-left">
//                                 <h6 className="bd-sorting-item-found">
//                                     We found <span>{courses.length}</span> courses available for you
//                                 </h6>
//                             </div>
//                             <div className="bd-top-sorting-right d-flex">
//                                 <button
//                                     className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`}
//                                     onClick={() => setViewMode("grid")}
//                                 >
//                                     <i className="fa-solid fa-th-large"></i> Grid View
//                                 </button>
//                                 <button
//                                     className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`}
//                                     onClick={() => setViewMode("list")}
//                                 >
//                                     <i className="fa-solid fa-list"></i> List View
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row gy-30">
//                         <div className="col-lg-12">
//                             <div className={`display-layout-${viewMode} active`}>
//                                 <div className="row g-30">
//                                     {courses.map((course) => (
//                                         <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
//                                             <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
//                                                 <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                     <div className="bd-course-badge">
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <div className="bd-course-rating-icon d-flex rating-color">
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star-half"></i>
//                                                             </div>
//                                                             <div className="bd-course-rating-text hidden">
//                                                                 <span>({course.rating}/5 Ratings)</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                         <img src={course.image} alt="Course Background" />
//                                                     </div>
//                                                     <div className="small-text bg-text-color">
//                                                         <span className="text-light">
//                                                             <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons} Lessons
//                                                         </span>
//                                                     </div>
//                                                     <div className="bd-course-overly-title fs-200 text-white">
//                                                         {course.category}
//                                                     </div>
//                                                 </div>
//                                                 <div className="bd-course-content">
//                                                     <h5 className="bd-course-title underline mb-10">
//                                                         <Link to={`/course-details/${course.id}`}>{course.title}</Link>
//                                                     </h5>
//                                                     <p className="bd-course-description mb-10">{course.description}</p>
//                                                     <Link className="bd-btn btn-outline-primary-old" to={`/course-details/${course.id}`}>
//                                                         Enroll Now
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             {courses.length < allCourses.length && (
//                                 <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                     <button
//                                         className="bd-btn btn-outline-border-primary"
//                                         onClick={loadMoreCourses}
//                                         disabled={isLoading}
//                                     >
//                                         {isLoading ? "Loading..." : "Load More"}
//                                         <span className="right-icon">
//                                             {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
//                                         </span>
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Courses;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { allCourses } from "../data/courses";

// function Courses() {
//     const [courses, setCourses] = useState(allCourses.slice(0, 6)); // Initial 6 courses
//     const [viewMode, setViewMode] = useState("grid"); // State for grid or list view
//     const [isLoading, setIsLoading] = useState(false); // State for loading more courses

//     const loadMoreCourses = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setCourses(allCourses); // Load all courses
//             setIsLoading(false);
//         }, 1000); // Simulate network delay
//     };

//     return (
//         <>
//             {/* Breadcrumb Section */}
//             <div
//                 className="tekup-breadcrumb"
//                 style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
//             >
//                 <div className="container">
//                     <h1 className="post__title">Course</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li aria-current="page">Course</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Course Section */}
//             <section className="feature-course pt-120 pb-120">
//                 <div className="container">
//                     {/* Course Heading */}
//                     <div className="course-top heading-space d-flex align-items-end justify-content-between mb-30">
//                         <div className="section-heading mb-0">
//                             <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms">
//                                 <span className="heading-icon">
//                                     <i className="fas fa-bolt fa-solid"></i>
//                                 </span>
//                                 10,000+ unique online courses
//                             </h4>
//                             <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
//                                 Most popular courses
//                             </h2>
//                         </div>
//                         {/* View Mode Toggle Buttons */}
//                         <div className="bd-top-sorting-right d-flex">
//                             <button
//                                 className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`}
//                                 onClick={() => setViewMode("grid")}
//                             >
//                                 <i className="fa-solid fa-th-large"></i> Grid View
//                             </button>
//                             <button
//                                 className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`}
//                                 onClick={() => setViewMode("list")}
//                             >
//                                 <i className="fa-solid fa-list"></i> List View
//                             </button>
//                         </div>
//                     </div>

//                     {/* Course List */}
//                     <div className="row gy-30">
//                         <div className="col-lg-12">
//                             <div className={`display-layout-${viewMode} active`}>
//                                 <div className="row g-30">
//                                     {courses.map((course) => (
//                                         <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
//                                             <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
//                                                 {/* Course Thumbnail */}
//                                                 <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                     <div className="bd-course-badge">
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <div className="bd-course-rating-icon d-flex rating-color">
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star-half"></i>
//                                                             </div>
//                                                             <div className="bd-course-rating-text hidden">
//                                                                 <span>({course.rating}/5 Ratings)</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                         <img src={course.image} alt="Course Background" />
//                                                     </div>
//                                                     <div className="small-text bg-text-color">
//                                                         <span className="text-light">
//                                                             <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons} Lessons
//                                                         </span>
//                                                     </div>
//                                                     <div className="bd-course-overly-title fs-200 text-white">
//                                                         {course.category}
//                                                     </div>
//                                                 </div>
//                                                 {/* Course Content */}
//                                                 <div className="bd-course-content">
//                                                     <h5 className="bd-course-title underline mb-10">
//                                                         <Link to={`/course-details/${course.id}`}>{course.title}</Link>
//                                                     </h5>
//                                                     <p className="bd-course-description mb-10">{course.description}</p>
//                                                     <Link className="bd-btn btn-outline-primary-old" to={`/course-details/${course.id}`}>
//                                                         Enroll Now
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             {/* Load More Button */}
//                             {courses.length < allCourses.length && (
//                                 <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                     <button
//                                         className="bd-btn btn-outline-border-primary"
//                                         onClick={loadMoreCourses}
//                                         disabled={isLoading}
//                                     >
//                                         {isLoading ? "Loading..." : "Load More"}
//                                         <span className="right-icon">
//                                             {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
//                                         </span>
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Courses;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { allCourses } from "../data/courses";

// function Courses() {
//     const [courses, setCourses] = useState(allCourses.slice(0, 6)); // Initial 6 courses
//     const [viewMode, setViewMode] = useState("grid"); // State for grid or list view
//     const [isLoading, setIsLoading] = useState(false); // State for loading more courses

//     const loadMoreCourses = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setCourses(allCourses); // Load all courses
//             setIsLoading(false);
//         }, 1000); // Simulate network delay
//     };

//     return (
//         <>
//             {/* Breadcrumb Section */}
//             <div
//                 className="tekup-breadcrumb"
//                 style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
//             >
//                 <div className="container">
//                     <h1 className="post__title">Course</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li aria-current="page">Course</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Course Section with Sidebar */}
//             <section className="feature-course pt-120 pb-120">
//                 <div className="container">
//                     <div className="row">
//                         {/* Main Content (8 columns) */}
//                         <div className="col-lg-8">
//                             {/* Course Heading */}
//                             <div className="course-top heading-space d-flex align-items-end justify-content-between mb-30">
//                                 <div className="section-heading mb-0">
//                                     <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms">
//                                         <span className="heading-icon">
//                                             <i className="fas fa-bolt fa-solid"></i>
//                                         </span>
//                                         10,000+ unique online courses
//                                     </h4>
//                                     <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
//                                         Most popular courses
//                                     </h2>
//                                 </div>
//                                 {/* View Mode Toggle Buttons */}
//                                 <div className="bd-top-sorting-right d-flex">
//                                     <button
//                                         className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`}
//                                         onClick={() => setViewMode("grid")}
//                                     >
//                                         <i className="fa-solid fa-th-large"></i> Grid View
//                                     </button>
//                                     <button
//                                         className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`}
//                                         onClick={() => setViewMode("list")}
//                                     >
//                                         <i className="fa-solid fa-list"></i> List View
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Course List */}
//                             <div className="row gy-30">
//                                 <div className="col-lg-12">
//                                     <div className={`display-layout-${viewMode} active`}>
//                                         <div className="row g-30">
//                                             {courses.map((course) => (
//                                                 <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
//                                                     <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
//                                                         {/* Course Thumbnail */}
//                                                         <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                             <div className="bd-course-badge">
//                                                                 <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                                     <div className="bd-course-rating-icon d-flex rating-color">
//                                                                         <i className="fa-solid fa-star"></i>
//                                                                         <i className="fa-solid fa-star"></i>
//                                                                         <i className="fa-solid fa-star"></i>
//                                                                         <i className="fa-solid fa-star"></i>
//                                                                         <i className="fa-solid fa-star-half"></i>
//                                                                     </div>
//                                                                     <div className="bd-course-rating-text hidden">
//                                                                         <span>({course.rating}/5 Ratings)</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                                 <img src={course.image} alt="Course Background" />
//                                                             </div>
//                                                             <div className="small-text bg-text-color">
//                                                                 <span className="text-light">
//                                                                     <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons} Lessons
//                                                                 </span>
//                                                             </div>
//                                                             <div className="bd-course-overly-title fs-200 text-white">
//                                                                 {course.category}
//                                                             </div>
//                                                         </div>
//                                                         {/* Course Content */}
//                                                         <div className="bd-course-content">
//                                                             <h5 className="bd-course-title underline mb-10">
//                                                                 <Link to={`/course-details/${course.id}`}>{course.title}</Link>
//                                                             </h5>
//                                                             <p className="bd-course-description mb-10">{course.description}</p>
//                                                             <Link className="bd-btn btn-outline-primary-old" to={`/course-details/${course.id}`}>
//                                                                 Enroll Now
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                     {/* Load More Button */}
//                                     {courses.length < allCourses.length && (
//                                         <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                             <button
//                                                 className="bd-btn btn-outline-border-primary"
//                                                 onClick={loadMoreCourses}
//                                                 disabled={isLoading}
//                                             >
//                                                 {isLoading ? "Loading..." : "Load More"}
//                                                 <span className="right-icon">
//                                                     {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
//                                                 </span>
//                                             </button>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Sidebar (4 columns) */}
//                         <div className="col-lg-4">
//     <div className="sidebar">
//         {/* User Profile Section (if logged in) */}
//         <div className="sidebar-widget mb-30">
//             <h4 className="widget-title">My Profile</h4>
//             <div className="user-profile">
//                 <img src="/assets/images/user-avatar.jpg" alt="User Avatar" className="user-avatar" />
//                 <h5>John Doe</h5>
//                 <p>Enrolled in 3 courses</p>
//                 <Link to="/dashboard" className="btn btn-primary btn-sm">Go to Dashboard</Link>
//             </div>
//         </div>

//         {/* Course Progress Tracker */}
//         <div className="sidebar-widget mb-30">
//             <h4 className="widget-title">Course Progress</h4>
//             <div className="progress-tracker">
//                 <div className="progress-item">
//                     <h6>Web Development</h6>
//                     <div className="progress">
//                         <div className="progress-bar" style={{ width: "75%" }}>75%</div>
//                     </div>
//                 </div>
//                 <div className="progress-item">
//                     <h6>Digital Marketing</h6>
//                     <div className="progress">
//                         <div className="progress-bar" style={{ width: "50%" }}>50%</div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* Newsletter Subscription */}
//         <div className="sidebar-widget mb-30">
//             <h4 className="widget-title">Subscribe to Newsletter</h4>
//             <form className="newsletter-form">
//                 <input type="email" className="form-control" placeholder="Enter your email" />
//                 <button type="submit" className="btn btn-primary btn-block mt-2">Subscribe</button>
//             </form>
//         </div>

//         {/* Featured Instructor */}
//         <div className="sidebar-widget mb-30">
//             <h4 className="widget-title">Featured Instructor</h4>
//             <div className="featured-instructor">
//                 <img src="/assets/images/instructor.jpg" alt="Instructor" className="instructor-photo" />
//                 <h5>Jane Smith</h5>
//                 <p>Expert in Web Development</p>
//                 <Link to="/instructor/jane-smith" className="btn btn-outline-primary btn-sm">View Profile</Link>
//             </div>
//         </div>

//         {/* Social Media Links */}
//         <div className="sidebar-widget mb-30">
//             <h4 className="widget-title">Follow Us</h4>
//             <div className="social-links">
//                 <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
//                 <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
//                 <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
//                 <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
//             </div>
//         </div>

//         {/* Downloadable Resources */}
//         <div className="sidebar-widget mb-30">
//             <h4 className="widget-title">Resources</h4>
//             <ul className="resource-list">
//                 <li><a href="/resources/ebook.pdf" download>Download eBook</a></li>
//                 <li><a href="/resources/cheatsheet.pdf" download>Download Cheat Sheet</a></li>
//                 <li><a href="/resources/template.zip" download>Download Template</a></li>
//             </ul>
//         </div>
//     </div>
// </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Courses;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { allCourses } from "../data/courses";

// function Courses() {
//     const [courses, setCourses] = useState(allCourses.slice(0, 6)); // Initial 6 courses
//     const [viewMode, setViewMode] = useState("grid"); // State for grid or list view
//     const [isLoading, setIsLoading] = useState(false); // State for loading more courses

//     const loadMoreCourses = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setCourses(allCourses); // Load all courses
//             setIsLoading(false);
//         }, 1000); // Simulate network delay
//     };

//     return (
//         <>
//             {/* Breadcrumb Section */}
//             <div
//                 className="tekup-breadcrumb"
//                 style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
//             >
//                 <div className="container">
//                     <h1 className="post__title">Course</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li aria-current="page">Course</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Course Section */}
//             <section className="feature-course pt-120 pb-120" style={{ paddingTop: "20px", paddingBottom: "70px" }}>
//                 <div className="container">
//                     {/* Course Heading */}
//                     <div className="course-top heading-space d-flex align-items-end justify-content-between mb-30">
//                         <div className="section-heading mb-0">
//                             <h4 className="sub-heading wow fade-in-bottom hidden" data-wow-delay="200ms">
//                                 <span className="heading-icon">
//                                     <i className="fas fa-bolt fa-solid"></i>
//                                 </span>
//                                 100+ unique online courses
//                             </h4>
//                             <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms" style={{ paddingTop: "10px", paddingBottom: "70px" }}>
//                                 Most popular courses
//                             </h2>
//                         </div>
//                         {/* View Mode Toggle Buttons */}
//                         <div className="bd-top-sorting-right d-flex">
//                             <button
//                                 className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`}
//                                 onClick={() => setViewMode("grid")}
//                             >
//                                 <i className="fa-solid fa-th-large"></i> Grid View
//                             </button>
//                             <button
//                                 className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`}
//                                 onClick={() => setViewMode("list")}
//                             >
//                                 <i className="fa-solid fa-list"></i> List View
//                             </button>
//                         </div>
//                     </div>

//                     {/* Course List */}
//                     <div className="row gy-30">
//                         <div className="col-lg-12">
//                             <div className={`display-layout-${viewMode} active`}>
//                                 <div className="row g-30">
//                                     {courses.map((course) => (
//                                         <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
//                                             <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
//                                                 {/* Course Thumbnail */}
//                                                 <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                     <div className="bd-course-badge">
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <div className="bd-course-rating-icon d-flex rating-color">
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star-half"></i>
//                                                             </div>
//                                                             <div className="bd-course-rating-text hidden">
//                                                                 <span>({course.rating}/5 Ratings)</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                         <img src={course.image} alt="Course Background" />
//                                                     </div>
//                                                     <div className="small-text bg-text-color">
//                                                         <span className="text-light">
//                                                             <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons} Lessons
//                                                         </span>
//                                                     </div>
//                                                     <div className="bd-course-overly-title fs-200 text-white">
//                                                         {course.category}
//                                                     </div>
//                                                 </div>
//                                                 {/* Course Content */}
//                                                 <div className="bd-course-content">
//                                                     <h5 className="bd-course-title underline mb-10">
//                                                         <Link to={`/course-details/${course.id}`}>{course.title}</Link>
//                                                     </h5>
//                                                     <p className="bd-course-description mb-10">{course.description}</p>
//                                                     <Link className="bd-btn btn-outline-primary-old" to={`/course-details/${course.id}`}>
//                                                         Enroll Now
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             {/* Load More Button */}
//                             {courses.length < allCourses.length && (
//                                 <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                     <button
//                                         className="bd-btn btn-outline-border-primary"
//                                         onClick={loadMoreCourses}
//                                         disabled={isLoading}
//                                     >
//                                         {isLoading ? "Loading..." : "Load More"}
//                                         <span className="right-icon">
//                                             {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
//                                         </span>
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Courses;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { allCourses } from "../data/courses";

// function Courses() {
//     const [courses, setCourses] = useState(allCourses.slice(0, 6)); // Initial 6 courses
//     const [viewMode, setViewMode] = useState("grid"); // State for grid or list view
//     const [isLoading, setIsLoading] = useState(false); // State for loading more courses

//     const loadMoreCourses = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setCourses(allCourses); // Load all courses
//             setIsLoading(false);
//         }, 1000); // Simulate network delay
//     };

//     return (
//         <>
//             {/* Breadcrumb Section */}
//             <div
//                 className="tekup-breadcrumb"
//                 style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
//             >
//                 <div className="container">
//                     <h1 className="post__title">Course</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li aria-current="page">Course</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Course Section */}
//             <section className="feature-course pt-120 pb-120" style={{ paddingTop: "20px", paddingBottom: "70px" }}>
//                 <div className="container">
//                     {/* Course Heading */}
//                     <div className="course-top heading-space d-flex align-items-end justify-content-between mb-30">
//                         <div className="section-heading mb-0">
//                             <h4 className="sub-heading wow fade-in-bottom hidden" data-wow-delay="200ms">
//                                 <span className="heading-icon">
//                                     <i className="fas fa-bolt fa-solid"></i>
//                                 </span>
//                                 100+ unique online courses
//                             </h4>
//                             <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms" style={{ paddingTop: "10px", paddingBottom: "70px" }}>
//                                 Most popular courses
//                             </h2>
//                         </div>
//                         {/* View Mode Toggle Buttons */}
//                         <div className="bd-top-sorting-right d-flex">
//                             <button
//                                 className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`}
//                                 onClick={() => setViewMode("grid")}
//                             >
//                                 <i className="fa-solid fa-th-large"></i> Grid View
//                             </button>
//                             <button
//                                 className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`}
//                                 onClick={() => setViewMode("list")}
//                             >
//                                 <i className="fa-solid fa-list"></i> List View
//                             </button>
//                         </div>
//                     </div>

//                     {/* Course List */}
//                     <div className="row gy-30">
//                         <div className="col-lg-12">
//                             <div className={`display-layout-${viewMode} active`}>
//                                 <div className="row g-30">
//                                     {courses.map((course) => (
//                                         <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
//                                             <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
//                                                 {/* Course Thumbnail */}
//                                                 <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                     <div className="bd-course-badge">
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <div className="bd-course-rating-icon d-flex rating-color">
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star-half"></i>
//                                                             </div>
//                                                             <div className="bd-course-rating-text hidden">
//                                                                 <span>({course.rating}/5 Ratings)</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                         <img src={course.image} alt="Course Background" />
//                                                     </div>
//                                                     <div className="small-text bg-text-color">
//                                                         <span className="text-light">
//                                                             <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons} Lessons
//                                                         </span>
//                                                     </div>
//                                                     <div className="bd-course-overly-title fs-200 text-white">
//                                                         {course.category}
//                                                     </div>
//                                                 </div>
//                                                 {/* Course Content */}
//                                                 <div className="bd-course-content">
//                                                     <h5 className="bd-course-title underline mb-10">
//                                                         <Link to={`/course-details/${course.id}`}>{course.title}</Link>
//                                                     </h5>
//                                                     <p className="bd-course-description mb-10">{course.description}</p>
//                                                     <Link className="bd-btn btn-outline-primary-old" to={`/course-details/${course.id}`}>
//                                                         Enroll Now
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             {/* Load More Button */}
//                             {courses.length < allCourses.length && (
//                                 <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                     <button
//                                         className="bd-btn btn-outline-border-primary"
//                                         onClick={loadMoreCourses}
//                                         disabled={isLoading}
//                                     >
//                                         {isLoading ? "Loading..." : "Load More"}
//                                         <span className="right-icon">
//                                             {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
//                                         </span>
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Courses;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { allCourses } from "../data/courses";

// function Courses() {
//     const [courses, setCourses] = useState(allCourses.slice(0, 6)); // Initial 6 courses
//     const [viewMode, setViewMode] = useState("grid"); // State for grid or list view
//     const [isLoading, setIsLoading] = useState(false); // State for loading more courses

//     // Load more courses
//     const loadMoreCourses = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setCourses(allCourses); // Load all courses
//             setIsLoading(false);
//         }, 1000); // Simulate network delay
//     };

//     // Custom cursor logic
//     useEffect(() => {
//         const cursor = document.createElement("div");
//         cursor.classList.add("custom-cursor");
//         document.body.appendChild(cursor);

//         const handleMouseMove = (e) => {
//             cursor.style.left = `${e.pageX}px`;
//             cursor.style.top = `${e.pageY}px`;
//         };

//         document.addEventListener("mousemove", handleMouseMove);

//         // Add hover effect for course items
//         const courseItems = document.querySelectorAll(".courses__item");
//         courseItems.forEach((item) => {
//             item.addEventListener("mouseenter", () => {
//                 cursor.classList.add("active");
//             });
//             item.addEventListener("mouseleave", () => {
//                 cursor.classList.remove("active");
//             });
//         });

//         // Cleanup
//         return () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//             document.body.removeChild(cursor);
//         };
//     }, []);

//     return (
//         <>
//             {/* Breadcrumb Section */}
//             <div
//                 className="tekup-breadcrumb"
//                 style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
//             >
//                 <div className="container">
//                     <h1 className="post__title">Course</h1>
//                     <nav className="breadcrumbs" aria-label="Breadcrumb">
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li aria-current="page">Course</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Course Section */}
//             <section className="feature-course pt-120 pb-120" style={{ paddingTop: "20px", paddingBottom: "70px" }}>
//                 <div className="container">
//                     {/* Course Heading */}
//                     <div className="course-top heading-space d-flex align-items-end justify-content-between mb-30">
//                         <div className="section-heading mb-0">
//                             <h4 className="sub-heading wow fade-in-bottom hidden" data-wow-delay="200ms">
//                                 <span className="heading-icon">
//                                     <i className="fas fa-bolt fa-solid"></i>
//                                 </span>
//                                 100+ unique online courses
//                             </h4>
//                             <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms" style={{ paddingTop: "10px", paddingBottom: "70px" }}>
//                                 Most popular courses
//                             </h2>
//                         </div>
//                         {/* View Mode Toggle Buttons */}
//                         <div className="bd-top-sorting-right d-flex">
//                             <button
//                                 className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`}
//                                 onClick={() => setViewMode("grid")}
//                             >
//                                 <i className="fa-solid fa-th-large"></i> Grid View
//                             </button>
//                             <button
//                                 className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`}
//                                 onClick={() => setViewMode("list")}
//                             >
//                                 <i className="fa-solid fa-list"></i> List View
//                             </button>
//                         </div>
//                     </div>

//                     {/* Course List */}
//                     <div className="row gy-30">
//                         <div className="col-lg-12">
//                             <div className={`display-layout-${viewMode} active`}>
//                                 <div className="row g-30">
//                                     {courses.map((course) => (
//                                         <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
//                                             <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
//                                                 {/* Course Thumbnail */}
//                                                 <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                     <div className="bd-course-badge">
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <div className="bd-course-rating-icon d-flex rating-color">
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star-half"></i>
//                                                             </div>
//                                                             <div className="bd-course-rating-text hidden">
//                                                                 <span>({course.rating}/5 Ratings)</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                         <img src={course.image} alt="Course Background" />
//                                                     </div>
//                                                     <div className="small-text bg-text-color">
//                                                         <span className="text-light">
//                                                             <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons} Lessons
//                                                         </span>
//                                                     </div>
//                                                     <div className="bd-course-overly-title fs-200 text-white">
//                                                         {course.category}
//                                                     </div>
//                                                 </div>
//                                                 {/* Course Content */}
//                                                 <div className="bd-course-content">
//                                                     <h5 className="bd-course-title underline mb-10">
//                                                         <Link to={`/course-details/${course.id}`}>{course.title}</Link>
//                                                     </h5>
//                                                     <p className="bd-course-description mb-10">{course.description}</p>
//                                                     <Link className="bd-btn btn-outline-primary-old" to={`/course-details/${course.id}`}>
//                                                         Enroll Now
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             {/* Load More Button */}
//                             {courses.length < allCourses.length && (
//                                 <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                     <button
//                                         className="bd-btn btn-outline-border-primary"
//                                         onClick={loadMoreCourses}
//                                         disabled={isLoading}
//                                     >
//                                         {isLoading ? "Loading..." : "Load More"}
//                                         <span className="right-icon">
//                                             {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
//                                         </span>
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Courses;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allCourses } from "../data/courses";

function Courses() {
    const [courses, setCourses] = useState(allCourses.slice(0, 6)); // Initial 6 courses
    const [viewMode, setViewMode] = useState("grid"); // State for grid or list view
    const [isLoading, setIsLoading] = useState(false); // State for loading more courses

    // Load more courses
    const loadMoreCourses = () => {
        setIsLoading(true);
        setTimeout(() => {
            setCourses(allCourses); // Load all courses
            setIsLoading(false);
        }, 1000); // Simulate network delay
    };

    // Custom cursor logic
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.classList.add("custom-cursor");
        document.body.appendChild(cursor);

        const handleMouseMove = (e) => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Add hover effect for bd-course-wrapper
        const courseWrappers = document.querySelectorAll(".bd-course-wrapper");
        courseWrappers.forEach((wrapper) => {
            wrapper.addEventListener("mouseenter", () => {
                cursor.classList.add("active");
            });
            wrapper.addEventListener("mouseleave", () => {
                cursor.classList.remove("active");
            });
        });

        // Cleanup
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.body.removeChild(cursor);
        };
    }, [courses]); // Re-run effect when courses change (e.g., after loading more)

    return (
        <>
            {/* Breadcrumb Section */}
            <div
                className="tekup-breadcrumb"
                style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
            >
                <div className="container">
                    <h1 className="post__title">Course</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li aria-current="page">Course</li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Course Section */}
            <section className="feature-course pt-120 pb-120" style={{ paddingTop: "20px", paddingBottom: "70px" }}>
                <div className="container">
                    {/* Course Heading */}
                    <div className="course-top heading-space d-flex align-items-end justify-content-between mb-30">
                        <div className="section-heading mb-0">
                            <h4 className="sub-heading wow fade-in-bottom hidden" data-wow-delay="200ms">
                                <span className="heading-icon">
                                    <i className="fas fa-bolt fa-solid"></i>
                                </span>
                                100+ unique online courses
                            </h4>
                            <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms" style={{ paddingTop: "10px", paddingBottom: "70px" }}>
                                Most popular courses
                            </h2>
                        </div>
                        {/* View Mode Toggle Buttons */}
                        <div className="bd-top-sorting-right d-flex">
                            <button
                                className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`}
                                onClick={() => setViewMode("grid")}
                            >
                                <i className="fa-solid fa-th-large"></i> Grid View
                            </button>
                            <button
                                className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`}
                                onClick={() => setViewMode("list")}
                            >
                                <i className="fa-solid fa-list"></i> List View
                            </button>
                        </div>
                    </div>

                    {/* Course List */}
                    <div className="row gy-30">
                        <div className="col-lg-12">
                            <div className={`display-layout-${viewMode} active`}>
                                <div className="row g-30">
                                    {courses.map((course) => (
                                        <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
                                            <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
                                                {/* Course Thumbnail */}
                                                <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
                                                    <div className="bd-course-badge">
                                                        <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
                                                            <div className="bd-course-rating-icon d-flex rating-color">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star-half"></i>
                                                            </div>
                                                            <div className="bd-course-rating-text hidden">
                                                                <span>({course.rating}/5 Ratings)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`bd-course-thumb-bg bg-${course.id}`}>
                                                        <img src={course.image} alt="Course Background" />
                                                    </div>
                                                    <div className="small-text bg-text-color">
                                                        <span className="text-light">
                                                            <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons} Lessons
                                                        </span>
                                                    </div>
                                                    <div className="bd-course-overly-title fs-200 text-white">
                                                        {course.category}
                                                    </div>
                                                </div>
                                                {/* Course Content */}
                                                <div className="bd-course-content">
                                                    <h5 className="bd-course-title underline mb-10">
                                                        <Link to={`/course-details/${course.id}`}>{course.title}</Link>
                                                    </h5>
                                                    <p className="bd-course-description mb-10">{course.description}</p>
                                                    <Link className="bd-btn btn-outline-primary-old" to={`/course-details/${course.id}`}>
                                                        Enroll Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Load More Button */}
                            {courses.length < allCourses.length && (
                                <div className="bd-course-more-btn d-flex justify-content-center mt-50">
                                    <button
                                        className="bd-btn btn-outline-border-primary"
                                        onClick={loadMoreCourses}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Loading..." : "Load More"}
                                        <span className="right-icon">
                                            {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
                                        </span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Courses;