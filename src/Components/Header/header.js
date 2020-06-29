import React, { Component } from 'react'

class Header extends Component {
    
    render() {

        return (
            <>
                <h1>Project Managment App</h1>
                <button className='static-button button'
                onClick={e=>console.log('Log Off')}
                >Log Off</button>
            </>
        );
    }

}

export default Header