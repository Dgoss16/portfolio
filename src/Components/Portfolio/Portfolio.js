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
                        <div className='twoProjectsContainer'>
                            <div className='project'>
                                <a href='http://hideoutdayz.byethost31.com/#/' target='_blank rel=noopener'><div className='project3Image'></div></a>
                                    <div className='repoLogoContainer'>
                                        <a href='https://github.com/The-Hideout/Website/tree/hideoutRework' target='_blank rel=noopener'>
                                            <img className='repoLogo' src={GithubLogoBlack} />
                                        </a>
                                </div>
                            </div>
                            <div className='project'>
                                <a href='http://visitwisconsin.byethost9.com/#/' target='_blank rel=noopener'><div className='project2Image'></div></a>
                                <div className='repoLogoContainer'>
                                    <a href='https://github.com/Dgoss16/VisitWisconsin' target='_blank rel=noopener'>
                                        <img className='repoLogo' src={GithubLogoBlack} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Portfolio;