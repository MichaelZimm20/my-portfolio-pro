import React from 'react';
import datenight from '../../assets/work-images/datenight.jpg';
import world from '../../assets/work-images/atw.png';
import MERN from '../../assets/work-images/mern.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Work() {
    return (
        <main className='justify-content-center'>

<Carousel className='mh-100'>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-75"
          src={datenight}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Date Night Generator</h3>
          <p>Created With: jQuery/JavaScript/CSS/Tailwind.js</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid opacity-75"
          src={world}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid opacity-75"
          src={MERN}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </main>
    );
};

export default Work;




























{/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={datenight} className="d-block w-100" alt="datenight app" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Date Night Generator</h5>
        <p>jQuery/JavaScript/CSS/Tailwind.js</p>
      </div>
    </div>
    <div className="carousel-item " data-bs-interval="2000">
      <img src={world} className="d-block w-100" alt="around the world app" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={MERN} className="d-block w-100" alt="mern stack app" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}