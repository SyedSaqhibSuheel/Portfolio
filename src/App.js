import './App.css';
import pic from './pic.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon

import mobiot from "./logo.png"
import inventron from "./inventeron.png"
import qset from "./qset.png"

import { useState, useEffect } from 'react';

function App() {
  // State to handle mobile menu toggle
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    // If the user scrolls down, hide the navbar
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);  // Scrolling down
    } else {
      setShowNavbar(true);  // Scrolling up
    }
    setLastScrollY(window.scrollY);  // Update the last scroll position
  };

  // Add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
    <div className="Portfolio">
     
      {/* Navigation Bar */}
     
      <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>

        {/* Hamburger Icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </nav>
      

      {/* Main Content */}
      <div className="content">
        <img src={pic} alt="Syed Saqhib Suheel" className="photo" />
        <h1>
          Hi all, I'm Syed Saqhib Suheel <span>👋</span>
        </h1>
        <h3 className="info">
          A passionate Frontend Software Developer 🚀 with experience in
          building Web applications using JavaScript / Reactjs / Material UI and
          other cool libraries and frameworks.
        </h3>
        <div className="icons">
          <GitHubIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <EmailIcon />
        </div>
        <button className="button">Contact Me</button>
        <button className="button">Resume Download</button>
      </div>
      <div className="wrapper">
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     </div>
    </div>

    <div id="work-experience" class="section1">
  <h2>Work Experience</h2>
  <div class="experience-container">
    <div class="experience">
      <div class="company-logo mobiot">
       
        <img src={mobiot} alt="MobIOT Technologies Logo"/>
      
        
      </div>
      <div class="separator"></div>
      <div class="experience-details">
        <div class="company-details">
          <h3>UI Developer</h3>
          <p>MobIOT Technologies</p>
          <p>May 2024 - Present</p>
          <p>Project - code2diagam</p>
        </div>
        <div class="experience-info">
        <ul>
  <li>Optimized landing pages and developed interactive features using <strong>JavaScript</strong>, <strong>React</strong>, <strong>Redux</strong>, and <strong>Material-UI</strong>, enhancing user experience.</li>
  <li>Built AI-powered UI components, real-time collaboration tools, and customizable profile pages, leveraging <strong>HTML</strong>, <strong>CSS</strong>, and <strong>API integration</strong>.</li>
</ul>


        </div>
      </div>
    </div>
    <div class="experience">
      <div class="company-logo inventron">
      
        <img src={inventron} alt="Inventron Technologies Logo"/>
     
        
      </div>
      <div class="separator"></div>
      <div class="experience-details">
        <div class="company-details">
          <h3>Associate Software Engineer</h3>
          <p>Inventron Technologies</p>
          <p>June 2023 - May 2024</p>
         
        </div>
        <div class="experience-info">
        <ul>
  <li>Designed and developed user-friendly, dynamic web pages using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Bootstrap</strong>, improving interactivity and data display.</li>
  <li>Gained experience with <strong>Java</strong> for backend development and contributed to UI design with a focus on accessibility and user-centered principles.</li>
</ul>

        </div>
      </div>
    </div>
    <div class="experience">
      <div class="company-logo qset">
        
        <img src={qset} alt="Freelancing Logo"/>
      
       
      </div>
      <div class="separator"></div>
      <div class="experience-details">
        
        <div class="company-details">
          <h3>Frontend Developer and Content Creator</h3>
          <p>Qset - Freelancing</p>
          <p>Project - Qset.io</p>
        </div>
        <div class="experience-info">
        <ul>
  <li>Leveraged <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>SCSS</strong>, and <strong>Material UI</strong> to develop responsive, user-friendly web interfaces, boosting engagement and conversion rates.</li>
  <li>Designed interactive UI components, including a landing page and question set, enhancing user experience and accessibility across devices.</li>
</ul>

        </div>
      </div>
    </div>
  </div>
</div>



        <div id="skills" className="section2">
        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> JavaScript, HTML, CSS, Java</li>
          <li><strong>Libraries:</strong> React, Redux, Material UI, Bootstrap</li>
          <li><strong>Tools:</strong> Git, Github, Canva</li>
          <li><strong>Soft Skills:</strong> Excellent communication, Problem Solving, Team Management, Content Creation, Digital Marketing</li>
        </ul>
      </div>

      {/* Achievements Section */}
      <div id="achievements" className="section3">
        <h2>Achievements</h2>
        <ul>
          <li>Winner - Smart India Hackathon (1 lakh cash prize) for Project: Facial Recognized Attendance (National level)</li>
          <li>Winner - Entrepreneurship Meet on Emerging Business (August 2022)</li>
          <li>Winner - Smart India Hackathon (September 2022)</li>
        </ul>
      </div>

      {/* Projects Section */}
      <div id="projects" className="section4">
        <h2>Projects</h2>
        <div className="project">
          <h3>Myntra Clone</h3>
          <p>Developed a Myntra Clone page using React with Redux. (August 2023 – October 2023)</p>
          <ul>
            <li>Implemented functionalities such as adding to the bag, calculating the total cost, and removing from the bag.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Facial Recognized Attendance System</h3>
          <p>Smart India Hackathon Winner (National level) (April 2022 – August 2022)</p>
          <ul>
            <li>A low-cost, robust, highly scalable attendance system with an end-to-end solution for schools & colleges, providing 75% cost reduction.</li>
            <li>Cameras connected with Raspberry Pi 4B for face recognition, with a liveliness detection system.</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section5">
        <h2>Contact Me</h2>
        <p><strong>Email:</strong> <a href="mailto:syedsaqhib982@gmail.com">syedsaqhib982@gmail.com</a></p>
        <p><strong>Mobile:</strong> <a href="tel:+919113578452">9113578452</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://in.linkedin.com/in/syed-saqhib-suheel" target="_blank" rel="noopener noreferrer">Syed Saqhib Suheel</a></p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/code__yatra/" target="_blank" rel="noopener noreferrer">@code__yatra</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/SyedSaqhibSuheel" target="_blank" rel="noopener noreferrer">SyedSaqhibSuheel</a></p>
      </div>

      
    </>
  );
}

export default App;
