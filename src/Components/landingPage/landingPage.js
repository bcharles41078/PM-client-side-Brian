import './landingPage.css'
import TokenService from '../../services/token-service'
const { Component } = require("react")
const React = require('react')
const { Link } = require('react-router-dom')


class LandingPage extends Component {

    render() {

        
        return (
            <>
            <div className='landingpage'>
                <h1>Project Management</h1>
                <p>The Project Management App is there for you to keep track of projects. 
                 A place you can log all you projects in one place assign due dates you can
                 edit your projects as you see fit and only you can see your projects. If it 
                 your first time on the App please create a secure account, otherwise login to 
                 see your projects. For DEMO use login as demo with password demo</p>
            </div>
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
            </>
        )
    }
}

export default LandingPage;