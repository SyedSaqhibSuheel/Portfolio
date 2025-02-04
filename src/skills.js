import html from "./images/html5.jpg"
import css from "./images/css3.jpg"
import js from "./images/js.jpeg"
import java from "./images/java.png"
import reacticon from "./images/R.png"
import reduxicon from "./images/redux-logo.png"
import material from "./images/OIP.jpeg";
import boots from "./images/bootstrap-logo-shadow.png";
import github from "./images/github.png"
import canva from "./images/canva.png"
import git from "./images/git.png"

function Skills(){

    return(
        <>
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
        
        </>
    )
}

export default Skills;