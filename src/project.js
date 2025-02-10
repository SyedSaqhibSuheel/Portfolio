
import myntra from "./images/Myntra-logo.png"
import face from "./images/face.jpeg"


function Project(){
    return(
        <>
        <div id="projects" className="section4">
                <h2>Projects</h2>
             
          <div className='project'>
          <h3>Myntra Clone</h3>
          
         
          <div className="project-box">
          <img src={myntra} alt="git" className="project-image" />
          <div className="info-container">
           
            <ul>
            Built a Myntra clone using React and Redux, focusing on seamless user experience and smooth functionality. Implemented key features such as adding/removing items to/from the bag, calculating total cost, and ensuring responsive design with Bootstrap for an engaging and efficient shopping experience
            </ul>
          </div>
        </div>
        
        
        
          </div>
        
          <div className='project'>
            
          <h3>Facial Recognized Attendance System</h3>
          
         
          <div className="project-box">
          <a href="https://drive.google.com/file/d/1iIRF0S476DpyniSDWe62sc4E8o9jb7qM/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
 


          <img src={face} alt="git" className="project-image" />
          </a>
          <div className="info-container">
           
        
                  <ul>
                  Developed a low-cost, scalable attendance system for schools and colleges, offering a 75% reduction in operational costs. Utilized Raspberry Pi 4B with real-time face recognition and integrated a liveness detection system to enhance security and ensure accurate student attendance tracking, providing an end-to-end solution for seamless attendance management.
                  </ul>
          </div>
         
        </div>
        <div className='margin'> 
        
        </div>
        
        
        
              </div>
              </div>
        
        </>

    )
}

export default Project;