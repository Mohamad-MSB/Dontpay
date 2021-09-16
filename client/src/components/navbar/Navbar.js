import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss';
import logo from '../../Images/final_logo.svg';
import { PublicNavigation, PrivateNavigation } from '../../components/navigation/index';
import { ContextAPI } from "../../store/context";

function Navbar() {

    const { loggedIn, user, userId, search, setSearch } = useContext(ContextAPI);


    return (
        <nav>

            {/*logo container*/}
            <div className="logo">
                <Link to="/" ><img src={logo} alt="" /></Link>
            </div>
            {/** it contains the right side after logo links, login , register and search bar */}
            <div className="nav_right">
                <div className="nav_links_container">
                    <div className="nav_links">
                        <ul>
                        <Link to="/category">Categories</Link>
                        {loggedIn ? <Link to="/favorites">Favorites</Link> : <Link to="/login">Favorites</Link>}
                        <Link to="/">Premium Finds</Link>
                        <Link to="/">About Us</Link>
                        </ul>
                    </div>
                    <div className="nav_login">
                        <ul>
                            {loggedIn ? <PrivateNavigation user={user} userId={userId} /> : <PublicNavigation />}
                        </ul>
                    </div>
                </div>

                {/**search bar side contains search bar and social media links */}
                <div className="nav_search_container">
                    <div className="search_input">
                        <input onChange={(e) => setSearch(e.target.value)} type="search" name="" value={search} id="" placeholder="Search for anything" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


