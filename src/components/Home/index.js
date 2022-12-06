import React from 'react';
import Button from 'react-bootstrap/Button';
import landingPic from "../../assets/work-images/portfolio.png";
import '../../index.css';


// landing page
function Home({ handlePageChange}) {
 

      var sectionStyle = {
        backgroundImage: `url(${landingPic})`
     }
    return (
        <section  >
            <div className='col-12 vh-100 img-fluid position-relative'>
                
                <a href="#about" onClick={() => handlePageChange('About')}>
                <Button className='col-12 vh-100 img-fluid border-0 rounded-0' style={sectionStyle} variant="secondary"><span className='btn post move-bg col-md-3 fs-5'>Explore</span></Button>{' '}
                </a>
                {/* <img src={landingPic} alt='landing page'/> */}
                
                
          
            </div>
        </section>
    );
};

export default Home;