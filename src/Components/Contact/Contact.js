import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='contactContainer'>
                    <div>
                        <div className='contactTitle'>
                            <p id='Contact'>Contact Me</p>
                        </div>
                        <p className='contactText'>Like what you see? Have any questions? Send me and email!</p>
                    </div>

                    <div className='emailForm'>
                        <form action="mailto:Dylangoss21@yahoo.com" method="post" enctype="text/plain">
	                        Name:<br/>
	                        <input type="text" name="name" required/><br/><br/>
	                        E-mail:<br/>
	                        <input type="text" name="mail" required/><br/><br/>
	                        Comment:<br/>
                            <textarea className='comment' required/><br/>
	                        <input className='button' type="submit" value="Send"/>
	                        <input className='button'type="reset" value="Reset"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Contact;