import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../Images/final_logo.png";
import {
  PublicNavigation,
  PrivateNavigation,
} from "../../components/navigation/index";
import { ContextAPI } from "../../store/context";
import Fade from "react-reveal/Fade";


import SearchIcon from "@material-ui/icons/Search";


const style = {  color: '#0779fa' , fontSize:'25px', marginTop:'3px'}

function Navbar() {
  const { loggedIn, user, userId, search, setSearch } = useContext(ContextAPI);

  return (
    <nav className="navbar">
      {/*logo container*/}
      <div className="logo">
        <Link to="/">
          {" "}
          <Fade left>
            <h2>
              Don't <span>Pay</span>
            </h2>
          </Fade>
        </Link>
      </div>

      <div className="nav_links_container">
        <div className="nav_links">
          <ul>
            <Link href="#category" className="nav_links_main" to="/category">
              Categories
            </Link>
            {loggedIn ? (
              <Link to="/favorites">Favorites</Link>
            ) : (
              <Link to="/login">Favorites</Link>
            )}
            <Link to="/premium">Premium Finds</Link>
            <Link to="/aboutus">About Us</Link>
          </ul>
        </div>

        <div className="nav_search_container">
          
          <div className="search_input">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              name=""
              value={search}
              id=""
              placeholder="Search for anything"
            />
            
          </div>
         <div className="search_icon">
         <SearchIcon style={style} />
         </div>
        </div>
      </div>

      <div className="nav_login">
        <div className="my_account">
          <ul>
            {loggedIn ? (
              <PrivateNavigation user={user} userId={userId} />
            ) : (
              <PublicNavigation />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
