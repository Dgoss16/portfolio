import React, { Component } from 'react';
import './Portfolio.css';
import GithubLogoBlack from '../../Images/githubLogoBlack.png';


class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <div className='portfolioContainer'>
                    <div className='portfolioTitleContainer'>
                        <p id='Portfolio'>Projects</p>
                    </div>

                    <div className='projectsContainer'>
                        <div className='project'>
                            <div><p className='tempText'>Coming Soon!</p></div>
                            <img className='repoLogo' src={GithubLogoBlack} />
                        </div>
                        <div className='project'>
                            <div><p className='tempText'>Coming Soon!</p></div>
                            <img className='repoLogo' src={GithubLogoBlack} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Portfolio;