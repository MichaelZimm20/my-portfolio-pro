import React from 'react';


import landingPic from "../../assets/work-images/portfolio.png";


function Home( { handlePageChange }) {
    return (
        <section>
            <div className=''>
                <a href="#about" onClick={() => handlePageChange('About')}>
                    <img src={landingPic} className='img-fluid'  alt='landingPic' />
                </a>
                
                
                
            </div>
        </section>
    );
};

export default Home;