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
                        IT Networking Specialist program, but, ended up finding an interest in Web 
                        Development instead. That is when I discovered Coding Boot Camps and came across 
                        DevMountain. At DevMountain I was able to quickly learn HTML, CSS, React, JavaScript, SASS, and NodeJS. I graduated 
                        on November 17th and am currently searching for a job as a Junior Web Developer.</p>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}


export default About;