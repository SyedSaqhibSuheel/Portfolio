import Home from './home';
import MenuIcon from '@mui/icons-material/Menu'; 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // Import Up Icon
import { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);  
    } else {
      setShowNavbar(true);  
    }
    setLastScrollY(window.scrollY);

    // Show the "Up" button when scrolled down
    if (window.scrollY > 300) {
      setShowUpButton(true);
    } else {
      setShowUpButton(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll to the top when clicking the up icon
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div id='about' className="Portfolio">
        <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={closeMenu}><a href="#about">About</a></li>
            <li onClick={closeMenu}><a href="#work-experience">Work Experience</a></li>
            <li onClick={closeMenu}><a href="#skills">Skills</a></li>
            <li onClick={closeMenu}><a href="#achievements">Achievements</a></li>
            <li onClick={closeMenu}><a href="#projects">Projects</a></li>
            <li onClick={closeMenu}><a href="#contact">Contact</a></li>
          </ul>

          <div className="hamburger" onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </nav>

        {/* Up Icon Button */}
        {showUpButton && (
          <div className="scroll-up" onClick={scrollToTop}>
            <KeyboardDoubleArrowUpIcon />
          </div>
        )}

        <Home />
      </div>

    </>
  );
}

export default Navbar;
