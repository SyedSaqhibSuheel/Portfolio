
import './App.css';
import pic from './pic.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (


   <div className = "Protfolio">
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
    <div>
      <img src={pic} alt="img" className="photo"/>
    <h1>Hi all, I'm Syed Saqhib Suheel <span>👋</span></h1>
    <h3 className="info">A passionate Frontend Software Developer 🚀 having <br/> an experience of building Web applications with <br/> JavaScript / Reactjs / Material UI  and some <br/> other cool libraries and frameworks.</h3>
    <div className='icons'>
      <GitHubIcon/>
      <LinkedInIcon/>
      <InstagramIcon/>
      <EmailIcon/>
      

    </div>

    <button className='button'>Contract Me</button>
    <button className='button'>Resume Download</button>
    </div>
  


 
     
   </div>
  );
}

export default App;
