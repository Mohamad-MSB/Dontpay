import React, { useEffect, useState } from 'react';
import axios from '../../util/axiosInstance';
import { useParams,Link } from 'react-router-dom';
import './userprofile.scss'

function UserProfile() {

    const { id } = useParams();

    const [user, setUser] = useState([]);
    const [image, setImage] = useState("")
    const [address, setAddress] = useState([])


    const getuser = async () => {

        const response = await axios.get(`/user/userprofile/${id}`);
        setUser(response.data.user)
        setImage(response.data.user.userimage)
        setAddress(response.data.user.address)
    }



    useEffect(() => {
        getuser()
    }, [])


    return (

        <div className="user_profile">
            <h1>My Profile setting</h1>
            <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMG}/${image}`} alt="" />

            <h3>username: {user.username}</h3>
            <h3>firstname:  {user.firstname}</h3>
            <h3>lastname: {user.lastname}</h3>
            <h3>email: {user.email}</h3>
            <h3>city: {address.city}</h3>
            <h3>hausnumber: {address.hausnumber}</h3>
            <h3>land: {address.land}</h3>
            <h3>streetname: {address.streetname}</h3>

            
            <Link to={`/userprofile/${id}/edituser`}>Edit</Link>



        <div>
            user profile page

            <img src={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_IMG}/${image}`} alt="" />
            {console.log(user,image)}

        </div>
    )
}

export default UserProfile
