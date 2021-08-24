import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "../../util/axiosInstance";

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/user/login', {
                username: username,
                password: password
            })

            console.log(response.data.token, response.data);


        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div className="login">
            <h1>User Login</h1>

            <div className="form">

                <form onSubmit={handleSubmitForm}>

                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
                    </div>

                    <div className="login">
                        <button type="submit">Login</button>
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
