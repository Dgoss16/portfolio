import React, { Component } from 'react';
import './About.css';
import Dylan from '../../Images/IMG_2079 (2).jpg';

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='aboutContainer'>
                    <div className='aboutMeTextContainer'>
                        <div className='aboutMeTitleContainer'>
                        <p  id='About' className='aboutMeTitle'>About Me</p></div>
                        <div className='aboutMeContainer'>
                        <img className='pictureOfMe' src={Dylan}/>
                        <p>Throughout High School I was always a tech savvy kind of person and enjoyed working 
                        with computers. Originally, I was going to Chippewa Valley Technical College for their
                        IT Networking Specialist program, but, ended up wanting to change my major over to Web 
                        Development. That is when I discovered Coding Boot camps and came across 
                        DevMountain, where I am currently a student in Phoenix, AZ. At DevMountain I was able 
                        to quickly learn HTML, CSS, React, JavaScript, SASS, NodeJS, and AngularJS. I will be graduating 
                        on November 17th and then going back to Chippewa Falls to hopefully find a job in either
                        Front-End, Back-End or Full Stack Development.</p>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}


export default About;