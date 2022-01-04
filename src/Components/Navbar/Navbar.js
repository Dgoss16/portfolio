import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <nav>
                    <a href='#Home'>HOME</a>
                    <a href='#Home'>|</a>
                    <a href='#About'>ABOUT</a>
                    <a href='#About'>|</a>
                    <a href='#Skills'>SKILLS</a>
                    <a href='#Skills'>|</a>
                    <a href='#Portfolio'>PORTFOLIO</a>
                    <a href='#Portfolio'>|</a>
                    <a href='#Contact'>CONTACT</a>                    
                </nav>
            </div>
        )
    }
}


export default Navbar;