import React from "react";
import './nav.css';
import SearchBar from "./searchBar";

import logo from './logo.png'
const NavBar = () => {
    return (
        <div className="cont" style={{
            background: 'rgb(36,0,35)',
            background: 'linear-gradient(90deg, rgba(36,0,35,1) 0%, rgba(55,6,68,1) 49%, rgba(120,7,124,1) 100%)'
        }}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/Home">
                    <img src={logo} alt="LOGO" height="50"></img>
                </a>
                <form className="d-flex">
                    {/* <SearchBar /> */}
                </form>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/login">LOG IN</a>
                        </li>
                        <li className="nav-item">
                            <a id='signup' className="nav-link" href="signup">SIGN UP</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
};

export default NavBar;
