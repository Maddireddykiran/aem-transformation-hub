
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-name">
            <h3>Naveen Vanam</h3>
            <p>Digital Transformation Specialist</p>
          </div>
          
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Naveen Vanam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
