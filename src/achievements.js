import sih from "./images/SIH.png"
import airobo from "./images/airobo.jpg"

function Achievements(){
    return (
        <>
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
        
        </>
    )
}
export default Achievements;