import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
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
            hello from inbox
                {chatRoom !== null ? chatRoom.map(item => item.article_id !== null ? <ChatRooms item={item} /> : <h1>there are no messages</h1> ) : <h1>there is no chat room</h1>}
            </div>

    )
}

export default Inbox
