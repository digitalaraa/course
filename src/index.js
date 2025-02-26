// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import all styles from index.css

//import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

import AOS from 'aos';
import 'aos/dist/aos.css';

import WOW from 'wowjs';
import $ from 'jquery';

import App from './App';

// Initialize AOS and WOW animations
AOS.init();
new WOW.WOW().init();

$(document).ready(function () {
  console.log('jQuery is working!');
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
