import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss';
import logo from '../../Images/final_logo.svg';
import { PublicNavigation, PrivateNavigation} from '../../components/navigation/index';
import { ContextAPI } from "../../store/context";

function Navbar() {

    const { loggedIn, user } = useContext(ContextAPI);

    return (
        <nav>

            {/*logo container*/}
            <div className="logo">
            <img src={logo} alt=""/>
            </div>
            {/** it contains the right side after logo links, login , register and search bar */}
            <div className="nav_right">
                <div className="nav_links_container">
                    <div className="nav_links">
                        <ul>
                            <Link to="/category">Categories</Link>
                            <Link to="/">Favorites</Link>
                            <Link to="/">Premium Finds</Link>
                            <Link to="/">About Us</Link>
                        </ul>
                    </div>
                    <div className="nav_login">
                        <ul>
                        {loggedIn ? <PrivateNavigation user={user}/> : <PublicNavigation />}
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


