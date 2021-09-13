import React, { useEffect, useState } from 'react';
import axios from '../../util/axiosInstance';
import { useParams } from 'react-router-dom';

function UserProfile() {

    const { id } = useParams();

    const [user, setUser] = useState([]);
    const [image, setImage] = useState("")
    const getuser = async () =>{

        const response = await axios.get(`/user/userprofile/${id}`);
        setUser(response.data.user)
        setImage(response.data.user.userimage)
    }

    useEffect(() => {
        getuser()
    }, [])


    return (
        <div>
            user profile page

            <img src={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_IMG}/${image}`} alt="" />
            {console.log(user,image)}
        </div>
    )
}

export default UserProfile
