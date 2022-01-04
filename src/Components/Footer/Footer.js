import React, { Component } from 'react';
import './Footer.css';
import Github from '../../Images/githubLogo.png';
import Linkedin from '../../Images/linkedinLogo.png';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='footer'>
                    <div className='socialMediaContainer'>
                        <div>
                        <a href='https://github.com/Dgoss16'><img className='githubLogo' src={Github} alt='github logo'/></a>
                        <a href='https://www.linkedin.com/in/dylan-goss-7b2753146'><img className='linkedinLogo' src={Linkedin} alt='linkedin logo'/></a>
                        </div>
                    </div>

                    <div className='copyright'>
                        <div>
                        &copy; 2020 by Dylan Goss
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;