import React from 'react';
import { Link, NavLink } from "react-router-dom"
import logo from "../src/image/iconlogo.jpg"
import "../src/css/nav.css"
const Nav = () => {
    
    
    //  var hambar = (e) => {
    //     var nav = document.getElementsByClassName("right");
    //     nav.e.target.classList.add("togglr");
    //     console.log("event is running...");
    // }
    return (
        <>
            <nav className='nav'>
                <div className='logo'>
                    {/* <Link to="/">Port<span className='text-primary'>folio</span></Link> */}
                    <Link to="/"><img src={logo} alt="" /></Link>   
                </div>
                <div className='page'>
                    <ul>
                        <li>
                            <NavLink to="/" activeclassname="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service" activeclassname="active">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"  activeclassname="active">  About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeclassname="active">Contact</NavLink>

                        </li>
                    </ul>
                </div>
            </nav>
            {/* <header>
                <div class="left">
                    <a href="">NAVBAR</a>
                </div>
                <div class="hammbar" onMouseOver={hambar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="right ">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="cantact">Contact</a></li>
                        <li><a href="service">Services</a></li>

                    </ul>
                </div>


            </header> */}
        </>
    );
}

export default Nav;
