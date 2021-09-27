import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
import { useParams } from "react-router-dom";
import ChatRooms from './ChatRooms';
import './inbox.scss';

function Inbox() {

    const [chatRoom, setChatRoom] = useState([])

    const showMessage = async () => {
        try {
            const response = await axios.get('/message/showmessages');
            setChatRoom(response.data.messages)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        showMessage()
    }, [])


    return (
            <div className="conversaition">
                {chatRoom.map(item => <ChatRooms item={item} />)}
                
            </div>

    )
}

export default Inbox
