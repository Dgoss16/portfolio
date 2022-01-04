import React, { Component } from 'react';
import './About.css';
import Dylan from '../../Images/updatedDylan2021.png';

class About extends Component {
    render() {
        return (
            <div className='aboutComponent'>
                <div className='aboutMeTitleContainer'>
                    <p id='About' className='aboutMeTitle'>About Me</p>
                </div>
                <div className='aboutMeTextPicContainer'>
                <div className='aboutMePicContainer'>
                    <img className='aboutMePic' src={Dylan} alt='Bio pic of Dylan'/>
                </div>
                <div className='aboutMeTextContainer'>
                    <p className='aboutMeText'>Through out High School, I grew very fond of technology and enjoyed working with 
                    computers. That eventually developed into the love and passion that I now have for coding. I then went to
                    school at a coding bootcamp for Web Development in Pheonix, AZ. Afterwards I worked for a bit in various jobs
                    in production, warehousing, and even as a corrections officer at one point. I am currently working as a software
                    developer in Green Bay, WI, for a consulting company. In my free time I also take on some freelancing work in web
                    development and creating React apps. Outside of dev, I enjoy hunting, fishing, football (Go Pack Go!), spending time
                    with my wife, and playing video games.</p>
                </div>
                </div>

            </div>
        )
    }
}


export default About;