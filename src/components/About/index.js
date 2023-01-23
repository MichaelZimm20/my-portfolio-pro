// imports 
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'

import profilePic from "../../assets/cover/profilePic2.jpg";
import '../../index.css';



function About() {
    return (
        <section className=' '>

            <div className='row g-0  w-100 pattern '>

                <div className='col-md-3'>
                    <h1 className='w-50 p-2 border-bottom border-secondary d-flex justify-content-center fun-title1' id='about'>About Me</h1>
                    <img src={profilePic} className='my-5 mx-2 rounded-start img-fluid img-thumbnail' alt='profilePic' />
                </div>
                <div className='col-md-8 mt-3 mx-auto d-flex justify-content-center'>
                    <div className='card-body ms-3'>
                        <p className='card-text mt-4 font fs-5  .bg-light bg-gradient'>
                            <span className='name-style  font1'> I am Michael Zimmerman</span><br />
                            A Charlotte, NC based and aspiring Full Stack Web Developer who also possesses 6+ years of professional experience in Computer Science/ Information Technology.<br /><br />
                            I have a Certification in Full Stack Web Development from the University of North Carolina at Charlotte, Bachelors of Science in Computer Science at the University of North Carolina at Pembroke, and experience in Software Engineering at Arizona State University. <br /><br />
                            Experienced in several web development frameworks and skills such as React.js, Express.js, Bootstrap, JavaScript, HTML/CSS, jQuery, MongoDB, MySQL, HandleBars.js, Cloudinary.<br /><br />
                            I want to be able to put my education and talents to the test and showcase them to any company. A student of life and learning, I am always willing to learn, grow, problem solve, and I can adapt to fast-paced environments.
                            I have demonstrated experience in creating over 36+ web applications with REACT, RESTful APIs, jQuery, Graphql, and Redux, JavaScript, HTML/CSS, GitHub, Heroku.<br /><br />
                            Outside of my Full Stack Web Developing experience I have been in the Information Technology Field for over 5+ years with experience in hardware and software management and support. I have provided customer service to over 2000+ individuals through face to face, email, phone, remote communications<br /><br />

                            Overall, I am currently looking Full Stack Web Developer role to jump start my career<br /><br />

                            <h2 className='fun-facts'>Fun Facts:</h2>
                            My long-term goal is to gain the necessary skills from this program and apply it in my career and find a well-paying job. My hobbies consist of sports, like track and field and basketball (Athlete and Coach), as well as music. Which have been hobbies of mind since I was young. My favorite foods consist of chicken, spaghetti, Chinese, and ice cream for dessert.

                        </p>

                    </div>

                </div>

            </div>


            <div className='row g-0  w-100 pattern2'>

                <div className='col-md-3'>
                    <h1 className='w-50 p-2 border-bottom border-color  d-flex justify-content-center fun-title1' id='about'>Education</h1>
                    <FontAwesomeIcon icon={faUniversity} style={{ width: '200px', height: '200px', color: 'white', alignSelf: 'center' }} className='icon' />
                </div>
                <div className='col-md-8 mt-3 mx-auto d-flex justify-content-center'>
                    <div className='card-body ms-3 '>
                        <div className='card col-12 border-0 mb-5 border-bottom border-top bg-transparent'>
                            <h5 className='card-header fs-3 d-flex justify-content-center shadow-lg p-3 mb-1 bg-transparent rounded text-white'>University of North Carolina at Charlotte </h5>
                            <h6 className='card-title d-flex justify-content-center shadow-sm p-2 bg-transparent rounded text-white'>Full Stack Web Development Certification </h6>
                            <div className='card-body shadow-none bg-gradient rounded text-white'>
                                <section className='d-flex flex-row justify-content-around'>

                                    <ul className='list-group list-group-flush rounded w-25' >
                                        <h4>Frameworks</h4>
                                        <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'> REACT</li>
                                        <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts'>Bootstrap</li>
                                        <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>Node.js</li>
                                        <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts' >Express.js</li>
                                        <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>Redux</li>
                                        <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts'>HandleBars.js</li>
                                    </ul>



                                    <div className='d-flex flex-column'>
                                        <h4 className='d-flex flex-column'>Areas of Study</h4>
                                        <div className='d-flex flex-row'>
                                            <ul className='list-group list-group-flush rounded  flex-1'>
                                                <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'> Big-O Notation</li>
                                                <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts'>Font Awesome / OpenIconic / Moment.js</li>
                                                <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>GIT / GitHub / Heroku</li>
                                                <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts' >Graphql / MongoDB</li>
                                                <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>HTML / CSS </li>
                                                <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts'>HandleBars.js</li>
                                            </ul>
                                            <ul className='list-group list-group-flush rounded flex-1'>

                                                <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>JavaScript</li>
                                                <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts'>jQuery</li>
                                                <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>OOP</li>
                                                <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts' >RESTful APIs / fetch</li>
                                                <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>Sequelize </li>
                                                <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts'>State</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className='card-footer d-flex justify-content-center shadow-sm  bg-transparent rounded text-white'><h6>July - December 2022</h6></div>
                        </div>

                        <div className='card col-12 border-0 mb-5 border-bottom border-top bg-transparent'>
                            <h5 className='card-header fs-3 d-flex justify-content-center shadow-lg p-3 mb-1 bg-transparent rounded text-white'>University of North Carolina at Pembroke </h5>
                            <h6 className='card-title d-flex justify-content-center shadow-sm p-2 bg-transparent rounded text-white'>Bachelor's in Computer Science</h6>
                            <div className='card-body shadow-none bg-gradient rounded text-white'>
                                <section className='d-flex flex-row justify-content-around'>
                                    <ul className='list-group list-group-flush rounded w-25' >
                                        <h4>Areas of Study</h4>
                                        <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>Object-Oriented Programming</li>
                                        <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts'>Java</li>
                                        <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>Web Development</li>
                                        <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts' >Python</li>
                                    </ul>
                                </section>
                            </div>
                            <div className='card-footer d-flex justify-content-center shadow-sm  bg-transparent rounded text-white'><h6>Aug 2013 - May 2017</h6></div>
                        </div>

                        <div className='card col-12 border-top mb-5 border-bottom bg-transparent'>
                            <h5 className='card-header fs-3 d-flex justify-content-center shadow-lg p-3 mb-1 bg-transparent rounded text-white'>Arizona State University</h5>
                            <h6 className='card-title d-flex justify-content-center shadow-sm p-2 bg-transparent rounded text-white'>Experience in Software Engineering</h6>
                            <div className='card-body shadow-none bg-gradient rounded text-white'>
                                <section className='d-flex flex-row justify-content-around'>
                                    <ul className='list-group list-group-flush rounded w-25' >
                                        <h4>Areas of Study</h4>
                                        <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>Test-Driven Development</li>
                                        <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts'>Test and Validation / Unit Testing</li>
                                        <li className='list-group-item bg-transparent text-white shadow-sm fun-facts'>System Engineering</li>
                                        <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts' >Project Management</li>
                                        <li className='list-group-item bg-transparent text-white shadow-sm fun-facts' >Project Process Quality Management</li>
                                        <li className='list-group-item bg-light bg-gradient bg-opacity-50 text-warning fun-facts' >Programming</li>
                                    </ul>
                                </section>
                            </div>
                            <div className='card-footer d-flex justify-content-center shadow-sm  bg-transparent rounded text-white'><h6>August 2019 - December 2020</h6></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row g-0  w-100 pattern '>
                <div className='col-md-3'>
                    <h1 className='w-50 p-2 border-bottom border-secondary d-flex justify-content-center fun-title1' id='about'>Skills</h1>
                </div>
                <div className='col-md-8 mt-3 mx-auto d-flex justify-content-center'>
                    <div className='card-body ms-3'>
                        <p className='card-text mt-4 font fs-5  .bg-light bg-gradient'>
                            <h2 className='fun-facts'> Languages:</h2><br />
                            JavaScript, HTML/CSS, SQL, MySQL, NoSQL, Java, OOP<br /><br />
                            <h2 className='fun-facts'> Other Skills:
                            </h2>

                            Technology Help Desk, User-Support, Troubleshooting, Microsoft 365, JEST, Webpacks,<br />
                            Adobe Creative Cloud, Google Console, Software and OS Installation, Hardware<br />
                            PowerShell, DBMS, Internal Ticketing System, Microsoft Office, G-suite, Technical Support Documentation, VSCode
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;