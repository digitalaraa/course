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
                            <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms" style={{ paddingTop: "10px", paddingLeft: "10px", paddingBottom: "20px" }}>
                                Most popular courses
                            </h2>
                        </div>
                        {/* View Mode Toggle Buttons */}
                        <div className="bd-top-sorting-right d-flex hidden">
                            <button
                                className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`}
                                onClick={() => setViewMode("grid")}
                            >
                                <i className="fa-solid fa-th-large"></i> Grid View
                            </button>
                            <button
                                className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`}
                                onClick={() => setViewMode("grid")}
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