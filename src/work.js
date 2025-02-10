import mobiot from "./images/logo.png"
import inventron from "./images/inventeron.png"
import qset from "./images/qset.png"

function Work(){

    return (
        <>
         <div id="work-experience" class="section1">
          <h2>Work Experience</h2>
          <div class="experience-container">
            <div class="experience">
              <div class="company-logo mobiot">
               
                <img className="imgsize" src={mobiot} alt="MobIOT Technologies Logo"/>
              
                
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
                <li>Built AI-powered UI components, real-time collaboration tools, and customizable profile pages, leveraging <strong>HTML</strong>, <strong>CSS</strong>, and <strong>API integration</strong>.</li>
          <li>Optimized landing pages and developed interactive features using <strong>JavaScript</strong>, <strong>React</strong>, <strong>Redux</strong>, and <strong>Material-UI</strong>, enhancing user experience.</li>
          
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
                  <p>Project -  e-learning platforms</p>
                 
                  <p>June 2023 - May 2024</p>
                 
                </div>
                <div class="experience-info">
                <ul>
          <li>Implemented a seamless course video upload feature with optimized performance, large file handling, and error management for an enhanced user experience.</li>
          <li>Gained experience with <strong>Java</strong> and contributed to UI design with a focus on accessibility and user-centered principles.</li>
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
        </>
    )
}
export default Work;