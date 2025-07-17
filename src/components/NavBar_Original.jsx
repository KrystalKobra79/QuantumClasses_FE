import '../styles/NavBar.scss';
import "../styles/RootStyle.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faBars, faBookOpen,faHome, faInfoCircle, faPerson } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => { setMenuOpen(!menuOpen); }
    return (
        <>
        <main className="main-content">
          
        </main>
          <ul className={`navbar ${menuOpen? "open" : ""}`}>
            <li className="nav-item">
              <span className="link-text">
                <FontAwesomeIcon className='link-icon' id='menu-icon' icon={faBars} onClick={handleMenuToggle}></FontAwesomeIcon>
              <label htmlFor="link-toggle" className="link-text-invisible">Mwnu</label>
              </span>
                    
            </li>

            <li className="nav-item">
              <Link to={"/"} className="nav-link" id='link-home'>
                <span className="link-text">
                  <FontAwesomeIcon className='link-icon' icon={faHome} ></FontAwesomeIcon>
                  <label htmlFor="link-home" className="link-text-name">Home</label>
                </span></Link>
                </li>

        <li className="nav-item">
          <Link to={"/courses_offered"} className="nav-link" id='link-courses'>
            <span className="link-text">
              <FontAwesomeIcon className='link-icon' icon={faBookOpen}></FontAwesomeIcon>
              <label htmlFor="link-courses" className="link-text-name">Courses</label>
              </span></Link>
              </li>

        <li className="nav-item" id='link-enquiry'>
          <Link to={"/contact"} className="nav-link">
            <span className="link-text">
              <FontAwesomeIcon className='link-icon' icon={faPerson}></FontAwesomeIcon>
              <label htmlFor="link-enquiry" className="link-text-name">Enquiry</label>
              </span></Link>
              </li>

        <li className="nav-item">
          <Link to={"/about_page"} className="nav-link" id='link-about'>
            <span className="link-text">
              <FontAwesomeIcon className='link-icon' icon={faInfoCircle}></FontAwesomeIcon>
              <label htmlFor="link-about" className="link-text-name">About</label>
              </span></Link>
              </li>

        <li className="nav-item">
              <span className="link-text">
                <FontAwesomeIcon className='link-icon' id='logo' icon={faAngleDoubleLeft}></FontAwesomeIcon>
              <label htmlFor="link-toggle" className="link-text-invisible">Home</label>
              </span>
                    
            </li>
      </ul>
        </>
    );
}

export default NavBar

