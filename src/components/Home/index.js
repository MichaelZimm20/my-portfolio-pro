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
        <div style={{
            backgroundImage: `url(${landingPic})`,
            width: '2560px'
        }}>
            <div className='col-12 vh-100 img-fluid position-relative' >
                
                <a href="#about" onClick={() => handlePageChange('About')}>
                <Button className='vh-100 vw-100 border-0 rounded-0 lg-img' style={sectionStyle} variant="secondary"><span className='btn post move-bg col-md-3 fs-5'>Explore</span></Button>{' '}
                </a>
                {/* <img src={landingPic} alt='landing page'/> */}
                
                
          
            </div>
        </div>
    );
};

export default Home;