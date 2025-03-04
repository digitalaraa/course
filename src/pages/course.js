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

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faStarHalfAlt, faSpinner } from "@fortawesome/free-solid-svg-icons";
import courseBg1 from "../assets/images/course-bg-1.webp";

// Dummy course data
const initialCourses = [
    {
        id: 1,
        title: "Master Data Science from Scratch",
        description: "Empower your career with data science skills that are in high demand across industries.",
        lessons: 45,
        rating: 4.8,
        category: "UI/UX",
        discount: "20% Off",
        image: courseBg1
    },
    {
        id: 2,
        title: "Complete React Developer Course",
        description: "Master modern React with hooks, context, and advanced state management.",
        lessons: 52,
        rating: 4.7,
        category: "Frontend Development",
        discount: "30% Off",
        image: courseBg1
    }
];

// More dummy courses for "Load More"
const moreCourses = [
    {
        id: 3,
        title: "Full Stack Web Development Bootcamp",
        description: "Learn frontend & backend technologies, databases, and deployment.",
        lessons: 60,
        rating: 4.9,
        category: "Full Stack",
        discount: "25% Off",
        image: courseBg1
    }
];

function Courses() {
    const [courses, setCourses] = useState(initialCourses);

    const loadMoreCourses = () => {
        setCourses([...courses, ...moreCourses]);
    };

    return (
        <section className="bd-course-area section-space" style={{ paddingTop: "160px", paddingBottom: "60px" }}>
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
                                                    <span className="bd-badge badge-warning">{course.discount}</span>
                                                </div>
                                                <div
                                                    className="bd-course-thumb-bg"
                                                    style={{
                                                        backgroundImage: `url(${course.image})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center"
                                                    }}
                                                ></div>
                                                <div className="small-text bg-text-color">{course.category}</div>
                                                <div className="bd-course-overly-title fs-200 text-white">
                                                    {course.category}
                                                </div>
                                            </div>
                                            <div className="bd-course-content">
                                                <div className="bd-course-content-bottom mb-10">
                                                    <div className="bd-course-lesson has-separator">
                                                        <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
                                                            <span>
                                                                <FontAwesomeIcon icon={faClock} /> {course.lessons} Lessons
                                                            </span>
                                                        </div>
                                                        <div className="bd-course-rating d-inline-flex flex-wrap align-items-center gap-10 mb-30">
                                                            <div className="bd-course-rating-icon d-flex rating-color">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStarHalfAlt} />
                                                            </div>
                                                            <div className="bd-course-rating-text">
                                                                <span>({course.rating}/5 Ratings)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="bd-course-title underline mb-10">
                                                    <a href="courses-details.html">{course.title}</a>
                                                </h5>
                                                <p className="bd-course-description mb-10">{course.description}</p>
                                               
                                                <div className="bd-course-btn">
                                                    <a className="bd-btn btn-outline-primary" href="courses-details.html">
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
                        {courses.length < 3 && (
                            <div className="bd-course-more-btn d-flex justify-content-center mt-50">
                                <button className="bd-btn btn-outline-border-primary" onClick={loadMoreCourses}>
                                    Load More
                                    <span className="right-icon">
                                        <FontAwesomeIcon icon={faSpinner} spin />
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
