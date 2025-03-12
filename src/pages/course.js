// import React, { useState } from "react";
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";
// import courseBg3 from "../assets/images/course-bg-3.webp";
// import courseBg4 from "../assets/images/course-bg-4.webp";
// import courseBg5 from "../assets/images/course-bg-5.webp";
// import courseBg6 from "../assets/images/course-bg-6.webp";
// import courseBg7 from "../assets/images/course-bg-7.webp";
// import courseBg8 from "../assets/images/course-bg-8.webp";
// import courseBg9 from "../assets/images/course-bg-9.webp";

// // Initial courses (First View)
// const initialCourses = [
//     {
//         id: 1,
//         title: "UI/UX Design for Beginners",
//         description: "Learn the fundamentals of UI/UX design and create stunning user interfaces.",
//         lessons: 35,
//         rating: 4.7,
//         category: "UI/UX",
//         discount: "15% Off",
//         image: courseBg1
//     },
//     {
//         id: 2,
//         title: "React JS from Scratch",
//         description: "Master React fundamentals with hands-on projects and real-world examples.",
//         lessons: 50,
//         rating: 4.8,
//         category: "Frontend Development",
//         discount: "20% Off",
//         image: courseBg2
//     }
// ];

// // More courses (After Clicking Load More)
// const moreCourses = [
//     {
//         id: 3,
//         title: "Full Stack JavaScript Bootcamp",
//         description: "Become a full-stack developer with JavaScript, Node.js, Express, and MongoDB.",
//         lessons: 65,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         image: courseBg3
//     },
//     {
//         id: 4,
//         title: "Advanced UI/UX Research & Prototyping",
//         description: "Enhance your UX research and prototyping skills for professional projects.",
//         lessons: 45,
//         rating: 4.6,
//         category: "UI/UX",
//         discount: "18% Off",
//         image: courseBg4
//     },
//     {
//         id: 5,
//         title: "HTML & CSS Mastery",
//         description: "Learn to build modern, responsive websites using HTML and CSS.",
//         lessons: 40,
//         rating: 4.8,
//         category: "Frontend Development",
//         discount: "15% Off",
//         image: courseBg5
//     },
//     {
//         id: 6,
//         title: "JavaScript Essentials for Web Development",
//         description: "Master JavaScript fundamentals to build dynamic web applications.",
//         lessons: 50,
//         rating: 4.8,
//         category: "Frontend Development",
//         discount: "20% Off",
//         image: courseBg6
//     },
//     {
//         id: 7,
//         title: "PHP & MySQL Web Development",
//         description: "Build dynamic, database-driven websites with PHP and MySQL.",
//         lessons: 55,
//         rating: 4.7,
//         category: "Backend Development",
//         discount: "18% Off",
//         image: courseBg7
//     },
//     {
//         id: 8,
//         title: "MongoDB for Beginners",
//         description: "Learn NoSQL database management with MongoDB and Mongoose.",
//         lessons: 45,
//         rating: 4.6,
//         category: "Database",
//         discount: "15% Off",
//         image: courseBg8
//     },
//     {
//         id: 9,
//         title: "SEO & Digital Marketing Strategies",
//         description: "Master SEO and digital marketing strategies to drive organic traffic.",
//         lessons: 40,
//         rating: 4.7,
//         category: "Marketing",
//         discount: "20% Off",
//         image: courseBg9
//     }
// ];


// function Courses() {
//     const [courses, setCourses] = useState(initialCourses);

//     const loadMoreCourses = () => {
//         setCourses([...courses, ...moreCourses]);
//     };

//     return (
//         <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
//             <div className="container">
//                 <div className="row g-30 align-items-center justify-content-between mb-30">
//                     <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
//                         <div className="bd-top-sorting-left">
//                             <h6 className="bd-sorting-item-found">
//                                 We found <span>{courses.length}</span> courses available for you
//                             </h6>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row gy-30">
//                     <div className="col-lg-12">
//                         {/* Course Grid */}
//                         <div className="display-layout-grid active">
//                             <div className="row g-30">
//                                 {courses.map((course) => (
//                                     <div key={course.id} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 courses__item ">
//                                         <div className="bd-course-wrapper style-two">
//                                             <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                 <div className="bd-course-badge">
//                                                     {/* <span className="bd-badge badge-warning">{course.discount}</span> */}
//                                                     <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
                                                        
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
//                                                 </div>
//                                                 <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                     <img src={course.image} alt="Course Background" />
//                                                 </div>
//                                                 <div className="small-text bg-text-color">
//                                                     {/* {course.category} */}
//                                                     <span className="text-light">
//                                                             <i className="fas fa-clock " style={{ color: "#ffffff" }}></i> {course.lessons}
//                                                         </span>
//                                                 </div>
//                                                 <div className="bd-course-overly-title fs-200 text-white">
//                                                     {course.category}
//                                                 </div>
//                                             </div>
//                                             <div className="bd-course-content">
//                                                 {/* <div className="bd-course-content-bottom mb-10">
//                                                     <div className="bd-course-lesson has-separator">
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <span>
//                                                                 <i className="fa-solid fa-clock"></i> {course.lessons} Lessons
//                                                             </span>
//                                                         </div>
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <div className="bd-course-rating-icon d-flex rating-color">
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star"></i>
//                                                                 <i className="fa-solid fa-star-half"></i>
//                                                             </div>
//                                                             <div className="bd-course-rating-text">
//                                                                 <span>({course.rating}/5 Ratings)</span>
//                                                             </div>
//                                                         </div>
//                                                      </div>
//                                                     </div> */}
//                                                 {/* <h5 className="bd-course-title underline mb-10">
//                                                     <a href="courses-details.html">{course.title}</a>
//                                                 </h5> */}
//                                                 <div className="bd-course-title-wrapper" style={{ minHeight: "70px", display: "flex", alignItems: "center" }}>
//                                                     <h5 className="bd-course-title underline mb-10" style={{ margin: "0", lineHeight: "1.4" }}>
//                                                         <a href="courses-details.html">{course.title}</a>
//                                                     </h5>
//                                                 </div>
//                                                 <p className="bd-course-description mb-10" style={{ fontSize: course.title.length > 40 ? "18px" : "20px" }}>{course.description}</p>
//                                                 <div className="bd-course-btn-old tekup-default-btn" style={{ textAlign: "left", borderRadius: "5px", paddingTop: "10px", paddingBottom: "13px" }}>
//                                                     <a className="bd-btn-old btn-outline-primary-old" href="courses-details.html" style={{ display: "inline-block", color: "#fff", width: "auto", paddingTop: "5px", minWidth: "120px" }}>
//                                                         Enroll Now
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         {/* Course Grid End */}

//                         {/* Load More Button */}
//                         {courses.length < 5 && (
//                             <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                 <button className="bd-btn btn-outline-border-primary" onClick={loadMoreCourses}>
//                                     Load More
//                                     <span className="right-icon">
//                                         <i className="fa-solid fa-spinner fa-spin"></i>
//                                     </span>
//                                 </button>
//                             </div>
//                         )}
//                         {/* Load More End */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Courses;



// import React, { useState } from "react";
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";
// import courseBg3 from "../assets/images/course-bg-3.webp";

// const allCourses = [
//     {
//         id: 1,
//         title: "UI/UX Design for Beginners",
//         description: "Learn the fundamentals of UI/UX design and create stunning user interfaces.",
//         lessons: 35,
//         rating: 4.7,
//         category: "UI/UX",
//         discount: "15% Off",
//         image: courseBg1
//     },
//     {
//         id: 2,
//         title: "React JS from Scratch",
//         description: "Master React fundamentals with hands-on projects and real-world examples.",
//         lessons: 50,
//         rating: 4.8,
//         category: "Frontend Development",
//         discount: "20% Off",
//         image: courseBg2
//     },
//     {
//         id: 3,
//         title: "Full Stack JavaScript Bootcamp",
//         description: "Become a full-stack developer with JavaScript, Node.js, Express, and MongoDB.",
//         lessons: 65,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         image: courseBg3
//     }
// ];

// function Courses() {
//     const [viewType, setViewType] = useState("grid");

//     return (
//         <section className="bd-course-area section-space" style={{ paddingTop: "100px", paddingBottom: "70px" }}>
//             <div className="container">
//                 <div className="row align-items-center justify-content-between mb-30">
//                     <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
//                         <div className="bd-top-sorting-left">
//                             <h6 className="bd-sorting-item-found">
//                                 We found <span>{allCourses.length}</span> courses available for you
//                             </h6>
//                         </div>
//                         <div>
//                             <button className="btn btn-sm btn-primary me-2" onClick={() => setViewType("grid")}>Grid View</button>
//                             <button className="btn btn-sm btn-secondary" onClick={() => setViewType("list")}>List View</button>
//                         </div>
//                     </div>
//                 </div>

//                 {viewType === "grid" ? (
//                     <div className="row">
//                         {allCourses.map((course) => (
//                             <div key={course.id} className="col-lg-4 col-md-6 mb-4">
//                                 <div className="bd-course-wrapper p-3 border rounded">
//                                     <div className="bd-course-thumb-wrapper mb-3">
//                                         <img src={course.image} alt={course.title} className="img-fluid rounded" />
//                                     </div>
//                                     <h5 className="bd-course-title mb-2">
//                                         <a href="courses-details.html">{course.title}</a>
//                                     </h5>
//                                     <p className="bd-course-description mb-2" style={{ fontSize: "16px" }}>
//                                         {course.description}
//                                     </p>
//                                     <div className="d-flex align-items-center justify-content-between">
//                                         <span><i className="fa-solid fa-clock"></i> {course.lessons} Lessons</span>
//                                         <span className="text-warning"><i className="fa-solid fa-star"></i> {course.rating}/5</span>
//                                         <span className="badge bg-success">{course.discount}</span>
//                                     </div>
//                                     <div className="mt-3">
//                                         <a className="btn btn-primary btn-sm" href="courses-details.html">Enroll Now</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="row">
//                         {allCourses.map((course) => (
//                             <div key={course.id} className="col-12 mb-4">
//                                 <div className="bd-course-wrapper d-flex align-items-center p-3 border rounded">
//                                     <div className="bd-course-thumb-wrapper me-4" style={{ width: "180px", height: "120px" }}>
//                                         <img src={course.image} alt={course.title} className="img-fluid rounded" />
//                                     </div>
//                                     <div className="bd-course-content flex-grow-1">
//                                         <h5 className="bd-course-title mb-2">
//                                             <a href="courses-details.html">{course.title}</a>
//                                         </h5>
//                                         <p className="bd-course-description mb-2" style={{ fontSize: "16px" }}>
//                                             {course.description}
//                                         </p>
//                                         <div className="d-flex align-items-center justify-content-between">
//                                             <span><i className="fa-solid fa-clock"></i> {course.lessons} Lessons</span>
//                                             <span className="text-warning"><i className="fa-solid fa-star"></i> {course.rating}/5</span>
//                                             <span className="badge bg-success">{course.discount}</span>
//                                             <a className="btn btn-primary btn-sm" href="courses-details.html">Enroll Now</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }

// export default Courses;
/*

import React, { useState } from "react";
import courseBg1 from "../assets/images/course-bg-1.webp";
import courseBg2 from "../assets/images/course-bg-2.webp";
import courseBg3 from "../assets/images/course-bg-3.webp";
import courseBg4 from "../assets/images/course-bg-4.webp";
import courseBg5 from "../assets/images/course-bg-5.webp";
import courseBg6 from "../assets/images/course-bg-6.webp";
import courseBg7 from "../assets/images/course-bg-7.webp";
import courseBg8 from "../assets/images/course-bg-8.webp";
import courseBg9 from "../assets/images/course-bg-9.webp";

// Initial Courses Data
const initialCourses = [
    { id: 1, title: "UI/UX Design for Beginners", description: "Learn UI/UX basics.", lessons: 35, rating: 4.7, category: "UI/UX", discount: "15% Off", image: courseBg1 },
    { id: 2, title: "React JS from Scratch", description: "Master React fundamentals.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg2 }
];

// More Courses Data
const moreCourses = [
    { id: 3, title: "Full Stack JavaScript Bootcamp", description: "Full-stack JavaScript.", lessons: 65, rating: 4.9, category: "Full Stack", discount: "25% Off", image: courseBg3 },
    { id: 4, title: "Advanced UI/UX Research", description: "Enhance UX research skills.", lessons: 45, rating: 4.6, category: "UI/UX", discount: "18% Off", image: courseBg4 },
    { id: 5, title: "HTML & CSS Mastery", description: "Modern web design.", lessons: 40, rating: 4.8, category: "Frontend", discount: "15% Off", image: courseBg5 },
    { id: 6, title: "JavaScript Essentials", description: "Master JavaScript.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg6 },
    { id: 7, title: "PHP & MySQL Development", description: "Backend web development.", lessons: 55, rating: 4.7, category: "Backend", discount: "18% Off", image: courseBg7 },
    { id: 8, title: "MongoDB for Beginners", description: "NoSQL with MongoDB.", lessons: 45, rating: 4.6, category: "Database", discount: "15% Off", image: courseBg8 },
    { id: 9, title: "SEO & Digital Marketing", description: "SEO & marketing strategies.", lessons: 40, rating: 4.7, category: "Marketing", discount: "20% Off", image: courseBg9 }
];

function Courses() {
    const [courses, setCourses] = useState(initialCourses || []);

    const loadMoreCourses = () => {
        setCourses((prevCourses) => [...prevCourses, ...moreCourses]);
    };

    return (
        <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
            <div className="container">
                <div className="row g-30 align-items-center justify-content-between mb-30">
                    <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
                        <div className="bd-top-sorting-left">
                            <h6 className="bd-sorting-item-found">
                                We found <span>{courses?.length || 0}</span> courses available for you
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="row gy-30">
                    <div className="col-lg-12">
                        <div className="display-layout-grid active">
                            <div className="row g-30">
                                {courses.map((course) => (
                                    <div key={course.id} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 courses__item">
                                        <div className="bd-course-wrapper style-two">
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
                                                        <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons}
                                                    </span>
                                                </div>
                                                <div className="bd-course-overly-title fs-200 text-white">
                                                    {course.category}
                                                </div>
                                            </div>
                                            <div className="bd-course-content">
                                                <div className="bd-course-title-wrapper" style={{ minHeight: "70px", display: "flex", alignItems: "center" }}>
                                                    <h5 className="bd-course-title underline mb-10" style={{ margin: "0", lineHeight: "1.4" }}>
                                                        <a href="courses-details.html">{course.title}</a>
                                                    </h5>
                                                </div>
                                                <p className="bd-course-description mb-10" style={{ fontSize: course.title.length > 40 ? "18px" : "20px" }}>{course.description}</p>
                                                <div className="bd-course-btn-old tekup-default-btn" style={{ textAlign: "left", borderRadius: "5px", paddingTop: "10px", paddingBottom: "13px" }}>
                                                    <a className="bd-btn-old btn-outline-primary-old" href="courses-details.html" style={{ display: "inline-block", color: "#fff", width: "auto", paddingTop: "5px", minWidth: "120px" }}>
                                                        Enroll Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {courses.length < 9 && (
                            <div className="bd-course-more-btn d-flex justify-content-center mt-50">
                                <button className="bd-btn btn-outline-border-primary" onClick={loadMoreCourses}>
                                    Load More
                                    <span className="right-icon">
                                        <i className="fa-solid fa-spinner fa-spin"></i>
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Courses;
*/

// import React, { useState } from "react";
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";
// import courseBg3 from "../assets/images/course-bg-3.webp";
// import courseBg4 from "../assets/images/course-bg-4.webp";
// import courseBg5 from "../assets/images/course-bg-5.webp";
// import courseBg6 from "../assets/images/course-bg-6.webp";
// import courseBg7 from "../assets/images/course-bg-7.webp";
// import courseBg8 from "../assets/images/course-bg-8.webp";
// import courseBg9 from "../assets/images/course-bg-9.webp";

// // Initial Courses Data
// const initialCourses = [
//     { id: 1, title: "UI/UX Design for Beginners", description: "Learn UI/UX basics.", lessons: 35, rating: 4.7, category: "UI/UX", discount: "15% Off", image: courseBg1 },
//     { id: 2, title: "React JS from Scratch", description: "Master React fundamentals.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg2 }
// ];

// // More Courses Data
// const moreCourses = [
//     { id: 3, title: "Full Stack JavaScript Bootcamp", description: "Full-stack JavaScript.", lessons: 65, rating: 4.9, category: "Full Stack", discount: "25% Off", image: courseBg3 },
//     { id: 4, title: "Advanced UI/UX Research", description: "Enhance UX research skills.", lessons: 45, rating: 4.6, category: "UI/UX", discount: "18% Off", image: courseBg4 },
//     { id: 5, title: "HTML & CSS Mastery", description: "Modern web design.", lessons: 40, rating: 4.8, category: "Frontend", discount: "15% Off", image: courseBg5 },
//     { id: 6, title: "JavaScript Essentials", description: "Master JavaScript.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg6 },
//     { id: 7, title: "PHP & MySQL Development", description: "Backend web development.", lessons: 55, rating: 4.7, category: "Backend", discount: "18% Off", image: courseBg7 },
//     { id: 8, title: "MongoDB for Beginners", description: "NoSQL with MongoDB.", lessons: 45, rating: 4.6, category: "Database", discount: "15% Off", image: courseBg8 },
//     { id: 9, title: "SEO & Digital Marketing", description: "SEO & marketing strategies.", lessons: 40, rating: 4.7, category: "Marketing", discount: "20% Off", image: courseBg9 }
// ];

// function Courses() {
//     const [courses, setCourses] = useState(initialCourses || []);
//     const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

//     const loadMoreCourses = () => {
//         setCourses((prevCourses) => [...prevCourses, ...moreCourses]);
//     };

//     return (
//         <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
//             <div className="container">
//                 <div className="row g-30 align-items-center justify-content-between mb-30">
//                     <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
//                         <div className="bd-top-sorting-left">
//                             <h6 className="bd-sorting-item-found">
//                                 We found <span>{courses?.length || 0}</span> courses available for you
//                             </h6>
//                         </div>
//                         <div className="bd-top-sorting-right d-flex">
//                             <button className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}>
//                                 <i className="fa-solid fa-th-large"></i> Grid View
//                             </button>
//                             <button className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")}>
//                                 <i className="fa-solid fa-list"></i> List View
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row gy-30">
//                     <div className="col-lg-12">
//                         <div className={`display-layout-${viewMode} active`}>
//                             <div className="row g-30">
//                                 {courses.map((course) => (
//                                     <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
//                                         <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
//                                             <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                 <div className="bd-course-badge">
//                                                     <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                         <div className="bd-course-rating-icon d-flex rating-color">
//                                                             <i className="fa-solid fa-star"></i>
//                                                             <i className="fa-solid fa-star"></i>
//                                                             <i className="fa-solid fa-star"></i>
//                                                             <i className="fa-solid fa-star"></i>
//                                                             <i className="fa-solid fa-star-half"></i>
//                                                         </div>
//                                                         <div className="bd-course-rating-text hidden">
//                                                             <span>({course.rating}/5 Ratings)</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                     <img src={course.image} alt="Course Background" />
//                                                 </div>
//                                                 <div className="small-text bg-text-color">
//                                                     <span className="text-light">
//                                                         <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons}
//                                                     </span>
//                                                 </div>
//                                                 <div className="bd-course-overly-title fs-200 text-white">
//                                                     {course.category}
//                                                 </div>
//                                             </div>
//                                             <div className="bd-course-content">
//                                                 <h5 className="bd-course-title underline mb-10">
//                                                     <a href="courses-details.html">{course.title}</a>
//                                                 </h5>
//                                                 <p className="bd-course-description mb-10">{course.description}</p>
//                                                 <a className="bd-btn btn-outline-primary-old" href="courses-details.html">
//                                                     Enroll Now
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {courses.length < 9 && (
//                             <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                 <button className="bd-btn btn-outline-border-primary" onClick={loadMoreCourses}>
//                                     Load More
//                                     <span className="right-icon">
//                                         <i className="fa-solid fa-spinner fa-spin"></i>
//                                     </span>
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Courses;



// import React, { useState } from "react";
// import { Link } from "react-router";
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";
// import courseBg3 from "../assets/images/course-bg-3.webp";
// import courseBg4 from "../assets/images/course-bg-4.webp";
// import courseBg5 from "../assets/images/course-bg-5.webp";
// import courseBg6 from "../assets/images/course-bg-6.webp";
// import courseBg7 from "../assets/images/course-bg-7.webp";
// import courseBg8 from "../assets/images/course-bg-8.webp";
// import courseBg9 from "../assets/images/course-bg-9.webp";

// const initialCourses = [
//     { id: 1, title: "UI/UX Design for Beginners", description: "Learn UI/UX basics.", lessons: 35, rating: 4.7, category: "UI/UX", discount: "15% Off", image: courseBg1 },
//     { id: 2, title: "React JS from Scratch", description: "Master React fundamentals.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg2 }
// ];

// const moreCourses = [
//     { id: 3, title: "Full Stack JavaScript Bootcamp", description: "Full-stack JavaScript.", lessons: 65, rating: 4.9, category: "Full Stack", discount: "25% Off", image: courseBg3 },
//     { id: 4, title: "Advanced UI/UX Research", description: "Enhance UX research skills.", lessons: 45, rating: 4.6, category: "UI/UX", discount: "18% Off", image: courseBg4 },
//     { id: 5, title: "HTML & CSS Mastery", description: "Modern web design.", lessons: 40, rating: 4.8, category: "Frontend", discount: "15% Off", image: courseBg5 },
//     { id: 6, title: "JavaScript Essentials", description: "Master JavaScript.", lessons: 50, rating: 4.8, category: "Frontend", discount: "20% Off", image: courseBg6 },
//     { id: 7, title: "PHP & MySQL Development", description: "Backend web development.", lessons: 55, rating: 4.7, category: "Backend", discount: "18% Off", image: courseBg7 },
//     { id: 8, title: "MongoDB for Beginners", description: "NoSQL with MongoDB.", lessons: 45, rating: 4.6, category: "Database", discount: "15% Off", image: courseBg8 },
//     { id: 9, title: "SEO & Digital Marketing", description: "SEO & marketing strategies.", lessons: 40, rating: 4.7, category: "Marketing", discount: "20% Off", image: courseBg9 }
// ];

// function Courses() {
//     const [courses, setCourses] = useState(initialCourses || []);
//     const [viewMode, setViewMode] = useState("grid");

//     const loadMoreCourses = () => {
//         setCourses((prevCourses) => [...prevCourses, ...moreCourses]);
//     };

//     return (
//         <>
//         <div
//         className="tekup-breadcrumb"
//         style={{ backgroundImage: 'url(/assets/images/hero/about-us.jpg)' }}
//       >
//         <div className="container">
//           <h1 className="post__title">Course</h1>
//           <nav className="breadcrumbs" aria-label="Breadcrumb">
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li aria-current="page">Course</li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//         <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
//             <div className="container">
//                 <div className="row g-30 align-items-center justify-content-between mb-30">
//                     <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
//                         <div className="bd-top-sorting-left">
//                             <h6 className="bd-sorting-item-found">
//                                 We found <span>{courses?.length || 0}</span> courses available for you
//                             </h6>
//                         </div>
//                         <div className="bd-top-sorting-right d-flex">
//                             <button className={`bd-view-toggle ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}>
//                                 <i className="fa-solid fa-th-large"></i> Grid View
//                             </button>
//                             <button className={`bd-view-toggle ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")}>
//                                 <i className="fa-solid fa-list"></i> List View
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row gy-30">
//                     <div className="col-lg-12">
//                         <div className={`display-layout-${viewMode} active`}>
//                             <div className="row g-30">
//                                 {courses.map((course) => (
//                                     <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
//                                         <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""}`}>
//                                             <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                 <div className="bd-course-badge">
//                                                     <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                         <div className="bd-course-rating-icon d-flex rating-color">
//                                                             <i className="fa-solid fa-star"></i>
//                                                             <i className="fa-solid fa-star"></i>
//                                                             <i className="fa-solid fa-star"></i>
//                                                             <i className="fa-solid fa-star"></i>
//                                                             <i className="fa-solid fa-star-half"></i>
//                                                         </div>
//                                                         <div className="bd-course-rating-text hidden">
//                                                             <span>({course.rating}/5 Ratings)</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                     <img src={course.image} alt="Course Background" />
//                                                 </div>
//                                                 <div className="small-text bg-text-color">
//                                                     <span className="text-light">
//                                                         <i className="fas fa-clock" style={{ color: "#ffffff" }}></i> {course.lessons}
//                                                     </span>
//                                                 </div>
//                                                 <div className="bd-course-overly-title fs-200 text-white">
//                                                     {course.category}
//                                                 </div>
//                                             </div>
//                                             <div className="bd-course-content">
//                                                 <h5 className="bd-course-title underline mb-10">
//                                                     <a href={`/course-details/${course.id}`}>{course.title}</a>
//                                                 </h5>
//                                                 <p className="bd-course-description mb-10">{course.description}</p>
//                                                 <a className="bd-btn btn-outline-primary-old" href={`/course-details/${course.id}`}>
//                                                     Enroll Now
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         {courses.length < 9 && (
//                             <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                 <button className="bd-btn btn-outline-border-primary" onClick={loadMoreCourses}>
//                                     Load More
//                                     <span className="right-icon">
//                                         <i className="fa-solid fa-spinner fa-spin"></i>
//                                     </span>
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </>
//     );
// }

// export default Courses;


// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Fixed import
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";
// import courseBg3 from "../assets/images/course-bg-3.webp";
// import courseBg4 from "../assets/images/course-bg-4.webp";
// import courseBg5 from "../assets/images/course-bg-5.webp";
// import courseBg6 from "../assets/images/course-bg-6.webp";
// import courseBg7 from "../assets/images/course-bg-7.webp";
// import courseBg8 from "../assets/images/course-bg-8.webp";
// import courseBg9 from "../assets/images/course-bg-9.webp";

// const initialCourses = [
//     {
//         id: 1,
//         title: "UI/UX Design for Beginners",
//         description: "Learn the fundamentals of UI/UX design, including user research, wireframing, and prototyping. Perfect for beginners looking to start a career in design.",
//         lessons: 35,
//         rating: 4.7,
//         category: "UI/UX",
//         discount: "15% Off",
//         image: courseBg1,
//     },
//     {
//         id: 2,
//         title: "React JS from Scratch",
//         description: "Master React JS with hands-on projects. Learn components, hooks, state management, and build dynamic web applications.",
//         lessons: 50,
//         rating: 4.8,
//         category: "Frontend",
//         discount: "20% Off",
//         image: courseBg2,
//     },
// ];

// const moreCourses = [
//     {
//         id: 3,
//         title: "Full Stack JavaScript Bootcamp",
//         description: "Become a full-stack developer by learning JavaScript, Node.js, Express, and MongoDB. Build real-world projects and deploy them.",
//         lessons: 65,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         image: courseBg3,
//     },
//     {
//         id: 4,
//         title: "Advanced UI/UX Research",
//         description: "Dive deep into advanced UI/UX research techniques, usability testing, and design psychology to create user-centered designs.",
//         lessons: 45,
//         rating: 4.6,
//         category: "UI/UX",
//         discount: "18% Off",
//         image: courseBg4,
//     },
//     {
//         id: 5,
//         title: "HTML & CSS Mastery",
//         description: "Learn modern web design with HTML5 and CSS3. Build responsive, accessible, and visually stunning websites.",
//         lessons: 40,
//         rating: 4.8,
//         category: "Frontend",
//         discount: "15% Off",
//         image: courseBg5,
//     },
//     {
//         id: 6,
//         title: "JavaScript Essentials",
//         description: "Master JavaScript fundamentals, including ES6+ features, DOM manipulation, and asynchronous programming.",
//         lessons: 50,
//         rating: 4.8,
//         category: "Frontend",
//         discount: "20% Off",
//         image: courseBg6,
//     },
//     {
//         id: 7,
//         title: "PHP & MySQL Development",
//         description: "Learn backend development with PHP and MySQL. Build dynamic web applications and manage databases effectively.",
//         lessons: 55,
//         rating: 4.7,
//         category: "Backend",
//         discount: "18% Off",
//         image: courseBg7,
//     },
//     {
//         id: 8,
//         title: "MongoDB for Beginners",
//         description: "Get started with MongoDB, a NoSQL database. Learn CRUD operations, indexing, and data modeling for modern applications.",
//         lessons: 45,
//         rating: 4.6,
//         category: "Database",
//         discount: "15% Off",
//         image: courseBg8,
//     },
//     {
//         id: 9,
//         title: "SEO & Digital Marketing",
//         description: "Master SEO strategies, content marketing, and social media advertising to drive traffic and grow your online presence.",
//         lessons: 40,
//         rating: 4.7,
//         category: "Marketing",
//         discount: "20% Off",
//         image: courseBg9,
//     },
// ];

// function Courses() {
//     const [courses, setCourses] = useState(initialCourses || []);
//     const [viewMode, setViewMode] = useState("grid");
//     const [isLoading, setIsLoading] = useState(false); // Loading state for "Load More"

//     const loadMoreCourses = () => {
//         setIsLoading(true); // Start loading
//         setTimeout(() => {
//             setCourses((prevCourses) => [...prevCourses, ...moreCourses]);
//             setIsLoading(false); // Stop loading
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
//             <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
//                 <div className="container">
//                     <div className="row g-30 align-items-center justify-content-between mb-30">
//                         <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
//                             <div className="bd-top-sorting-left">
//                                 <h6 className="bd-sorting-item-found">
//                                     We found <span>{courses?.length || 0}</span> courses available for you
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
//                             {courses.length < 9 && (
//                                 <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                     <button
//                                         className="bd-btn btn-outline-border-primary"
//                                         onClick={loadMoreCourses}
//                                         disabled={isLoading} // Disable button while loading
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


import React, { useState } from "react";
import { Link } from "react-router-dom";
import courseBg1 from "../assets/images/course-bg-1.webp";
import courseBg2 from "../assets/images/course-bg-2.webp";
import courseBg3 from "../assets/images/course-bg-3.webp";
import courseBg4 from "../assets/images/course-bg-4.webp";
import courseBg5 from "../assets/images/course-bg-5.webp";
import courseBg6 from "../assets/images/course-bg-6.webp";
import courseBg7 from "../assets/images/course-bg-7.webp";
import courseBg8 from "../assets/images/course-bg-8.webp";
import courseBg9 from "../assets/images/course-bg-9.webp";

const allCourses = [
    {
        id: 1,
        title: "UI/UX Design for Beginners",
        description: "Learn the fundamentals of UI/UX design, including user research, wireframing, and prototyping. Perfect for beginners looking to start a career in design.",
        lessons: 35,
        rating: 4.7,
        category: "UI/UX",
        discount: "15% Off",
        image: courseBg1,
    },
    {
        id: 2,
        title: "React JS from Scratch",
        description: "Master React JS with hands-on projects. Learn components, hooks, state management, and build dynamic web applications.",
        lessons: 50,
        rating: 4.8,
        category: "Frontend",
        discount: "20% Off",
        image: courseBg2,
    },
    {
        id: 3,
        title: "Full Stack JavaScript Bootcamp",
        description: "Become a full-stack developer by learning JavaScript, Node.js, Express, and MongoDB. Build real-world projects and deploy them.",
        lessons: 65,
        rating: 4.9,
        category: "Full Stack",
        discount: "25% Off",
        image: courseBg3,
    },
    {
        id: 4,
        title: "Advanced UI/UX Research",
        description: "Dive deep into advanced UI/UX research techniques, usability testing, and design psychology to create user-centered designs.",
        lessons: 45,
        rating: 4.6,
        category: "UI/UX",
        discount: "18% Off",
        image: courseBg4,
    },
    {
        id: 5,
        title: "HTML & CSS Mastery",
        description: "Learn modern web design with HTML5 and CSS3. Build responsive, accessible, and visually stunning websites.",
        lessons: 40,
        rating: 4.8,
        category: "Frontend",
        discount: "15% Off",
        image: courseBg5,
    },
    {
        id: 6,
        title: "JavaScript Essentials",
        description: "Master JavaScript fundamentals, including ES6+ features, DOM manipulation, and asynchronous programming.",
        lessons: 50,
        rating: 4.8,
        category: "Frontend",
        discount: "20% Off",
        image: courseBg6,
    },
    {
        id: 7,
        title: "PHP & MySQL Development",
        description: "Learn backend development with PHP and MySQL. Build dynamic web applications and manage databases effectively.",
        lessons: 55,
        rating: 4.7,
        category: "Backend",
        discount: "18% Off",
        image: courseBg7,
    },
    {
        id: 8,
        title: "MongoDB for Beginners",
        description: "Get started with MongoDB, a NoSQL database. Learn CRUD operations, indexing, and data modeling for modern applications.",
        lessons: 45,
        rating: 4.6,
        category: "Database",
        discount: "15% Off",
        image: courseBg8,
    },
    {
        id: 9,
        title: "SEO & Digital Marketing",
        description: "Master SEO strategies, content marketing, and social media advertising to drive traffic and grow your online presence.",
        lessons: 40,
        rating: 4.7,
        category: "Marketing",
        discount: "20% Off",
        image: courseBg9,
    },
];

function Courses() {
    const [courses, setCourses] = useState(allCourses.slice(0, 3)); // Initial 3 courses
    const [viewMode, setViewMode] = useState("grid");
    const [isLoading, setIsLoading] = useState(false);

    const loadMoreCourses = () => {
        setIsLoading(true);
        setTimeout(() => {
            setCourses(allCourses); // Load all courses
            setIsLoading(false);
        }, 1000); // Simulate network delay
    };

    return (
        <>
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
            <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
                <div className="container">
                    <div className="row g-30 align-items-center justify-content-between mb-30">
                        <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
                            <div className="bd-top-sorting-left">
                                <h6 className="bd-sorting-item-found">
                                    We found <span>{courses.length}</span> courses available for you
                                </h6>
                            </div>
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
                    </div>

                    <div className="row gy-30">
                        <div className="col-lg-12">
                            <div className={`display-layout-${viewMode} active`}>
                                <div className="row g-30">
                                    {courses.map((course) => (
                                        <div key={course.id} className={`courses__item ${viewMode === "grid" ? "col-xxl-4 col-xl-6 col-lg-6 col-md-6" : "col-12"}`}>
                                            <div className={`bd-course-wrapper style-two ${viewMode === "list" ? "list-style" : ""} fade-in`}>
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
                                                        <img src={course.image} alt="Course Background" className="zoom-in" />
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
                                                <div className="bd-course-content">
                                                    <h5 className="bd-course-title underline mb-10">
                                                        <Link to={`/course-details/${course.id}`}>{course.title}</Link>
                                                    </h5>
                                                    <p className="bd-course-description mb-10">{course.description}</p>
                                                    <Link className="bd-btn btn-outline-primary-old pulse" to={`/course-details/${course.id}`}>
                                                        Enroll Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {courses.length < allCourses.length && (
                                <div className="bd-course-more-btn d-flex justify-content-center mt-50">
                                    <button
                                        className="bd-btn btn-outline-border-primary slide-in"
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