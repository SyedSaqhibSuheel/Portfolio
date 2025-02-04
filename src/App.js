import './App.css';

import Work from './work';
import Skills from './skills';


import { ContactUs } from './contact';
import Achievements from './achievements';
import Project from './project';
import Navbar from './navbar';

function App() {
  

  return (
    <>
    <Navbar/>
    <Work/>
    <Skills/>
<Achievements/> 
      <Project/>
      <ContactUs/>      
    </>
  );
}

export default App;
