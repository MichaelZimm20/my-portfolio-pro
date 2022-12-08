import React from 'react';
import { Navbar, Nav, Container, ListGroup  } from 'react-bootstrap';
import landingPic from "../../assets/work-images/portfolio.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigate( { currentPage, handlePageChange }) {
    var sectionStyle = {
        backgroundImage: `url(${landingPic})`
     }


    return (
        // navigation bar
        <Navbar expand='lg' style={sectionStyle} >
            <Container>

                <button type='button' className={`navbar-brand fs-4 text-warning bg-transparent border-0 ${currentPage === 'Home' ? 'nav-link active' : 'nav-link'}`}   onClick={() => handlePageChange('Home')}>MichaelZimm20</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Navbar.Collapse id="basic-navbar-nav">
                            {/* // conditional rendering page nav links  */}
                    <Nav className="me-auto">
                        <li className="nav-item">
                            <button className={`nav-link active fs-5 text-light border-0 bg-transparent ${currentPage === 'About' ? 'nav-link active' : 'nav-link'}`} aria-current="page"  onClick={() => handlePageChange('About')}>About</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link fs-5 text-light border-0 bg-transparent ${currentPage === 'Work' ? 'nav-link active' : 'nav-link'}` }  onClick={() => handlePageChange('Work')}>Work</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link fs-5 text-light border-0 bg-transparent ${currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}`}  onClick={() => handlePageChange('Contact')}>Contact Me</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 text-light" href="https://docs.google.com/document/d/1OoAlbN4zas612b85jpLYJFdgJ_DejLy3/edit?usp=share_link&ouid=105757977989352707580&rtpof=true&sd=true" target={'_blank'} rel="noreferrer">Resume</a>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {/* <div className='bg-image' style={{ height: '150px', width: '100%' }}></div> */}
            
        </Navbar>
      
    )
}

export default Navigate;