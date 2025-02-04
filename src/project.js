import git from "./images/git.png"

function Project(){
    return(
        <>
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
        
        </>

    )
}

export default Project;