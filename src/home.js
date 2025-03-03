import pic from './images/pic.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ResumeButton from './resume';
import Lottie from "lottie-react"
import Cloud from "./images/cloud.json"
import Animation from "./images/Animation.json"


function Home(){

    return(
        <>

    <div className="content">
    {/* <img src={Cloud} alt="Syed Saqhib Suheel" className="photo" loading="lazy" /> */}
    <div className='cloud'>
    <Lottie className="photo" animationData={Animation}></Lottie>
    </div>

        <h1>
          Hi all, I'm Syed Saqhib Suheel <span>👋</span>
        </h1>
        <h3 className="info">
          A passionate Frontend Software Developer 🚀 with experience in
          building Web applications using JavaScript / Reactjs / Material UI and
          other cool libraries and frameworks.
        </h3>
        <div className="icons">
        <a href="https://github.com/SyedSaqhibSuheel" target="_blank" rel="noopener noreferrer">
  <GitHubIcon />
</a> 
          <a href='https://in.linkedin.com/in/syed-saqhib-suheel'> 
          <LinkedInIcon />
          </a> 
          <a href='https://www.instagram.com/code__yatra?igsh=dmd5NmQ0a2tmNW4y'>
          <InstagramIcon />
          </a>
          <a href="#contact">
  <EmailIcon /> 
</a>
        </div>
        <a href="#contact">
        <button className="button">Contact Me</button></a>
      <ResumeButton/>
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

           </>

    )

      
}

export default Home;