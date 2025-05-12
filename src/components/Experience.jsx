
import React, { useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const experienceItems = experienceRef.current.querySelectorAll('.fade-in, .timeline-item');
    experienceItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      experienceItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const experienceData = [
    {
      company: 'Deloitte Digital',
      role: 'Specialist Leader',
      period: 'May 2021 - Present',
      location: 'Houston, Texas, United States',
      description: 'Leading digital transformation initiatives for Government and Public Sector clients, overseeing the implementation of AEM and Adobe LiveCycle solutions.'
    },
    {
      company: 'Deloitte Digital',
      role: 'Specialist Master',
      period: 'March 2018 - May 2021',
      location: 'Houston, Texas, United States',
      description: 'Designed and implemented enterprise-scale AEM solutions, led technical teams, and provided strategic guidance for digital transformation projects.'
    },
    {
      company: 'Adobe',
      role: 'Lead AEM Developer / Technical Account Manager',
      period: 'May 2017 - October 2017',
      location: 'Greater New York City Area',
      description: 'Served as lead developer and technical account manager for AEM implementations, ensuring quality delivery and client satisfaction.'
    },
    {
      company: 'Florida Department of Environmental Protection',
      role: 'Sr. AEM Forms Developer / Solutions Architect',
      period: 'June 2015 - May 2017',
      location: 'Tallahassee, Florida Area',
      description: 'Architected and developed AEM Forms solutions to digitize government processes and enhance citizen experience.'
    },
    {
      company: 'Deloitte',
      role: 'Sr. Adobe LiveCycle Consultant',
      period: 'August 2014 - May 2015',
      location: 'Camp Hill, Pennsylvania',
      description: 'Implemented Adobe LiveCycle solutions for document management and workflow automation for public sector clients.'
    },
    {
      company: 'R3 Technologies, Inc.',
      role: 'Software Consultant',
      period: '2004 - March 2018',
      location: '',
      description: 'Provided consulting services for software development and implementation, specializing in Adobe technologies.'
    }
  ];

  return (
    <section id="experience" className="section experience" ref={experienceRef}>
      <div className="container">
        <div className="section-title fade-in">
          <h2>Professional Experience</h2>
        </div>
        <div className="experience-intro fade-in">
          <p>
            With a career spanning over 14 years, I've contributed to diverse projects across 
            multiple industries, consistently delivering innovative solutions that drive business value.
          </p>
        </div>
        <div className="timeline">
          {experienceData.map((job, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-date">{job.period}</div>
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                {job.location && <div className="timeline-location">{job.location}</div>}
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
