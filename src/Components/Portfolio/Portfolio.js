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
                            <a href='http://waypointhomes.surge.sh/#/'><div className='project1Image'></div></a>
                            <div className='repoLogoContainer'>
                                <a href='https://github.com/simoneholder1/WaypointHomes/tree/master/waypoint/Waypoint-Homes'>
                                    <img className='repoLogo' src={GithubLogoBlack} />
                                </a>
                            </div>
                        </div>
                        <div className='project'>
                            <a href='http://discoverwi.us'><div className='project2Image'><img src='http://prntscr.com/hb2hyl'/></div></a>
                            <div className='repoLogoContainer'>
                                <a href='https://github.com/Dgoss16/VisitWisconsin'>
                                    <img className='repoLogo' src={GithubLogoBlack} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Portfolio;