const { Component } = require("react")
const React = require('react')
const { Link } = require('react-router-dom')
class LandingPage extends Component {

    render() {
        return (
            <>
                <button className='front-buttons button'
                    onClick={e => console.log('Sign Up')}
                >Sign Up</button>


                <Link className='front-buttons button'
                    to='/login'
                >Log In</Link>


            </>
        )
    }
}

export default LandingPage;