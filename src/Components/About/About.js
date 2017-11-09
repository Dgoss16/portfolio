import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='aboutContainer'>
                    <div className='aboutMeText'>
                        <div className='aboutMeTitleContainer'>
                        <p  id='About' className='aboutMeTitle'>About Me</p></div>
                        <p>Through out High School I was always a tech save kind of person and enjoyed working 
                        with computers. Originally, I was going to Chippewa Valley Technical College for their
                        IT Networking Specialist program, but, ended up wanting to change my major over to Web 
                        Development. That is then when I discovered about Coding Boot camps and came across 
                        Dev Mountain, where I am currently a student in Phoenix, AZ. At Dev Mountain I was able 
                        to quickly learn HTML, CSS, React, JavaScript, SASS, and AngularJS. I will be graduating 
                        on November 17th and then going back to Chippewa Falls to hopefully find a job in either
                        Front-End, Back-End or Full Stack Development.</p>
                </div>
                </div>
            </div>
        )
    }
}


export default About;