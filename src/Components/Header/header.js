import React, { Component } from 'react'

class Header extends Component {
    
    render() {

        return (
            <>
                <h1>Project Managment App</h1>
                <button className='front-buttons'>Sign Up</button>
                <button className='front-buttons'>Log In</button>
            </>
        );
    }

}

export default Header