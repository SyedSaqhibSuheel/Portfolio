import sih from "./images/SIH.png"
import airobo from "./images/airobo.jpg"

function Achievements(){
    return (
        <>
        <div id="achievements" class="section3">
          <h2>Achievements</h2>
          <div class=" thought">
                <ul>
                <li>"Achievements are not just milestones; they are proof of perseverance, innovation, and the courage to turn ideas into reality." 🚀</li>
         
        </ul>
        
        
                </div>
          
          <div class="achi-container">
            <div class="achi">
              <div class="achi-logo sih">
               
                <img src={sih} alt="achi Logo"/>
              
                
              </div>
              <div class="separator"></div>
              <div class="achi-details">
                <div class="ex-details">
                  <h3>WINNER of Smart India Hackathon 2022 <br/><h4>National Level </h4></h3>
                  <a href="https://drive.google.com/file/d/1i1VT6R0AW_9-77o7-p3IaduzILIMeaTF/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
  <button className="Certificate">Certificate</button>
</a>

                  <p>Facial Recognition Attendance System </p>
                  
                </div>
                <div class="ex-info">
                <ul>
                <li>Engineered a cost-effective, scalable facial recognition attendance system for educational institutions, slashing operational costs by 75%. Leveraged Raspberry Pi 4B with real-time face recognition to streamline student tracking. Designed an automated data export feature for seamless attendance reporting and integrated liveness detection to prevent spoofing, ensuring robust security and system integrity.</li>
         
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
                  <a href="https://drive.google.com/file/d/1iBsnudw53I5MWFs4o232agwwOrq0EffO/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
  <button className="Certificate">Certificate</button> </a>
                 
                </div>
                <div class="ex-info">
                <ul>
                <li>Secured 1st place at the Entrepreneurship Meet by pitching an innovative Facial Recognition Attendance System for educational institutions. Showcased market research, business strategy, and persuasive pitching skills while collaborating on a viable business model. Demonstrated creativity, problem-solving, and leadership, reinforcing expertise in business development and entrepreneurship.</li>
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