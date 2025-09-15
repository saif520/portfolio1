import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* HEADER */}
      <header className="header fade-in">
        <h1 className="name">Saifuddin Dhali</h1>
        <p className="title">Full Stack Web Developer</p>
        <p className="contact-info">
          📞 +91 9851902688 | 📧 saifuddin0433@gmail.com | 📍 Basirhat, West Bengal
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/saifuddin-dhali-777b3b230/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer">🌐 Portfolio</a>
          <a href="https://github.com/saif520" target="_blank" rel="noreferrer">💻 GitHub</a>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="section card slide-up">
        <h2>Professional Summary</h2>
        <p>
          Dynamic full stack web developer skilled in MERN stack, API design, and efficient database management.
          Proficient in collaborative development with a keen eye for detail and strong problem-solving abilities.
          Dedicated to delivering scalable and robust web solutions through effective communication and continuous learning.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="section card slide-up">
        <h2>Education</h2>
        <ul>
          <li><strong>Bachelor of Engineering in INFORMATION TECHNOLOGY</strong> – Jadavpur University</li>
          <li><strong>Full Stack Web Development Course</strong> – Masai School</li>
        </ul>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="section card slide-up">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {[
            "C","C++","Java","Python","HTML","CSS","Bootstrap","JavaScript","React","Redux",
            "Node.js","Express","MongoDB","MySQL","GitHub","Figma","ChatGPT","DSA"
          ].map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="section card slide-up">
        <h2>Soft Skills</h2>
        <div className="skills-grid">
          {["Problem Solving","Attention to Detail","Teamwork","Time Management"].map((skill, i) => (
            <span key={i} className="skill-tag soft-skill">{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section card slide-up">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Fashion Zero – Full-Stack E-Commerce Website</h3>
          <p><strong>Tech Stack:</strong> React, CSS, Redux, Node.js, Express.js, MongoDB, Stripe, Nodemailer, Twilio, JWT</p>
          <ul>
            <li>Fully functional e-commerce web app with modern UI/UX and multiple user features.</li>
            <li>Secure backend with authentication, email/phone verification, and JWT login.</li>
            <li>Integrated Stripe Payments, real-time tracking, and order status notifications.</li>
            <li>Deployed on Render, tested with Postman, configured for production.</li>
          </ul>
          <div className="project-links">
            <a href="https://fashion-zero-client.onrender.com/" target="_blank" rel="noreferrer" className="btn-link">🔗 Live Project</a>
            <a href="https://github.com/saif520/fashion-zero1" target="_blank" rel="noreferrer" className="btn-link">💻 GitHub Repo</a>
          </div>
        </div>
      </section>

      {/* DSA */}
      <section className="section card slide-up">
        <h2>Achievements in DSA</h2>
        <p>Solving DSA problems regularly on LeetCode, Codeforces, and HackerRank.</p>
        <div className="links">
          <a href="https://leetcode.com/u/saifuddinDhali/" target="_blank" rel="noreferrer">🔥 LeetCode</a>
          <a href="https://codeforces.com/profile/saifuddin2k17" target="_blank" rel="noreferrer">⚡ Codeforces</a>
          <a href="https://www.hackerrank.com/profile/saifuddin2k17" target="_blank" rel="noreferrer">🏆 HackerRank</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
