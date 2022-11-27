// import react, bootstrap, react-bootstrap
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

// import pictures 
import datenight from '../../assets/work-images/Picture3.png';
import world from '../../assets/work-images/atw.png';
import MERN from '../../assets/work-images/mern.jpg';
import runbuddy from '../../assets/work-images/runbuddy.png';

// import Work functions 
import DN from './datenight';
import ATW from './atw'
import TechBlog from './tech-blog';
import RunBuddy from './runbuddy';


function Work() {
    return (
        <main>

<Carousel>
      <Carousel.Item>
            <img
          className="d-block opacity-75 w-100 img-fluid"
          src={datenight}
   
          alt="First slide"
        />
   
        <Carousel.Caption>
              <h3>Date Night Generator</h3>
            <p>Created With: jQuery/JavaScript/CSS/Tailwind.js</p>
        </Carousel.Caption>
        <Carousel.Caption className='d-flex justify-content-end w-30 m-0 p-0 '>
            <DN />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid opacity-75"
          src={world}
          alt="Second slide"
        />

        <Carousel.Caption>
                    <h3>Around The World</h3>
                <p>Created With: Node/Express.js/HandleBars.js</p>
          
        </Carousel.Caption>
        <Carousel.Caption className='d-flex justify-content-end w-30 m-0 p-0 '>
            <ATW />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid opacity-75"
          src={MERN}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>My Tech Blog</h3>
          <p>
            Created With: Sequelize/Express/Heroku/MySQL2/bcrypt/express-handlebars
          </p>
        </Carousel.Caption>
        <Carousel.Caption className='d-flex justify-content-end w-30 m-0 p-0 '>
            <TechBlog />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid opacity-75"
          src={runbuddy}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Run Buddy</h3>
          <p>
            Created With: HTML/CSS
          </p>
        </Carousel.Caption>
        <Carousel.Caption className='d-flex justify-content-end w-30 m-0 p-0 '>
            <RunBuddy />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </main>
    );
};

export default Work;

