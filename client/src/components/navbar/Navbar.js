

import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss';


function Navbar() {
    return (
        <nav>

            {/*logo container*/}
            <div className="logo">
                LOGO
            </div>
            {/** it contains the right side after logo links, login , register and search bar */}
            <div className="nav_right">
                <div className="nav_links_container">
                    <div className="nav_links">
                        <ul>
                            <Link to="/">Categories</Link>
                            <Link to="/">Favorites</Link>
                            <Link to="/">Premium Finds</Link>
                            <Link to="/">About Us</Link>
                        </ul>
                    </div>
                    <div className="nav_login">
                        <ul>
                            <Link to="/login">Login</Link>
                            <Link to="/">Register</Link>
                        </ul>
                    </div>
                </div>

                {/**search bar side contains search bar and social media links */}
                <div className="nav_search_container">
                    <div className="search_input">
                        <input type="search" name="" id="" placeholder="Search for anything" />
                    </div>

                    <div className="media chat">
                        <ul>
                            <Link to="/">Social Media</Link>
                            <Link to="/">Live Chat</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
