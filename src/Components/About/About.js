import React, { Component } from 'react';
import './About.css';
import Dylan from '../../Images/IMG_2079 (2)-min.jpg';

class About extends Component {
    render() {
        return (
            <div className='aboutComponent'>
                <div className='aboutMeTitleContainer'>
                    <p id='About' className='aboutMeTitle'>About Me</p>
                </div>
                <div className='aboutMeTextPicContainer'>
                <div className='aboutMePicContainer'>
                    <img className='aboutMePic' src={Dylan}/>
                </div>
                <div className='aboutMeTextContainer'>
                    <p className='aboutMeText'>Throughout High School, I grew very fond of technology and enjoyed working with 
                    computers. That eventually developed into the love and passion that I now have for coding. Currently, I have 
                    two projects built using ReactJs, JavaScript, NodeJs and PostgresSql. Now I am focusing on developing my skills 
                    with Java and on the side am developing a web application using React.</p>
                </div>
                </div>

            </div>
        )
    }
}


export default About;