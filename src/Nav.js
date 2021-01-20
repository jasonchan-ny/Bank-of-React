import React from 'react'
import './App.css'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return(
            <nav>
                {/* <h3>Logo</h3> */}
                {/* <img src = {'https://wallpapercave.com/wp/wp3862487.jpg'} width = '100' height = '100' alt = "logo"/> */}
                <ul className = "navLink">
                    <Link style = {navStyle} to = "/home">
                        <li>Home</li>
                    </Link>
                    <Link style = {navStyle} to = "/login">
                        <li>Login</li>
                    </Link>
                    <Link style = {navStyle} to = "/about">
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        );
    }

export default Nav;
