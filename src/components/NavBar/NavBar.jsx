import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBookOpen,faHome, faInfoCircle,faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import "./NavBar.scss";
import './QuantumClasses.jpg'



const NavBar = () => {
  return (
<div id="webcrumbs"> 
        	<div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
	  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
	    <div className="flex justify-between items-center h-16">
	      <div className="flex items-center">
	        <div className="flex-shrink-0">
	          <div className="flex items-center">
	            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
	              <span className="text-white font-bold text-lg">
									<img src="./QuantumClasses.jpg" alt="QC" id='qc_logo'/>
								</span>
	            </div>
	            <span className="ml-2 text-xl font-bold text-gray-900">Quantum Classes</span>
	          </div>
	        </div>
	        <div className="hidden md:block">
	          <div  className="ml-10 flex items-baseline space-x-8">

						<Link to={"/"} className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" id='link-home'>
            <span className="material-symbols-outlined inline mr-3 text-base">
              <FontAwesomeIcon className='link-icon' icon={faHome} ></FontAwesomeIcon>
                <label htmlFor="link-home" className="link-text-name">Home</label>
            </span>
					</Link>

					<Link to={"/courses_offered"} className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" id='link-home'>
                <span className="material-symbols-outlined inline mr-3 text-base">
                  <FontAwesomeIcon className='link-icon' icon={faBookOpen} ></FontAwesomeIcon>
                  <label htmlFor="link-home" className="link-text-name">Courses</label>
                </span></Link>

					<Link to={"/about_page"} className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" id='link-home'>
            <span className="material-symbols-outlined inline mr-3 text-base">
              <FontAwesomeIcon className='link-icon' icon={faInfoCircle} ></FontAwesomeIcon>
                <label htmlFor="link-home" className="link-text-name">About</label>
            </span>
					</Link>
					<Link to={"/contact"} className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" id='link-home'>
            <span className="material-symbols-outlined inline mr-3 text-base">
              <FontAwesomeIcon className='link-icon' icon={faUser} ></FontAwesomeIcon>
                <label htmlFor="link-home" className="link-text-name">Contact Us</label>
            </span>
					</Link>
						</div>
	        </div>
	      </div>
	      
	      
	
	      
	<div className="md:hidden z-10">
	  <details className="relative inline-block">
	    <summary  className="flex items-center justify-center w-10 h-10 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 cursor-pointer">
	       <FontAwesomeIcon className='link-icon' icon={faBars} ></FontAwesomeIcon>
	    </summary>
	    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-[90vh] overflow-y-auto">
	      <div className="px-4 py-3 border-b border-gray-200">
	        <div className="flex items-center">
	          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
	            <span className="text-white font-bold text-sm">
								<img src="/src/assets/QuantumClasses.jpg" alt="Quantum Classes" id='qc_logo'/>
							</span>
	          </div>
	          <span className="ml-2 text-sm font-medium text-gray-900">Quantum Classes</span>
	        </div>
	      </div>

	      <div className="py-2">

					<Link to={"/"} className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors duration-200" id='link-home'>
            <span className="material-symbols-outlined inline mr-3 text-base">
              <FontAwesomeIcon className='link-icon' icon={faHome} ></FontAwesomeIcon>
                <label htmlFor="link-home" className="link-text-name">Home</label>
            </span>
					</Link>

					<Link to={"/courses_offered"} className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors duration-200" id='link-home'>
                <span className="material-symbols-outlined inline mr-3 text-base">
                  <FontAwesomeIcon className='link-icon' icon={faBookOpen} ></FontAwesomeIcon>
                  <label htmlFor="link-home" className="link-text-name">Courses</label>
                </span></Link>

					<Link to={"/about_page"} className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors duration-200" id='link-home'>
            <span className="material-symbols-outlined inline mr-3 text-base">
              <FontAwesomeIcon className='link-icon' icon={faInfoCircle} ></FontAwesomeIcon>
                <label htmlFor="link-home" className="link-text-name">About</label>
            </span>
					</Link>
					<Link to={"/contact"} className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors duration-200" id='link-home'>
            <span className="material-symbols-outlined inline mr-3 text-base">
              <FontAwesomeIcon className='link-icon' icon={faUser} ></FontAwesomeIcon>
                <label htmlFor="link-home" className="link-text-name">Contact Us</label>
            </span>
					</Link>

	      </div>

	    </div>
	  </details>
	</div>
	
	    </div>
	  </div>
	  {/* Next: "Add user profile dropdown with avatar and account options" */}
	</div> 
        </div>
  )
}

export default NavBar;

