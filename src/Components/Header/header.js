import React, { useState, useContext } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";

const NewHeader = (props) => {

    const [show, setShow] = useState(false);


    const context = useContext(UserContext); 

    

    function handleLogoutClick() {
        context.processLogout();
        props.toggleLoggedIn();
    }

    if (!show) {
        return (
            <div className="arrow-wrapper"><TiArrowSortedDown onClick={() => setShow(true)()} onMouseOver={() => setShow(true)} className="arrow" /></div>
        )
    }

    else {
        return (
            <div onMouseLeave={() => setShow(false)} className="navbar-wrapper">
                <nav className="header-links">
                    {/* <Link className="header-link" to='/dashboard'>{context.user.name}</Link> */}
                    {TokenService.hasAuthToken() ? <>
                        <div>{context.user.name}</div>
                        <Link className="header-link" to="/dashboard"><h1>Project Manager</h1></Link>
                        <Link to="/" className="header-link" onClick={handleLogoutClick}>Logout</Link>
                    </> : <>
                        <Link className="header-link" to='/register'>Sign Up</Link>
                        <Link className="header-link" to="/"><h1>Project Management</h1></Link>
                        <Link to="login" className="header-link" >Login</Link>
                        </>} 
                </nav>
                {/* <div className="transparent-div"></div> */}
            </div>
        )
    }


}

export default NewHeader;

