
import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          
          if (entry.target.classList.contains('skill-progress')) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
              const width = bar.getAttribute('data-width');
              bar.style.width = `${width}%`;
            });
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const skillItems = skillsRef.current.querySelectorAll('.fade-in, .skill-progress, .skill-card');
    skillItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      skillItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const technicalSkills = [
    { name: 'Adobe Experience Manager (AEM)', proficiency: 95 },
    { name: 'Adobe LiveCycle', proficiency: 98 },
    { name: 'RESTful Web Services', proficiency: 90 },
    { name: 'Java/J2EE', proficiency: 85 },
    { name: 'HTML/CSS/JavaScript', proficiency: 88 },
    { name: 'Artificial Intelligence & ML', proficiency: 75 },
  ];

  const professionalSkills = [
    { name: 'Project Management', proficiency: 92 },
    { name: 'Team Leadership', proficiency: 90 },
    { name: 'Problem Solving', proficiency: 95 },
    { name: 'Digital Strategy', proficiency: 88 },
    { name: 'Client Communication', proficiency: 94 },
    { name: 'System Integration', proficiency: 92 },
  ];

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <div className="section-title fade-in">
          <h2>Skills & Expertise</h2>
        </div>
        
        <div className="skills-categories">
          <div className="skills-category">
            <h3 className="fade-in">Technical Skills</h3>
            <div className="skill-progress fade-in">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.proficiency}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar" 
                      data-width={skill.proficiency}
                      style={{width: '0%'}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="fade-in">Professional Skills</h3>
            <div className="skill-progress fade-in">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.proficiency}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar professional" 
                      data-width={skill.proficiency}
                      style={{width: '0%'}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <h3 className="certifications-title fade-in">Certifications</h3>
        <div className="certifications-grid">
          <div className="skill-card fade-in">
            <div className="certification-icon pmp"></div>
            <h4>Project Management Professional (PMP)</h4>
            <p>Project Management Institute</p>
          </div>
          <div className="skill-card fade-in">
            <div className="certification-icon aem"></div>
            <h4>Adobe Experience Manager Developer</h4>
            <p>Adobe</p>
          </div>
          <div className="skill-card fade-in">
            <div className="certification-icon livecycle"></div>
            <h4>Adobe LiveCycle Expert</h4>
            <p>Adobe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
