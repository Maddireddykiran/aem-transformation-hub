
import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const aboutContent = aboutRef.current.querySelectorAll('.fade-in');
    aboutContent.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      aboutContent.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="about" className="section about" ref={aboutRef}>
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-image fade-in">
            <div className="image-container">
              <div className="blob-bg"></div>
            </div>
          </div>
          <div className="about-text fade-in">
            <h3>Digital Transformation Specialist</h3>
            <p>
              As a Senior Manager at Deloitte Digital, I specialize in transforming legacy systems into cutting-edge digital platforms, 
              leveraging AI, ML, and automation to streamline operations and enhance user experiences. With a passion for innovation, 
              I lead multidisciplinary teams that deliver scalable, high-impact solutions for Government and Public Sector clients across the nation.
            </p>
            <p>
              I thrive at the intersection of technology, strategy, and execution, ensuring that digital transformation efforts drive 
              measurable impact and long-term success. My expertise in Adobe Experience Manager (AEM), Adobe LiveCycle, and RESTful web services 
              allows me to develop comprehensive solutions that meet complex business requirements.
            </p>
            <div className="about-highlights">
              <div className="highlight fade-in">
                <h4>7+ Years</h4>
                <p>at Deloitte Digital</p>
              </div>
              <div className="highlight fade-in">
                <h4>14+ Years</h4>
                <p>Industry Experience</p>
              </div>
              <div className="highlight fade-in">
                <h4>PMP®</h4>
                <p>Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
