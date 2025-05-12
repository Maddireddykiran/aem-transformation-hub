
import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const contactItems = contactRef.current.querySelectorAll('.fade-in, .slide-right, .slide-left');
    contactItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      contactItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section contact" ref={contactRef}>
      <div className="container">
        <div className="section-title fade-in">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info slide-right">
            <h3>Contact Information</h3>
            <p>Feel free to reach out if you're interested in digital transformation solutions or have questions about Adobe Experience Manager, LiveCycle, or RESTful web services.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon email"></div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>vanam413@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon location"></div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Houston, Texas, United States</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon linkedin"></div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <p><a href="https://www.linkedin.com/in/nvanam" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/nvanam</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon blog"></div>
                <div className="contact-text">
                  <h4>Blog</h4>
                  <p><a href="https://alcpro.blogspot.com" target="_blank" rel="noopener noreferrer">alcpro.blogspot.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form slide-left">
            <h3>Send a Message</h3>
            {formSubmitted ? (
              <div className="form-success">
                <div className="success-icon"></div>
                <h4>Thank you!</h4>
                <p>Your message has been sent successfully. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
