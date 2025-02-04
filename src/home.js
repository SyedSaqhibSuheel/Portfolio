import pic from './images/pic.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Home(){

    return(
        <>

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
          <GitHubIcon  />
          <LinkedInIcon />
          <InstagramIcon />
          <a href="#contact">
  <EmailIcon /> 
</a>
        </div>
        <a href="#contact">
        <button className="button">Contact Me</button></a>
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

           </>

    )

      
}

export default Home;