// import React from "react";
// import courseBg1 from "../assets/images/course-bg-1.webp";
// import courseBg2 from "../assets/images/course-bg-2.webp";
// import courseBg3 from "../assets/images/course-bg-3.webp";
// import courseBg4 from "../assets/images/course-bg-4.webp";
// import courseBg5 from "../assets/images/course-bg-5.webp";
// import courseBg6 from "../assets/images/course-bg-6.webp";
// import courseBg7 from "../assets/images/course-bg-7.webp";
// import courseBg8 from "../assets/images/course-bg-8.webp";
// import courseBg9 from "../assets/images/course-bg-9.webp";

// function Courses() {
//     return (
//         <section className="bd-course-area section-space" style={{ paddingTop: "260px"}}>
//         <div className="container">
//           <div className="row g-30 align-items-center justify-content-between mb-30">
//             <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
//               <div className="bd-top-sorting-left">
//                 <h6 className="bd-sorting-item-found">
//                   We found <span>14</span> courses available for you
//                 </h6>
//               </div>
//             </div>
//           </div>
//           <div className="row gy-30">
//             <div className="col-lg-12">
//               {/* course grid style */}
//               <div className="display-layout-grid active">
//                 <div className="row g-30">
//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-1">
//                         <img src={courseBg1} alt="Course Background" />
//                         </div>
//                         <div className="bd-course-thumb-instructor center">
//                           {/* <img
//                             src="assets/images/course/course-instructor-1.webp"
//                             alt="instructor"
//                           /> */}
//                         </div>
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-2">
//                         <img src={courseBg2} alt="Course Background" />
//                         </div>
                       
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-3">
//                         <img src={courseBg3} alt="Course Background" />
//                         </div>
                       
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-4">
//                         <img src={courseBg4} alt="Course Background" />
//                         </div>
                       
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-5">
//                         <img src={courseBg5} alt="Course Background" />
//                         </div>
                       
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-6">
//                         <img src={courseBg6} alt="Course Background" />
//                         </div>
                       
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
                 

//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-7">
//                         <img src={courseBg7} alt="Course Background" />
//                         </div>
                        
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-8">
//                         <img src={courseBg8} alt="Course Background" />
//                         </div>
                       
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                   <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                     <div className="bd-course-wrapper style-two">
//                       <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                         <div className="bd-course-badge">
//                           <a className="bd-badge badge-warning" href="#">
//                             20% Off
//                           </a>
//                         </div>
//                         <div className="bd-course-thumb-bg bg-9">
//                         <img src={courseBg9} alt="Course Background" />
//                         </div>
                        
//                         <div className="small-text bg-text-color">
//                           Getting Started
//                         </div>
//                         <div className="bd-course-overly-title fs-200 text-white">
//                           UI/UX
//                         </div>
//                       </div>
//                       <div className="bd-course-content">
//                         <div className="bd-course-content-bottom mb-10">
//                           <div className="bd-course-lesson has-separator">
//                             <span>
//                               <i className="fa-light fa-clock" /> 45 Lessons
//                             </span>
//                           </div>
//                         </div>
//                         <h5 className="bd-course-title underline mb-10">
//                           <a href="courses-details.html">
//                             Master Data Science from Scratch
//                           </a>
//                         </h5>
//                         <p className="bd-course-description mb-10">
//                           Empower your career with data science skills that are in
//                           high demand across industries.
//                         </p>
//                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                           <div className="bd-course-rating-icon d-flex rating-color">
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star" />
//                             <i className="fa-solid fa-star-half" />
//                           </div>
//                           <div className="bd-course-rating-text">
//                             <span>( 4.8/5 Ratings )</span>
//                           </div>
//                         </div>
//                         <div className="bd-course-btn">
//                           <a
//                             className="bd-btn btn-outline-primary"
//                             href="courses-details.html"
//                           >
//                             Enroll Now
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                 </div>
//               </div>
//               {/* course grid style end */}
            
//               {/* course list style end */}
//               {/* course-more style */}
//               <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                 <a className="bd-btn btn-outline-border-primary" href="#">
//                   Load More{" "}
//                   <span className="right-icon">
//                     <i className="fa-duotone fa-spinner" />
//                   </span>
//                 </a>
//               </div>
//               {/* course-more style end */}
//             </div>
           
//           </div>
//         </div>
//       </section>
      
//     )
// }

// export default Courses;
// import React, { useState } from "react";
// import courseBg1 from "../assets/images/course-bg-1.webp";

// // Dummy course data (replace with API call if needed)
// const initialCourses = [
//     {
//         id: 1,
//         title: "Master Data Science from Scratch",
//         description: "Empower your career with data science skills that are in high demand across industries.",
//         lessons: 45,
//         rating: 4.8,
//         category: "UI/UX",
//         discount: "20% Off",
//         image: courseBg1
//     },
//     {
//         id: 2,
//         title: "Complete React Developer Course",
//         description: "Master modern React with hooks, context, and advanced state management.",
//         lessons: 52,
//         rating: 4.7,
//         category: "Frontend Development",
//         discount: "30% Off",
//         image: courseBg1
//     }
// ];

// // More dummy courses for "Load More"
// const moreCourses = [
//     {
//         id: 3,
//         title: "Full Stack Web Development Bootcamp",
//         description: "Learn frontend & backend technologies, databases, and deployment.",
//         lessons: 60,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         image: courseBg1
//     }
// ];

// function Courses() {
//     const [courses, setCourses] = useState(initialCourses);

//     const loadMoreCourses = () => {
//         setCourses([...courses, ...moreCourses]);
//     };

//     return (
//         <section className="bd-course-area section-space" style={{ paddingTop: "260px" }}>
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
//                                     <div key={course.id} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                                         <div className="bd-course-wrapper style-two">
//                                             <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                 <div className="bd-course-badge">
//                                                     <span className="bd-badge badge-warning">{course.discount}</span>
//                                                 </div>
//                                                 <div
//                                                     className="bd-course-thumb-bg"
//                                                     style={{
//                                                         backgroundImage: `url(${course.image})`,
//                                                         backgroundSize: "cover",
//                                                         backgroundPosition: "center"
//                                                     }}
//                                                 ></div>
//                                                 <div className="small-text bg-text-color">{course.category}</div>
//                                                 <div className="bd-course-overly-title fs-200 text-white">
//                                                     {course.category}
//                                                 </div>
//                                             </div>
//                                             <div className="bd-course-content">
//                                                 <div className="bd-course-content-bottom mb-10">
//                                                     <div className="bd-course-lesson has-separator">
//                                                     <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">    
//                                                         <span>
//                                                             <i className="fa-solid fa-clock"></i> {course.lessons} Lessons
//                                                         </span>
//                                                     </div>    
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                     <div className="bd-course-rating-icon d-flex rating-color">
//                                                         <i className="fa-solid fa-star"></i>
//                                                         <i className="fa-solid fa-star"></i>
//                                                         <i className="fa-solid fa-star"></i>
//                                                         <i className="fa-solid fa-star"></i>
//                                                         <i className="fa-solid fa-star-half"></i>
//                                                     </div>
//                                                     <div className="bd-course-rating-text">
//                                                         <span>({course.rating}/5 Ratings)</span>
//                                                     </div>
//                                                 </div>
//                                                     </div>
                                                    
//                                                 </div>
//                                                 <h5 className="bd-course-title underline mb-10">
//                                                     <a href="courses-details.html">{course.title}</a>
//                                                 </h5>
//                                                 <p className="bd-course-description mb-10">{course.description}</p>
                                               
//                                                 <div className="bd-course-btn">
//                                                     <a className="bd-btn btn-outline-primary" href="courses-details.html">
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
//                         {courses.length < 3 && (
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
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faStar, faStarHalfAlt, faSpinner } from "@fortawesome/free-solid-svg-icons";
// import courseBg1 from "../assets/images/course-bg-1.webp";

// // Dummy course data
// const initialCourses = [
//     {
//         id: 1,
//         title: "Master Data Science from Scratch",
//         description: "Empower your career with data science skills that are in high demand across industries.",
//         lessons: 45,
//         rating: 4.8,
//         category: "UI/UX",
//         discount: "20% Off",
//         image: courseBg1
//     },
//     {
//         id: 2,
//         title: "Complete React Developer Course",
//         description: "Master modern React with hooks, context, and advanced state management.",
//         lessons: 52,
//         rating: 4.7,
//         category: "Frontend Development",
//         discount: "30% Off",
//         image: courseBg1
//     }
// ];

// // More dummy courses for "Load More"
// const moreCourses = [
//     {
//         id: 3,
//         title: "Full Stack Web Development Bootcamp",
//         description: "Learn frontend & backend technologies, databases, and deployment.",
//         lessons: 60,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         image: courseBg1
//     }
// ];

// function Courses() {
//     const [courses, setCourses] = useState(initialCourses);

//     const loadMoreCourses = () => {
//         setCourses([...courses, ...moreCourses]);
//     };

//     return (
//         <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "60px" }}>
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
//                                     <div key={course.id} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                                         <div className="bd-course-wrapper style-two">
//                                             <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                 <div className="bd-course-badge">
//                                                     <span className="bd-badge badge-warning">{course.discount}</span>
//                                                 </div>
//                                                 <div
//                                                     className="bd-course-thumb-bg"
//                                                     style={{
//                                                         backgroundImage: `url(${course.image})`,
//                                                         backgroundSize: "cover",
//                                                         backgroundPosition: "center"
//                                                     }}
//                                                 ></div>
//                                                 <div className="small-text bg-text-color">{course.category}</div>
//                                                 <div className="bd-course-overly-title fs-200 text-white">
//                                                     {course.category}
//                                                 </div>
//                                             </div>
//                                             <div className="bd-course-content">
//                                                 <div className="bd-course-content-bottom mb-10">
//                                                     <div className="bd-course-lesson has-separator">
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <span>
//                                                                 <FontAwesomeIcon icon={faClock} /> {course.lessons} Lessons
//                                                             </span>
//                                                         </div>
//                                                         <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
//                                                             <div className="bd-course-rating-icon d-flex rating-color">
//                                                                 <FontAwesomeIcon icon={faStar} />
//                                                                 <FontAwesomeIcon icon={faStar} />
//                                                                 <FontAwesomeIcon icon={faStar} />
//                                                                 <FontAwesomeIcon icon={faStar} />
//                                                                 <FontAwesomeIcon icon={faStarHalfAlt} />
//                                                             </div>
//                                                             <div className="bd-course-rating-text">
//                                                                 <span>({course.rating}/5 Ratings)</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <h5 className="bd-course-title underline mb-10">
//                                                     <a href="courses-details.html">{course.title}</a>
//                                                 </h5>
//                                                 <p className="bd-course-description mb-10">{course.description}</p>
                                               
//                                                 <div className="bd-course-btn">
//                                                     <a className="bd-btn btn-outline-primary" href="courses-details.html">
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
//                         {courses.length < 3 && (
//                             <div className="bd-course-more-btn d-flex justify-content-center mt-50">
//                                 <button className="bd-btn btn-outline-border-primary" onClick={loadMoreCourses}>
//                                     Load More
//                                     <span className="right-icon">
//                                         <FontAwesomeIcon icon={faSpinner} spin />
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
// import courseBg4 from "../assets/images/course-bg-4.webp";
// import courseBg5 from "../assets/images/course-bg-5.webp";
// import courseBg6 from "../assets/images/course-bg-6.webp";
// import courseBg7 from "../assets/images/course-bg-7.webp";
// import courseBg8 from "../assets/images/course-bg-8.webp";
// import courseBg9 from "../assets/images/course-bg-9.webp";

// // Dummy course data with unique background images
// const initialCourses = [
//     {
//         id: 1,
//         title: "Master Data Science from Scratch",
//         description: "Empower your career with data science skills that are in high demand across industries.",
//         lessons: 45,
//         rating: 4.8,
//         category: "UI/UX",
//         discount: "20% Off",
//         image: courseBg1
//     },
//     {
//         id: 2,
//         title: "Complete React Developer Course",
//         description: "Master modern React with hooks, context, and advanced state management.",
//         lessons: 52,
//         rating: 4.7,
//         category: "Frontend Development",
//         discount: "30% Off",
//         image: courseBg2
//     }
// ];

// // Additional courses for "Load More"
// const moreCourses = [
//     {
//         id: 3,
//         title: "Full Stack Web Development Bootcamp",
//         description: "Learn frontend & backend technologies, databases, and deployment.",
//         lessons: 60,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         image: courseBg3
//     },
//     {
//         id: 4,
//         title: "Advanced UI/UX Design",
//         description: "Enhance your UI/UX skills with real-world projects and modern tools.",
//         lessons: 40,
//         rating: 4.6,
//         category: "UI/UX",
//         discount: "15% Off",
//         image: courseBg4
//     },
//     {
//         id: 5,
//         title: "Python for Data Analysis",
//         description: "Learn data manipulation, visualization, and analysis using Python.",
//         lessons: 55,
//         rating: 4.8,
//         category: "Data Science",
//         discount: "22% Off",
//         image: courseBg5
//     }
// ];

// function Courses() {
//     const [courses, setCourses] = useState(initialCourses);

//     const loadMoreCourses = () => {
//         setCourses([...courses, ...moreCourses]);
//     };

//     return (
//         <section className="bd-course-area section-space" style={{ paddingTop: "260px" }}>
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
//                                     <div key={course.id} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                                         <div className="bd-course-wrapper style-two">
//                                             <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                 <div className="bd-course-badge">
//                                                     <span className="bd-badge badge-warning">{course.discount}</span>
//                                                 </div>
//                                                 <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                     <img src={course.image} alt="Course Background" />
//                                                 </div>
//                                                 <div className="small-text bg-text-color">{course.category}</div>
//                                                 <div className="bd-course-overly-title fs-200 text-white">
//                                                     {course.category}
//                                                 </div>
//                                             </div>
//                                             <div className="bd-course-content">
//                                                 <div className="bd-course-content-bottom mb-10">
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
//                                                     </div>
//                                                 </div>
//                                                 <h5 className="bd-course-title underline mb-10">
//                                                     <a href="courses-details.html">{course.title}</a>
//                                                 </h5>
//                                                 <p className="bd-course-description mb-10">{course.description}</p>
//                                                 <div className="bd-course-btn">
//                                                     <a className="bd-btn btn-outline-primary" href="courses-details.html">
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

// Initial courses (First View)
const initialCourses = [
    {
        id: 1,
        title: "UI/UX Design for Beginners",
        description: "Learn the fundamentals of UI/UX design and create stunning user interfaces.",
        lessons: 35,
        rating: 4.7,
        category: "UI/UX",
        discount: "15% Off",
        image: courseBg1
    },
    {
        id: 2,
        title: "React JS from Scratch",
        description: "Master React fundamentals with hands-on projects and real-world examples.",
        lessons: 50,
        rating: 4.8,
        category: "Frontend Development",
        discount: "20% Off",
        image: courseBg2
    }
];

// More courses (After Clicking Load More)
const moreCourses = [
    {
        id: 3,
        title: "Full Stack JavaScript Bootcamp",
        description: "Become a full-stack developer with JavaScript, Node.js, Express, and MongoDB.",
        lessons: 65,
        rating: 4.9,
        category: "Full Stack",
        discount: "25% Off",
        image: courseBg3
    },
    {
        id: 4,
        title: "Advanced UI/UX Research & Prototyping",
        description: "Enhance your UX research and prototyping skills for professional projects.",
        lessons: 45,
        rating: 4.6,
        category: "UI/UX",
        discount: "18% Off",
        image: courseBg4
    },
    {
        id: 5,
        title: "HTML & CSS Mastery",
        description: "Learn to build modern, responsive websites using HTML and CSS.",
        lessons: 40,
        rating: 4.8,
        category: "Frontend Development",
        discount: "15% Off",
        image: courseBg5
    },
    {
        id: 6,
        title: "JavaScript Essentials for Web Development",
        description: "Master JavaScript fundamentals to build dynamic web applications.",
        lessons: 50,
        rating: 4.8,
        category: "Frontend Development",
        discount: "20% Off",
        image: courseBg6
    },
    {
        id: 7,
        title: "PHP & MySQL Web Development",
        description: "Build dynamic, database-driven websites with PHP and MySQL.",
        lessons: 55,
        rating: 4.7,
        category: "Backend Development",
        discount: "18% Off",
        image: courseBg7
    },
    {
        id: 8,
        title: "MongoDB for Beginners",
        description: "Learn NoSQL database management with MongoDB and Mongoose.",
        lessons: 45,
        rating: 4.6,
        category: "Database",
        discount: "15% Off",
        image: courseBg8
    },
    {
        id: 9,
        title: "SEO & Digital Marketing Strategies",
        description: "Master SEO and digital marketing strategies to drive organic traffic.",
        lessons: 40,
        rating: 4.7,
        category: "Marketing",
        discount: "20% Off",
        image: courseBg9
    }
];


// function Courses() {
//     const [courses, setCourses] = useState(initialCourses);

//     const loadMoreCourses = () => {
//         setCourses([...courses, ...moreCourses]);
//     };

//     return (
//         <section className="bd-course-area section-space" style={{ paddingTop: "260px" }}>
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
//                                     <div key={course.id} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
//                                         <div className="bd-course-wrapper style-two">
//                                             <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
//                                                 <div className="bd-course-badge">
//                                                     <span className="bd-badge badge-warning">{course.discount}</span>
//                                                 </div>
//                                                 <div className={`bd-course-thumb-bg bg-${course.id}`}>
//                                                     <img src={course.image} alt="Course Background" />
//                                                 </div>
//                                                 <div className="small-text bg-text-color">{course.category}</div>
//                                                 <div className="bd-course-overly-title fs-200 text-white">
//                                                     {course.category}
//                                                 </div>
//                                             </div>
//                                             <div className="bd-course-content">
//                                                 <div className="bd-course-content-bottom mb-10">
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
//                                                     </div>
//                                                 </div>
//                                                 <h5 className="bd-course-title underline mb-10">
//                                                     <a href="courses-details.html">{course.title}</a>
//                                                 </h5>
//                                                 <p className="bd-course-description mb-10">{course.description}</p>
//                                                 <div className="bd-course-btn">
//                                                     <a className="bd-btn btn-outline-primary" href="courses-details.html">
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
//                         {/* Load More End */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Courses;



function Courses() {
    const [courses, setCourses] = useState(initialCourses);

    const loadMoreCourses = () => {
        setCourses([...courses, ...moreCourses]);
    };

    return (
        <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
            <div className="container">
                <div className="row g-30 align-items-center justify-content-between mb-30">
                    <div className="course-top-meta d-flex-between flex-wrap-small mb-30 gap-30">
                        <div className="bd-top-sorting-left">
                            <h6 className="bd-sorting-item-found">
                                We found <span>{courses.length}</span> courses available for you
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="row gy-30">
                    <div className="col-lg-12">
                        {/* Course Grid */}
                        <div className="display-layout-grid active">
                            <div className="row g-30">
                                {courses.map((course) => (
                                    <div key={course.id} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                                        <div className="bd-course-wrapper style-two">
                                            <div className="bd-course-thumb-wrapper bd-course-thumb-style small-style p-relative">
                                                <div className="bd-course-badge">
                                                    {/* <span className="bd-badge badge-warning">{course.discount}</span> */}
                                                    <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
                                                        
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
                                                </div>
                                                <div className={`bd-course-thumb-bg bg-${course.id}`}>
                                                    <img src={course.image} alt="Course Background" />
                                                </div>
                                                <div className="small-text bg-text-color">
                                                    {/* {course.category} */}
                                                    <span className="text-light">
                                                            <i className="fas fa-clock " style={{ color: "#ffffff" }}></i> {course.lessons}
                                                        </span>
                                                </div>
                                                <div className="bd-course-overly-title fs-200 text-white">
                                                    {course.category}
                                                </div>
                                            </div>
                                            <div className="bd-course-content">
                                                {/* <div className="bd-course-content-bottom mb-10">
                                                    <div className="bd-course-lesson has-separator">
                                                        <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
                                                            <span>
                                                                <i className="fa-solid fa-clock"></i> {course.lessons} Lessons
                                                            </span>
                                                        </div>
                                                        <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
                                                            <div className="bd-course-rating-icon d-flex rating-color">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star-half"></i>
                                                            </div>
                                                            <div className="bd-course-rating-text">
                                                                <span>({course.rating}/5 Ratings)</span>
                                                            </div>
                                                        </div>
                                                     </div>
                                                    </div> */}
                                                {/* <h5 className="bd-course-title underline mb-10">
                                                    <a href="courses-details.html">{course.title}</a>
                                                </h5> */}
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
                        {/* Course Grid End */}

                        {/* Load More Button */}
                        {courses.length < 5 && (
                            <div className="bd-course-more-btn d-flex justify-content-center mt-50">
                                <button className="bd-btn btn-outline-border-primary" onClick={loadMoreCourses}>
                                    Load More
                                    <span className="right-icon">
                                        <i className="fa-solid fa-spinner fa-spin"></i>
                                    </span>
                                </button>
                            </div>
                        )}
                        {/* Load More End */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Courses;
