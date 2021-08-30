import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "../../util/axiosInstance";

function Register() {

    const [ firstname, setfirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    // const [ confirmpassword, setConfirmpassword ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ streetname, setStreetname ] = useState("");
    const [ hausnumber, setHausnumber ] = useState("");
    const [ zipcode, setZipcode ] = useState("");
    const [ city, setCity ] = useState("");
    const [ age, setAge ] = useState("");
    const [ land, setLand ] = useState("");


    const handelRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/user/register',{
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
                age: age,
                email: email,
                phone: phoneNumber,

               address: {
                streetname: streetname,
                hausnumber: hausnumber,
                zipcode: zipcode,
                city: city,
                land: land
               }
            })

        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div className="register">
            <h1>User Register</h1>

            <Link to="/login"/>

            <form onSubmit={handelRegister}>

            <div className="fullname">
            <label htmlFor="firstname">Name</label>
            <input onChange={(e) => setfirstname(e.target.value)} type="text" id="firstname" name="firstname" required/>
            <label htmlFor="lastname">Last Name</label>
            <input onChange={(e) => setLastname(e.target.value)} type="text" id="lastname" name="lastname" required/>
            </div>

            <div className="age">
            <label htmlFor="age">your Age</label>
            <input onChange={(e) => setAge(e.target.value)}type="number" id="age" name="age" required/>
            </div>

            <div className="email">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required/>
            </div>

            <div className="username">
            <label htmlFor="username">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required/>
            </div>

            <div className="password">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required/>
            </div>

            <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" id="phone" name="phone" required/>
            </div>


            <div className="address">
            <label htmlFor="address">Address</label>
            <input onChange={(e) => setStreetname(e.target.value)} type="text" placeholder="street" name="street" required/>
            <input onChange={(e) => setHausnumber(e.target.value)} type="text" placeholder="hausnumber" name="hausnumber" required/>
            <input onChange={(e) => setZipcode(e.target.value)} type="text" placeholder="zip code" name="zip" required/>
            <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="city" name="city" required/>
            <input onChange={(e) => setLand(e.target.value)} type="text" placeholder="land" name="land" required/>
            </div>


            <div className="agree">
            <input type="checkbox" id="check" required/>
            <label htmlFor="check">I Agree to terms and condition</label>
            </div>

            <div className="button">
            <button type="submit">Create</button>
            </div>

            </form>
        </div>
    )
}

export default Register
