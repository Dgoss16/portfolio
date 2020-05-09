import React, { Component } from 'react';
import './Skills.css';
import SkillsPic from '../../Images/skills-min.png';


class Skills extends Component {
    render() {
        return (
            <div className='Skills'>
                <div>
                    <div className='skillsTitleContainer'>
                        <p id='Skills'>Skills</p>
                    </div>
                    <img src={SkillsPic}/>
                </div>
            </div>
        )
    }
}


export default Skills;