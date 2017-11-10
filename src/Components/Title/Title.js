import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
        return (
            <div className='title'>
                <div className='titleContainer'>
                    <h1 id='Home'>Dylan Goss</h1>
                    <h2>Junior Web Developer</h2>
                </div>
            </div>
        )
    }
}


export default Title;