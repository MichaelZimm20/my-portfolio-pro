// imports 
import React from 'react';
import profilePic from "../../assets/cover/profilePic2.jpg";



function About() {
    return (
        <section className='my-5 mx-5 card  border-0' style={{ width: '90%' }}>

            <div className='row g-0'>

                <div className='col-md-4'>
                    <img src={profilePic} className='my-5 mx-2 rounded-start img-fluid img-thumbnail' alt='profilePic' />
                </div>
                <div className='col-md-8 mt-5'>
                    <div className='card-body ms-3 mt-5'>
                        <h2 className='card-title mt-3' id='about'>About Me</h2>
                        <p className='card-text mt-4'>
                            My name is Michael Zimmerman. an aspiring web developer. I am currently a part-time student at
                            the
                            University of North Carolina Coding BootCamp of the year 2022. I have been involved in the
                            information technology and computer science field for over 7 years and aiming to expand my
                            skills
                            and knowledge. I hope to excel and graduate from this program in the next six months. My long
                            term
                            goal is to gain the necessary skills from this program and apply it in my career and find a well
                            paying job.
                            My hobbies consist of sports, like track and field and basketball, as well as music. Which have
                            been
                            hobbies of mind since I was young. My favorite foods consist of chicken, spaghetti, Chinese, and
                            ice
                            cream for dessert.
                        </p>

                    </div>

                </div>
                
            </div>
        </section>
    )
}

export default About;