import { Link } from "react-router-dom";
import './privateNavigation.scss';

export default function PrivateNavigation({ user }) {

    return (
        <>

            <span>hello {user} </span>
            <div className="dropdown">
                <button className="dropbtn">My Profile</button>
                <div className="dropdown-content">
                    <Link to="/add">Add item</Link>
                    <Link to="/setting">Setting</Link>
                    <Link to="/inbox">Inbox</Link>
                </div>
            </div>
            <Link to={"/logout"}>Logout</Link>
        </>
    );
}