import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WOW from 'wowjs';

import Header from './components/Header';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Courses from './pages/course';
import Contact from './pages/contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/privacypolicy';
import TermsConditions from './pages/termsconditions';

function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();

    // Initialize WOW.js for animations
    new WOW.WOW().init();
    
    // Any custom JS initialization can go here
    window.jQuery && window.jQuery('.your-element').fadeIn();

  }, []);
  return (
   <>
   <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}> </Route>
        <Route path="/termsconditions" element={<TermsConditions />}> </Route>
    </Routes>
    <Footer />
   </Router>
    
   </>
  );
}

export default App;
