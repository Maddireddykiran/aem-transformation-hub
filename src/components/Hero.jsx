
import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('appear');
    
    const animateParticles = () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 9;
        
        particle.style.setProperty('--random-x', `${randomX}px`);
        particle.style.setProperty('--random-y', `${randomY}px`);
        particle.style.setProperty('--delay', `${randomDelay}s`);
        particle.style.setProperty('--duration', `${randomDuration}s`);
      });
    };
    
    animateParticles();
    // Re-animate particles periodically
    const interval = setInterval(animateParticles, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-particles">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>Naveen Vanam</h1>
          <h2>Specialist Leader at Deloitte Digital</h2>
          <p>Digital Transformation Expert | AEM & Adobe LiveCycle Specialist | RESTful Web Services</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">Get In Touch</a>
            <a href="#expertise" className="btn secondary-btn">Explore My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
