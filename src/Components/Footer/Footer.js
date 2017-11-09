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
                        <img className='githubLogo' src={Github}/>
                        <img className='linkedinLogo' src={Linkedin}/>
                        </div>
                    </div>

                    <div className='copyright'>
                        <div>
                        &copy; 2017 by Dylan Goss
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;