'use client';

import { useState } from 'react';
import { profileData } from '../data/profileData';
import styles from '../styles/Contact.module.css';

// CSR - This page is client-side rendered for interactivity
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <head>
        <title>Contact | Ritesh Kumar Singh</title>
        <meta name="description" content="Get in touch with Ritesh Kumar Singh for software engineering opportunities and collaborations." />
      </head>

      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Get In Touch</h1>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Let's Connect</h2>
            <p className={styles.contactIntro}>
              I'm always interested in hearing about new opportunities, collaborations, 
              or just having a chat about technology and software development.
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>📧</div>
                <div className={styles.methodDetails}>
                  <h3>Email</h3>
                  <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>📞</div>
                <div className={styles.methodDetails}>
                  <h3>Phone</h3>
                  <a href={`tel:${profileData.phone.replace(/\s/g, '')}`}>{profileData.phone}</a>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>💼</div>
                <div className={styles.methodDetails}>
                  <h3>LinkedIn</h3>
                  <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>💻</div>
                <div className={styles.methodDetails}>
                  <h3>GitHub</h3>
                  <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                    View My Code
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.locationInfo}>
              <h3>📍 Location</h3>
              <p>{profileData.location}</p>
              <p className={styles.workAuthNote}>{profileData.workAuth}</p>
            </div>
          </div>

          <div className={styles.contactFormSection}>
            <h2>Send a Message</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="6"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={styles.btnPrimary}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
