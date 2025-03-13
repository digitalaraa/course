// import courseBg1 from '../assets/images/courseBg1.jpg';
// import courseBg2 from '../assets/images/courseBg2.jpg';
// import courseBg3 from '../assets/images/courseBg3.jpg';
// import courseBg4 from '../assets/images/courseBg1.jpg'; // Updated
// import courseBg5 from '../assets/images/courseBg1.jpg'; // Updated
// import courseBg6 from '../assets/images/courseBg1.jpg'; // Updated
// import courseBg7 from '../assets/images/courseBg1.jpg'; // Updated
// import courseBg8 from '../assets/images/courseBg1.jpg'; // Updated
// import courseBg9 from '../assets/images/courseBg1.jpg'; // Updated

// export const allCourses = [
//     {
//         id: 1,
//         title: "UI/UX Design for Beginners",
//         description: "This course provides a comprehensive introduction to UI/UX design principles. You will learn how to conduct user research, create wireframes, and design interactive prototypes. The course covers essential topics like usability testing, accessibility, and design psychology. By the end, you will have hands-on experience with industry tools like Figma and Adobe XD, enabling you to build user-friendly digital experiences.",
//         lessons: 35,
//         rating: 4.7,
//         category: "UI/UX",
//         discount: "15% Off",
//         banner: courseBg1,
//         faq: [
//             { question: "Who is this course for?", answer: "This course is for beginners looking to learn UI/UX from scratch." },
//             { question: "Do I need any prior experience?", answer: "No prior experience is needed. We start from the basics." },
//             { question: "Will I receive a certificate?", answer: "Yes! A certificate is awarded upon completion." },
//             { question: "What tools will I use?", answer: "You’ll work with Figma, Adobe XD, and other industry-standard tools." }
//         ]
//     },
//     {
//         id: 2,
//         title: "React JS from Scratch",
//         description: "This course covers everything you need to know to become a React developer. Learn how to create reusable components, manage state and props, and implement React Hooks for dynamic user interactions. You’ll also explore React Router, Context API, and Redux for state management. The course includes hands-on projects that will help you build real-world applications.",
//         lessons: 50,
//         rating: 4.8,
//         category: "Frontend",
//         discount: "20% Off",
//         banner: courseBg2,
//         faq: [
//             { question: "What will I learn in this course?", answer: "You will learn React components, hooks, and how to build dynamic web apps." },
//             { question: "Is React difficult for beginners?", answer: "React is beginner-friendly if you have basic JavaScript knowledge." },
//             { question: "Can I use React for mobile apps?", answer: "Yes! React Native allows you to build mobile apps using React." },
//             { question: "Will I build projects?", answer: "Yes, you’ll work on multiple projects to apply your knowledge." }
//         ]
//     },
//     {
//         id: 3,
//         title: "Full Stack Web Development",
//         description: "Become a full-stack developer by mastering both frontend and backend technologies. This course covers HTML, CSS, JavaScript, React JS, Node.js, Express.js, and MongoDB. You’ll learn how to build scalable web applications, work with APIs, and manage databases. By the end, you’ll have developed a full-stack project showcasing your skills.",
//         lessons: 60,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         banner: courseBg3,
//         faq: [
//             { question: "Do I need prior coding experience?", answer: "Basic knowledge of HTML and JavaScript is helpful but not required." },
//             { question: "Will I build real projects?", answer: "Yes! You'll create a full-stack application as part of the course." },
//             { question: "What backend technologies will I learn?", answer: "You’ll learn Node.js, Express.js, and MongoDB for backend development." }
//         ]
//     },
//     {
//         id: 4,
//         title: "JavaScript Mastery",
//         description: "Master JavaScript from the ground up! This course covers everything from basic syntax and ES6+ features to advanced topics like closures, async programming, and event-driven architecture. You’ll build interactive web applications, optimize performance, and learn best practices for writing clean and efficient code.",
//         lessons: 40,
//         rating: 4.7,
//         category: "JavaScript",
//         discount: "10% Off",
//         banner: courseBg4,
//         faq: [
//             { question: "Is this course for beginners?", answer: "Yes! We start with the basics before moving to advanced topics." },
//             { question: "Does this course cover ES6?", answer: "Yes! You’ll learn modern JavaScript features like arrow functions, promises, and async/await." },
//             { question: "Will I build projects?", answer: "Yes, you’ll create interactive web apps to apply your knowledge." }
//         ]
//     },
//     {
//         id: 5,
//         title: "SEO & Digital Marketing",
//         description: "This course teaches you how to optimize websites for search engines and master digital marketing strategies. Learn keyword research, on-page and off-page SEO, content marketing, PPC advertising, and social media marketing. By the end, you'll know how to drive traffic, increase engagement, and improve website rankings.",
//         lessons: 30,
//         rating: 4.6,
//         category: "Marketing",
//         discount: "12% Off",
//         banner: courseBg5,
//         faq: [
//             { question: "Will I learn Google Ads?", answer: "Yes! This course includes paid search strategies and Google Ads setup." },
//             { question: "Does this course cover social media marketing?", answer: "Yes, we discuss marketing strategies for Facebook, Instagram, LinkedIn, and more." },
//             { question: "Will I learn analytics?", answer: "Yes, you’ll learn how to use tools like Google Analytics to track performance." }
//         ]
//     },
//     {
//         id: 6,
//         title: "Python for Data Science",
//         description: "Learn Python programming with a focus on data science. This course covers data manipulation with Pandas, data visualization with Matplotlib, and machine learning basics using Scikit-Learn. You’ll work on real datasets and build predictive models to gain insights from data.",
//         lessons: 45,
//         rating: 4.8,
//         category: "Data Science",
//         discount: "18% Off",
//         banner: courseBg6,
//         faq: [
//             { question: "Do I need programming experience?", answer: "No, this course is beginner-friendly and covers Python from the basics." },
//             { question: "Does this course include machine learning?", answer: "Yes, you’ll learn the basics of machine learning with Scikit-Learn." },
//             { question: "Will I work on real datasets?", answer: "Yes, you’ll analyze and visualize real-world data." }
//         ]
//     },
//     {
//         id: 7,
//         title: "WordPress Website Development",
//         description: "Learn how to build professional websites using WordPress. This course covers everything from setting up a website, choosing themes, and installing plugins to optimizing performance and securing your site. Perfect for beginners looking to start a website or blog.",
//         lessons: 25,
//         rating: 4.5,
//         category: "Web Development",
//         discount: "10% Off",
//         banner: courseBg7,
//         faq: [
//             { question: "Do I need coding skills?", answer: "No, WordPress allows you to create websites without coding." },
//             { question: "Can I use this for eCommerce?", answer: "Yes! You'll learn how to set up an online store using WooCommerce." },
//             { question: "Will I learn about SEO?", answer: "Yes, the course includes basic SEO practices for WordPress sites." }
//         ]
//     },
//     {
//         id: 8,
//         title: "PHP & MySQL Development",
//         description: "This course teaches you how to build dynamic web applications using PHP and MySQL. Learn how to connect databases, create authentication systems, and manage user data. By the end, you'll develop a real-world web application.",
//         lessons: 35,
//         rating: 4.6,
//         category: "Backend Development",
//         discount: "15% Off",
//         banner: courseBg8,
//         faq: [
//             { question: "Do I need prior PHP knowledge?", answer: "No, we start from the basics before moving to advanced topics." },
//             { question: "Will I learn how to work with databases?", answer: "Yes! You’ll master MySQL database integration with PHP." },
//             { question: "Will I build a project?", answer: "Yes, you’ll create a complete web application by the end of the course." }
//         ]
//     },
//     {
//         id: 9,
//         title: "Advanced CSS & Sass",
//         description: "Take your CSS skills to the next level with this course! Learn advanced techniques such as CSS Grid, Flexbox, animations, transitions, and Sass for efficient styling. You’ll build responsive, visually stunning web designs.",
//         lessons: 28,
//         rating: 4.7,
//         category: "Frontend",
//         discount: "12% Off",
//         banner: courseBg9,
//         faq: [
//             { question: "Will I learn animations?", answer: "Yes! You’ll master CSS animations and transitions." },
//             { question: "Does this course cover responsive design?", answer: "Absolutely! You’ll learn how to build mobile-friendly layouts using CSS Grid and Flexbox." },
//             { question: "What is Sass?", answer: "Sass is a CSS preprocessor that helps you write cleaner and more maintainable styles." }
//         ]
//     }
// ];


import courseBg1 from '../assets/images/course-bg-1.webp';
import courseBg2 from '../assets/images/course-bg-2.webp';
import courseBg3 from '../assets/images/course-bg-3.webp';
import courseBg4 from '../assets/images/course-bg-4.webp';
import courseBg5 from '../assets/images/course-bg-5.webp';
import courseBg6 from '../assets/images/course-bg-6.webp';
import courseBg7 from '../assets/images/course-bg-7.webp';
import courseBg8 from '../assets/images/course-bg-8.webp';
import courseBg9 from '../assets/images/course-bg-9.webp';

export const allCourses = [
    {
        id: 1,
        title: "UI/UX Design for Beginners",
        description: "Learn the fundamentals of UI/UX design, including user research, wireframing, and prototyping. Perfect for beginners looking to start a career in design.",
        lessons: 35,
        rating: 4.7,
        category: "UI/UX",
        discount: "15% Off",
        image: courseBg1,
        faq: [
            { question: "Who is this course for?", answer: "This course is for beginners looking to learn UI/UX from scratch." },
            { question: "Do I need any prior experience?", answer: "No prior experience is needed. We start from the basics." },
            { question: "Will I receive a certificate?", answer: "Yes! A certificate is awarded upon completion." },
            { question: "What tools will I use?", answer: "You’ll work with Figma, Adobe XD, and other industry-standard tools." }
        ]
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
        faq: [
            { question: "What will I learn in this course?", answer: "You will learn React components, hooks, and how to build dynamic web apps." },
            { question: "Is React difficult for beginners?", answer: "React is beginner-friendly if you have basic JavaScript knowledge." },
            { question: "Can I use React for mobile apps?", answer: "Yes! React Native allows you to build mobile apps using React." },
            { question: "Will I build projects?", answer: "Yes, you’ll work on multiple projects to apply your knowledge." }
        ]
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
        faq: [
            { question: "Do I need prior coding experience?", answer: "Basic knowledge of HTML and JavaScript is helpful but not required." },
            { question: "Will I build real projects?", answer: "Yes! You'll create a full-stack application as part of the course." },
            { question: "What backend technologies will I learn?", answer: "You’ll learn Node.js, Express.js, and MongoDB for backend development." }
        ]
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
        faq: [
            { question: "Is this course for beginners?", answer: "No, this course is for those with some UI/UX experience." },
            { question: "What tools will I use?", answer: "You’ll use tools like Figma, Miro, and usability testing platforms." },
            { question: "Will I learn about user testing?", answer: "Yes, user testing is a key part of this course." }
        ]
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
        faq: [
            { question: "Is this course for beginners?", answer: "Yes! We start with the basics before moving to advanced topics." },
            { question: "Does this course cover CSS Grid?", answer: "Yes! You’ll learn CSS Grid and Flexbox for modern layouts." },
            { question: "Will I build projects?", answer: "Yes, you’ll create responsive websites to apply your knowledge." }
        ]
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
        faq: [
            { question: "Is this course for beginners?", answer: "Yes! We start with the basics before moving to advanced topics." },
            { question: "Does this course cover ES6?", answer: "Yes! You’ll learn modern JavaScript features like arrow functions, promises, and async/await." },
            { question: "Will I build projects?", answer: "Yes, you’ll create interactive web apps to apply your knowledge." }
        ]
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
        faq: [
            { question: "Do I need prior PHP knowledge?", answer: "No, we start from the basics before moving to advanced topics." },
            { question: "Will I learn how to work with databases?", answer: "Yes! You’ll master MySQL database integration with PHP." },
            { question: "Will I build a project?", answer: "Yes, you’ll create a complete web application by the end of the course." }
        ]
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
        faq: [
            { question: "Do I need prior database knowledge?", answer: "No, this course is beginner-friendly and covers MongoDB from scratch." },
            { question: "Will I learn about NoSQL?", answer: "Yes! You’ll learn the basics of NoSQL databases and how they differ from SQL." },
            { question: "Will I work on real projects?", answer: "Yes, you’ll build a project using MongoDB." }
        ]
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
        faq: [
            { question: "Will I learn Google Ads?", answer: "Yes! This course includes paid search strategies and Google Ads setup." },
            { question: "Does this course cover social media marketing?", answer: "Yes, we discuss marketing strategies for Facebook, Instagram, LinkedIn, and more." },
            { question: "Will I learn analytics?", answer: "Yes, you’ll learn how to use tools like Google Analytics to track performance." }
        ]
    }
];