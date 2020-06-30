const { Component } = require("react")
const React = require('react')
const { Link } = require('react-router-dom')
class LandingPage extends Component {

    render() {
        return (
            <>
                <Link className='front-buttons button'
                to='/signup'>
                Sign Up</Link>


                <Link className='front-buttons button'
                    to='/login'>
                Log In</Link>


            </>
        )
    }
}

export default LandingPage;