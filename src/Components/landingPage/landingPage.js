import './landingPage.css'
import TokenService from '../../services/token-service'
const { Component } = require("react")
const React = require('react')
const { Link } = require('react-router-dom')


class LandingPage extends Component {

    render() {

        
        return (
            <div className='links'>
                {!TokenService.hasAuthToken()? <>
                <Link className='front-buttons button'
                to='/register'>
                Sign Up</Link>


                <Link className='front-buttons button'
                    to='/login'>
                Log In</Link>
                </> : <>
                <Link className='front-buttons button'
                to='/dashboard'>
                View your projects</Link>
                </>}

            </div>
        )
    }
}

export default LandingPage;