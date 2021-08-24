import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {

        await axios.post('http://localhost/3001/user/login', {
            username: username,
            password: password
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }


    return (
        <div className="login">
            <h1>User Login</h1>

            <div className="form">

                <form>

                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
                    </div>

                    <div className="login">
                        <input onClick={() => login()} type="submit" value="Login" />
                        <input type="checkbox" name="" id="loggedIn" />
                        <label htmlFor="loggedIn">Keep me logged in</label>
                    </div>

                    <div className="forgot_password">
                        <Link to="/">Forgot Password?</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login
