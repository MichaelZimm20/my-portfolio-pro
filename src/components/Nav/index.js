// imports 
import React from 'react';
// import Profile from '../Profile'
import landingPic from "../../assets/work-images/portfolio.png";
import 'bootstrap/dist/css/bootstrap.min.css';



function Nav( { currentPage, handlePageChange }) {
    var sectionStyle = {
        backgroundImage: `url(${landingPic})`
     }
    return (
        // navigation bar
        <nav className="navbar navbar-expand-lg bg-light" style={sectionStyle} >
            <div className="container-fluid d-flex align-content-start">
                <a className={`navbar-brand fs-4 text-warning ${currentPage === 'Home' ? 'nav-link active' : 'nav-link'}`}  href="/" onClick={() => handlePageChange('Home')}>MichaelZimm20</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                            {/* // conditional rendering page nav links  */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link active fs-5 text-light ${currentPage === 'About' ? 'nav-link active' : 'nav-link'}`} aria-current="page" href="#about" onClick={() => handlePageChange('About')}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link fs-5 text-light ${currentPage === 'Work' ? 'nav-link active' : 'nav-link'}` } href="#work" onClick={() => handlePageChange('Work')}>Work</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link fs-5 text-light ${currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}`} href="#contact" onClick={() => handlePageChange('Contact')}>Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 text-light" href="https://docs.google.com/document/d/1OoAlbN4zas612b85jpLYJFdgJ_DejLy3/edit?usp=share_link&ouid=105757977989352707580&rtpof=true&sd=true" target={'_blank'} rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className='bg-image' style={{ height: '150px', width: '100%' }}></div> */}
            
        </nav>
      
    )
}

export default Nav