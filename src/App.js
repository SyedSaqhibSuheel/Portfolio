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
import html from "./html5.jpg"
import css from "./css3.jpg"
import js from "./js.jpeg"
import java from "./java.png"
import reacticon from "./R.png"
import reduxicon from "./redux-logo.png"
import material from "./OIP.jpeg";
import boots from "./bootstrap-logo-shadow.png";
import git from "./git.png"
import github from "./github.png"
import canva from "./canva.png"
import sih from "./SIH.png"
import airobo from "./airobo.jpg"

import { useState, useEffect } from 'react';
import { ContactUs } from './contact';

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
    <div id='about' className="Portfolio">
     
      {/* Navigation Bar */}
     
      <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
        
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
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
  <div className='languages'>
  <h3>Languages</h3>
  <ul className="skills-list">
   
    <li className="skill-item">
      <div className="skill-box">
        <img src={js} alt="JavaScript" className="skill-image" />
        <p className="skill-name">JavaScript</p>
      </div>
    </li>
    <li className="skill-item">
      <div className="skill-box">
      <img src={html} alt="HTML" className="skill-image" />
        <p className="skill-name">HTML</p>
      </div>
    </li>
    <li className="skill-item">
      <div className="skill-box">
        <img src={css} alt="CSS" className="skill-image" />
        <p className="skill-name">CSS</p>
      </div>
    </li>
    <li className="skill-item">
      <div className="skill-box">
        <img src={java} alt="Java" className="skill-image" />
        <p className="skill-name">Java</p>
      </div>
    </li>
  
  </ul>
  </div>


  <div className='languages'>
  <h3>Libraries / Freamworks</h3>
  <ul className="skills-list">
   
    <li className="skill-item">
      <div className="skill-box">
        <img src={reacticon} alt="react" className="skill-image" />
        <p className="skill-name">React JS</p>
      </div>
    </li>
    <li className="skill-item">
      <div className="skill-box">
        <img src={reduxicon} alt="redux" className="skill-image" />
        <p className="skill-name">Redux</p>
      </div>
    </li>
    <li className="skill-item">
      <div className="skill-box">
        <img src={material} alt="Material UI" className="skill-image" />
        <p className="skill-name">Material UI</p>
      </div>
    </li>
    <li className="skill-item">
      <div className="skill-box">
        <img src={boots} alt="Bootstrap" className="skill-image" />
        <p className="skill-name">Bootstrap</p>
      </div>
    </li>

 
  
  </ul>
  </div>

  <div className='languages'>
  <h3>Tools</h3>
  <ul className="skills-list">
   
    <li className="skill-item">
      <div className="skill-box">
        <img src={git} alt="react" className="skill-image" />
        <p className="skill-name">Git</p>
      </div>
    </li>
    <li className="skill-item">
      <div className="skill-box">
        <img src={github} alt="redux" className="skill-image" />
        <p className="skill-name">GitHub</p>
      </div>
    </li>
    <li className="skill-item">
      <div className="skill-box">
        <img src={canva} alt="Material UI" className="skill-image" />
        <p className="skill-name">Canva</p>
      </div>
    </li>
   

 
  
  </ul>
  </div>

  </div>  

{/* Achievements Section */}
<div id="achievements" class="section3">
  <h2>Achievements</h2>
  <div class="achi-container">
    <div class="achi">
      <div class="achi-logo sih">
       
        <img src={sih} alt="achi Logo"/>
      
        
      </div>
      <div class="separator"></div>
      <div class="achi-details">
        <div class="ex-details">
          <h3>WINNER of Smart India Hackathon 2022 <br/><h4>National Level </h4></h3>
          <button className="Certificate">Certificate</button>
          <p>Facial Recognition Attendance System </p>
          
        </div>
        <div class="ex-info">
        <ul>
  <li>Designed and implemented a low-cost, scalable facial recognition-based attendance system for schools and colleges, achieving a 75% reduction in operational costs. Integrated Raspberry Pi 4B with cameras to conduct real-time face recognition for accurate student attendance tracking. Developed an automated data export feature to generate and store attendance sheets. Additionally, incorporated a liveliness detection system to enhance security and prevent unauthorized access, ensuring system reliability and integrity</li>
 
</ul>


        </div>
      </div>
    </div>
    <div class="achi">
      <div class="achi-logo airobo">
      
        <img src={airobo} alt="Inventron Technologies Logo"/>
     
        
      </div>
      <div class="separator"></div>
      <div class="achi-details">
        <div class="ex-details">
          <h3> Winner of Entrepreneurship Meet on Emerging Business at Airobosoft</h3>
          <button className="Certificate">Certificate</button>
         
        </div>
        <div class="ex-info">
        <ul>
  <li>Won first place in the Entrepreneurship Meet by presenting an innovative business concept based on a Facial Recognition Attendance System designed for educational institutions.Demonstrated strong entrepreneurial skills, including market research, business strategy, and effective pitching. Collaborated with a team to develop a viable business model that addressed a gap in the market, showcasing creativity, problem-solving, and leadership abilities. The experience enhanced my understanding of business development and entrepreneurship.</li>
  
</ul>

        </div>
      </div>
    </div>
  

      </div>
    </div>



      {/* Projects Section */}
      <div id="projects" className="section4">
        <h2>Projects</h2>
     
  <div className='project'>
  <h3>Myntra Clone</h3>
  
 
  <div className="project-box">
  <img src={git} alt="git" className="project-image" />
  <div className="info-container">
   
    <ul>
    Built a Myntra clone using React and Redux from August 2023 to October 2023. Implemented features like adding items to the bag, calculating the total cost, and removing items from the bag. Worked on ensuring smooth functionality and good user experience.
    </ul>
  </div>
</div>



  </div>

  <div className='project'>
  <h3>Facial Recognized Attendance System</h3>
  
 
  <div className="project-box">
  <img src={git} alt="git" className="project-image" />
  <div className="info-container">
   
  <p>Smart India Hackathon Winner (National level) (April 2022 – August 2022)</p>
          <ul>
            A low-cost, robust, highly scalable attendance system with an end-to-end solution for schools & colleges, providing 75% cost reduction.
            Cameras connected with Raspberry Pi 4B for face recognition, with a liveliness detection system.
          </ul>
  </div>
</div>
<div className='margin'> 

</div>



      </div>
      </div>

     
     
      <ContactUs/>





      
    </>
  );
}

export default App;
