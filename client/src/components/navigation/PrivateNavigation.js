import { Link } from "react-router-dom";
import './privateNavigation.scss';
import { useState, useEffect } from "react";

export default function PrivateNavigation({ user, id }) {


    return (
        <>
            <span>hello {user} </span>
            <div className="dropdown">
                <button className="dropbtn">My Profile</button>
                <div className="dropdown-content">
                    <Link to="/myarticle">My Items</Link>
                    <Link to="/add">Add item</Link>
                    <Link to={`/userprofile/${id}`}>Setting</Link>
                    <Link to="/inbox">Inbox</Link>
                </div>
            </div>
            <Link to={"/logout"}>Logout</Link>
        </>
    );
}