import React from 'react';
import BlobImage from './assets/Blob.jpg';
import AboutImage from './assets/Ablob.png';
import ProjectImage1 from './assets/IMG.jpg'; // Project Image 1
import ProjectImage2 from './assets/IMG.jpg'; // Project Image 2
import ProjectImage3 from './assets/IMG.jpg'; // Project Image 3
import ProjectImage4 from './assets/IMG.jpg'; // Project Image 4
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero bordered">
        <div className="left bordered">
          <div className="box bordered">
            <h1 className="bordered">Hi, I’m <br />Name</h1>
            <h3 className="bordered">Creative Frontend Developer <br /> UI Designer</h3>
            <button className="bordered">Let’s Connect</button>
          </div>
        </div>
        <div className="right bordered">
          <img src={BlobImage} alt="Blob Shape" className="blob-image" />
        </div>
      </section>

      {/* About Me Section */}
      <section className="about bordered">
        <div className="left">
          <div className="hex-shape"></div> {/* Hexagonal shape */}
          <div className="box">
            <h2>About Me</h2>
            <p>
              I’m a passionate frontend developer focused on elegant user experiences and pixel-perfect interfaces. I love transforming ideas into visual reality. With expertise in HTML, CSS, JavaScript, and React, I design seamless web applications and beautiful UIs.
            </p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="vertical-divider"></div> {/* Vertical divider line */}

        <div className="right">
          <div className="box">
            <div className="image-placeholder">
              <img src={AboutImage} alt="About Me" className="about-image" />
            </div>
          </div>
        </div>

        {/* Flying Elements */}
        <div className="flying-element flying-element1"></div>
        <div className="flying-element flying-element2"></div>
        <div className="flying-element flying-element3"></div>
      </section>

      {/* What I Do Section */}
      <section className="services bordered">
        <h2>What I Do</h2>
        <div className="service-boxes">
          <div className="service">
            <div className="icon">■</div>
            <h4>Web Design</h4>
            <p>Creating visually stunning and user-friendly website designs.</p>
          </div>
          <div className="service">
            <div className="icon">●</div>
            <h4>Frontend Development</h4>
            <p>Building responsive, fast, and accessible interfaces using React.</p>
          </div>
          <div className="service">
            <div className="icon">▭</div>
            <h4>Branding</h4>
            <p>Crafting unique brand identities and visual communication.</p>
          </div>
        </div>
      </section>

      {/* My Work Section */}
     {/* My Work Section */}
<section className="portfolio bordered">
  <div className="projects">
    <div className="project">
      <img src={ProjectImage1} alt="Project 1" className="project-image" />
      <div className="project-title">Portfolio Website</div>
    </div>
    <div className="project">
      <img src={ProjectImage2} alt="Project 2" className="project-image" />
      <div className="project-title">E-commerce Platform</div>
    </div>
    <div className="project">
      <img src={ProjectImage3} alt="Project 3" className="project-image" />
      <div className="project-title">Blog CMS</div>
    </div>
    <div className="project">
      <img src={ProjectImage4} alt="Project 4" className="project-image" />
      <div className="project-title">Social Media App</div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="contact bordered">
        <div className="left bordered">
          <h2 className="bordered">Let’s Work Together</h2>
          <form className="contact-form bordered">
            <input type="text" placeholder="Name" className="bordered" />
            <input type="email" placeholder="Email" className="bordered" />
            <textarea placeholder="Message" className="bordered"></textarea>
            <button type="submit" className="bordered">Send Message</button>
          </form>
        </div>
        <div className="right bordered">
  <div className="contact-details bordered">
    <div className="detail-item">
      <span className="icon">📧</span>
      <span>real@sscal.com</span>
    </div>
    <div className="detail-item">
      <span className="icon">📍</span>
      <span>Lagos, Nigeria</span>
    </div>
    <div className="detail-item">
      <span className="icon">🌐</span>
      <span>www.infentingcab.com</span>
    </div>
    <div className="detail-item">
      <span className="icon">📞</span>
      <span>+234 800 000 0000</span>
    </div>
  </div>
</div>

      </section>

      {/* Footer Section */}
<footer className="footer bordered">
  <div className="footer-box bordered logo-box">
    <h3 className="bordered">LOGO</h3>
  </div>
  <div className="footer-box bordered center-box">
    <p className="bordered">© 2025 All rights reserved</p>
  </div>
  <div className="footer-box bordered social-box">
    <span className="bordered">🌐</span>
    <span className="bordered">📘</span>
    <span className="bordered">📷</span>
  </div>
</footer>
    </div>
  );
}

export default App;
