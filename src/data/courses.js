
// import courseBg1 from '../assets/images/course-bg-1.webp';
// import courseBg2 from '../assets/images/course-bg-2.webp';
// import courseBg3 from '../assets/images/course-bg-3.webp';
// import courseBg4 from '../assets/images/course-bg-4.webp';
// import courseBg5 from '../assets/images/course-bg-5.webp';
// import courseBg6 from '../assets/images/course-bg-6.webp';
// import courseBg7 from '../assets/images/course-bg-7.webp';
// import courseBg8 from '../assets/images/course-bg-8.webp';
// import courseBg9 from '../assets/images/course-bg-9.webp';

// export const allCourses = [
//     {
//         id: 1,
//         title: "UI/UX Design for Beginners",
//         description: "Learn the fundamentals of UI/UX design, including user research, wireframing, and prototyping. Perfect for beginners looking to start a career in design.",
//         lessons: 35,
//         rating: 4.7,
//         category: "UI/UX",
//         discount: "15% Off",
//         image: courseBg1,
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
//         description: "Master React JS with hands-on projects. Learn components, hooks, state management, and build dynamic web applications.",
//         lessons: 50,
//         rating: 4.8,
//         category: "Frontend",
//         discount: "20% Off",
//         image: courseBg2,
//         faq: [
//             { question: "What will I learn in this course?", answer: "You will learn React components, hooks, and how to build dynamic web apps." },
//             { question: "Is React difficult for beginners?", answer: "React is beginner-friendly if you have basic JavaScript knowledge." },
//             { question: "Can I use React for mobile apps?", answer: "Yes! React Native allows you to build mobile apps using React." },
//             { question: "Will I build projects?", answer: "Yes, you’ll work on multiple projects to apply your knowledge." }
//         ]
//     },
//     {
//         id: 3,
//         title: "Full Stack JavaScript Bootcamp",
//         description: "Become a full-stack developer by learning JavaScript, Node.js, Express, and MongoDB. Build real-world projects and deploy them.",
//         lessons: 65,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         image: courseBg3,
//         faq: [
//             { question: "Do I need prior coding experience?", answer: "Basic knowledge of HTML and JavaScript is helpful but not required." },
//             { question: "Will I build real projects?", answer: "Yes! You'll create a full-stack application as part of the course." },
//             { question: "What backend technologies will I learn?", answer: "You’ll learn Node.js, Express.js, and MongoDB for backend development." }
//         ]
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
//         faq: [
//             { question: "Is this course for beginners?", answer: "No, this course is for those with some UI/UX experience." },
//             { question: "What tools will I use?", answer: "You’ll use tools like Figma, Miro, and usability testing platforms." },
//             { question: "Will I learn about user testing?", answer: "Yes, user testing is a key part of this course." }
//         ]
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
//         faq: [
//             { question: "Is this course for beginners?", answer: "Yes! We start with the basics before moving to advanced topics." },
//             { question: "Does this course cover CSS Grid?", answer: "Yes! You’ll learn CSS Grid and Flexbox for modern layouts." },
//             { question: "Will I build projects?", answer: "Yes, you’ll create responsive websites to apply your knowledge." }
//         ]
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
//         faq: [
//             { question: "Is this course for beginners?", answer: "Yes! We start with the basics before moving to advanced topics." },
//             { question: "Does this course cover ES6?", answer: "Yes! You’ll learn modern JavaScript features like arrow functions, promises, and async/await." },
//             { question: "Will I build projects?", answer: "Yes, you’ll create interactive web apps to apply your knowledge." }
//         ]
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
//         faq: [
//             { question: "Do I need prior PHP knowledge?", answer: "No, we start from the basics before moving to advanced topics." },
//             { question: "Will I learn how to work with databases?", answer: "Yes! You’ll master MySQL database integration with PHP." },
//             { question: "Will I build a project?", answer: "Yes, you’ll create a complete web application by the end of the course." }
//         ]
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
//         faq: [
//             { question: "Do I need prior database knowledge?", answer: "No, this course is beginner-friendly and covers MongoDB from scratch." },
//             { question: "Will I learn about NoSQL?", answer: "Yes! You’ll learn the basics of NoSQL databases and how they differ from SQL." },
//             { question: "Will I work on real projects?", answer: "Yes, you’ll build a project using MongoDB." }
//         ]
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
//         faq: [
//             { question: "Will I learn Google Ads?", answer: "Yes! This course includes paid search strategies and Google Ads setup." },
//             { question: "Does this course cover social media marketing?", answer: "Yes, we discuss marketing strategies for Facebook, Instagram, LinkedIn, and more." },
//             { question: "Will I learn analytics?", answer: "Yes, you’ll learn how to use tools like Google Analytics to track performance." }
//         ]
//     }
// ];


// import courseBg1 from '../assets/images/course-bg-1.webp';
// import courseBg2 from '../assets/images/course-bg-2.webp';
// import courseBg3 from '../assets/images/course-bg-3.webp';
// import courseBg4 from '../assets/images/course-bg-4.webp';
// import courseBg5 from '../assets/images/course-bg-5.webp';
// import courseBg6 from '../assets/images/course-bg-6.webp';
// import courseBg7 from '../assets/images/course-bg-7.webp';
// import courseBg8 from '../assets/images/course-bg-8.webp';
// import courseBg9 from '../assets/images/course-bg-9.webp';

// export const allCourses = [
//     {
//         id: 1,
//         title: "UI/UX Design for Beginners",
//         description: "Learn the fundamentals of UI/UX design, including user research, wireframing, and prototyping. Perfect for beginners looking to start a career in design.",
//         lessons: 35,
//         rating: 4.7,
//         category: "UI/UX",
//         discount: "15% Off",
//         image: courseBg1,
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
//         description: "Master React JS with hands-on projects. Learn components, hooks, state management, and build dynamic web applications.",
//         lessons: 50,
//         rating: 4.8,
//         category: "Frontend",
//         discount: "20% Off",
//         image: courseBg2,
//         faq: [
//             { question: "What will I learn in this course?", answer: "You will learn React components, hooks, and how to build dynamic web apps." },
//             { question: "Is React difficult for beginners?", answer: "React is beginner-friendly if you have basic JavaScript knowledge." },
//             { question: "Can I use React for mobile apps?", answer: "Yes! React Native allows you to build mobile apps using React." },
//             { question: "Will I build projects?", answer: "Yes, you’ll work on multiple projects to apply your knowledge." }
//         ]
//     },
//     {
//         id: 3,
//         title: "Full Stack JavaScript Bootcamp",
//         description: "Become a full-stack developer by learning JavaScript, Node.js, Express, and MongoDB. Build real-world projects and deploy them.",
//         lessons: 65,
//         rating: 4.9,
//         category: "Full Stack",
//         discount: "25% Off",
//         image: courseBg3,
//         faq: [
//             { question: "Do I need prior coding experience?", answer: "Basic knowledge of HTML and JavaScript is helpful but not required." },
//             { question: "Will I build real projects?", answer: "Yes! You'll create a full-stack application as part of the course." },
//             { question: "What backend technologies will I learn?", answer: "You’ll learn Node.js, Express.js, and MongoDB for backend development." }
//         ]
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
//         faq: [
//             { question: "Is this course for beginners?", answer: "No, this course is for those with some UI/UX experience." },
//             { question: "What tools will I use?", answer: "You’ll use tools like Figma, Miro, and usability testing platforms." },
//             { question: "Will I learn about user testing?", answer: "Yes, user testing is a key part of this course." }
//         ]
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
//         faq: [
//             { question: "Is this course for beginners?", answer: "Yes! We start with the basics before moving to advanced topics." },
//             { question: "Does this course cover CSS Grid?", answer: "Yes! You’ll learn CSS Grid and Flexbox for modern layouts." },
//             { question: "Will I build projects?", answer: "Yes, you’ll create responsive websites to apply your knowledge." }
//         ]
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
//         faq: [
//             { question: "Is this course for beginners?", answer: "Yes! We start with the basics before moving to advanced topics." },
//             { question: "Does this course cover ES6?", answer: "Yes! You’ll learn modern JavaScript features like arrow functions, promises, and async/await." },
//             { question: "Will I build projects?", answer: "Yes, you’ll create interactive web apps to apply your knowledge." }
//         ]
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
//         faq: [
//             { question: "Do I need prior PHP knowledge?", answer: "No, we start from the basics before moving to advanced topics." },
//             { question: "Will I learn how to work with databases?", answer: "Yes! You’ll master MySQL database integration with PHP." },
//             { question: "Will I build a project?", answer: "Yes, you’ll create a complete web application by the end of the course." }
//         ]
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
//         faq: [
//             { question: "Do I need prior database knowledge?", answer: "No, this course is beginner-friendly and covers MongoDB from scratch." },
//             { question: "Will I learn about NoSQL?", answer: "Yes! You’ll learn the basics of NoSQL databases and how they differ from SQL." },
//             { question: "Will I work on real projects?", answer: "Yes, you’ll build a project using MongoDB." }
//         ]
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
//         faq: [
//             { question: "Will I learn Google Ads?", answer: "Yes! This course includes paid search strategies and Google Ads setup." },
//             { question: "Does this course cover social media marketing?", answer: "Yes, we discuss marketing strategies for Facebook, Instagram, LinkedIn, and more." },
//             { question: "Will I learn analytics?", answer: "Yes, you’ll learn how to use tools like Google Analytics to track performance." }
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
        description: "This comprehensive course is designed for beginners who want to dive into the world of UI/UX design. You'll learn the fundamentals of user research, wireframing, prototyping, and usability testing. By the end of the course, you'll be able to create user-centered designs that solve real-world problems. We'll also cover industry-standard tools like Figma and Adobe XD, and you'll work on hands-on projects to build your portfolio.",
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
        description: "This course is your ultimate guide to mastering React JS. You'll start with the basics of React components, JSX, and state management, and gradually move on to advanced topics like hooks, context API, and Redux. By the end of the course, you'll have built multiple dynamic web applications, including a full-fledged e-commerce site. Whether you're a beginner or an experienced developer, this course will help you become proficient in React and prepare you for real-world projects.",
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
        description: "This bootcamp is designed to turn you into a full-stack JavaScript developer. You'll learn everything from frontend development with React to backend development with Node.js, Express, and MongoDB. The course includes hands-on projects, such as building a RESTful API and a full-stack e-commerce application. By the end of the course, you'll have the skills to build and deploy modern web applications from scratch.",
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
        description: "This course is designed for experienced designers who want to take their skills to the next level. You'll learn advanced UI/UX research techniques, including usability testing, user interviews, and design psychology. The course also covers how to create user-centered designs that solve complex problems. By the end of the course, you'll have a deep understanding of how to conduct research and apply it to your design process.",
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
        description: "This course is perfect for anyone who wants to master modern web design. You'll learn how to create responsive, accessible, and visually stunning websites using HTML5 and CSS3. The course covers advanced topics like CSS Grid, Flexbox, and animations. By the end of the course, you'll have built multiple projects, including a portfolio website and a responsive blog layout. Whether you're a beginner or an experienced developer, this course will take your HTML and CSS skills to the next level.",
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
        description: "This course is designed to help you master JavaScript fundamentals. You'll learn everything from basic syntax to advanced topics like ES6+ features, DOM manipulation, and asynchronous programming. The course includes hands-on projects, such as building a to-do app and a weather app. By the end of the course, you'll have a solid understanding of JavaScript and be able to build interactive web applications.",
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
        description: "This course is your gateway to backend development with PHP and MySQL. You'll learn how to build dynamic web applications, manage databases, and create secure user authentication systems. The course includes hands-on projects, such as building a content management system (CMS) and an e-commerce site. By the end of the course, you'll have the skills to build and deploy robust web applications using PHP and MySQL.",
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
        description: "This course is designed to help you get started with MongoDB, a popular NoSQL database. You'll learn how to perform CRUD operations, create indexes, and design data models for modern applications. The course includes hands-on projects, such as building a blog with MongoDB as the backend. By the end of the course, you'll have a solid understanding of MongoDB and be able to use it in your projects.",
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
        description: "This course is your ultimate guide to mastering SEO and digital marketing. You'll learn how to optimize websites for search engines, create effective content marketing strategies, and run successful social media campaigns. The course also covers Google Ads, analytics, and conversion rate optimization. By the end of the course, you'll have the skills to drive traffic and grow your online presence.",
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