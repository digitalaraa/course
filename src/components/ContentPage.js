import React from 'react';

import project1 from '../assets/images/hero/project-1.jpg';
import project2 from '../assets/images/hero/project-2.jpg';
import project3 from '../assets/images/hero/project-3.jpg';
import project4 from '../assets/images/hero/project-4.jpg';
import project5 from '../assets/images/hero/project-5.jpg';

const projectData = [
  {
    id: 1,
    title: "Design of the year",
    category: "UI/UX Design",
    image: project1, // Updated image import
    link: "/",
  },
  {
    id: 2,
    title: "Ways to level up your brand",
    category: "Branding",
    image: project2,
    link: "/",
  },
  {
    id: 3,
    title: "Cyber Security Analysis",
    category: "Technology",
    image: project3,
    link: "/",
  },
  {
    id: 4,
    title: "Design Discussion",
    category: "Design",
    image: project4,
    link: "/",
  },
  {
    id: 5,
    title: "Product Security Analysis",
    category: "Product",
    image: project5,
    link: "/",
  },
];

const ContentPage = () => {
 
  return (
    <>
      {/* Projects Section */}
      <div className="section tekup-section-padding">
        <div className="container">
          <div className="tekup-section-title center">
            <h2>Explore Our Recent Projects</h2>
          </div>
          <div className="row">
            {projectData.map((project, index) => (
              <div className={`col-xl-${index === 4 ? '8' : '4'} col-md-6`} key={project.id}>
                <div className="tekup-portfolio-wrap2" data-aos="fade-up" data-aos-duration={`${(index + 1) * 200}`}>
                  <div className="tekup-portfolio-thumb2">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="tekup-portfolio-data2">
                      <a href={project.link} aria-label={`View details of ${project.title}`}>
                        <h5>{project.title}</h5>
                      </a>
                      <p>{project.category}</p>
                      <a className="tekup-portfolio-btn2" href={project.link} aria-label={`View ${project.title}`}>
                        <i className="ri-arrow-right-up-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="tekup-center-btn">
            <a className="tekup-default-btn" href="/">View All Projects <i className="ri-arrow-right-up-line"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
