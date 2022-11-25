// imports 
import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-image " >
            <div className="container-fluid d-flex align-content-start">
                <a className="navbar-brand fs-2 text-warning"  href="/">MichaelZimm20</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active fs-5 text-light" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 text-light " href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 text-light" href="#contact">Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 text-light" href="https://docs.google.com/document/d/1OoAlbN4zas612b85jpLYJFdgJ_DejLy3/edit?usp=share_link&ouid=105757977989352707580&rtpof=true&sd=true">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className='bg-image' style={{ height: '150px', width: '100%' }}></div> */}
        </nav>
      
    )
}

export default Nav