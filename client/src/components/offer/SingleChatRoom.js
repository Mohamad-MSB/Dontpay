import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { useParams } from 'react-router-dom';
import {ContextAPI} from '../../store/context';
import './singleChatRoom.scss'


function SingleChatRoom() {

    const { id, reciever } = useParams();
    const [chatRoom, setChatRoom] = useState([])

    const [owner, setOwner] = useState({})
    const [sender, setSender] = useState({})

    const { userId, user } = useContext(ContextAPI);
    
    const [message, setMessage] = useState("")
    const [refresh, setRefresh] = useState(false)

    const [chatRoomID, setChatRoomID] = useState([])


    const getRoom = async () => {

        try {
            const response = await axios.get(`/message/chatroom/${id}/${reciever}`);
            setChatRoom(response.data.chat)
            setChatRoomID(response.data.id)
            if(response.data.chat[0].sender._id === userId){
                setOwner(response.data.chat[0].reciever._id)
                setSender(response.data.chat[0].sender._id)
            } else if (response.data.chat[0].reciever._id === userId){
                setSender(response.data.chat[0].reciever._id)
                setOwner(response.data.chat[0].sender._id)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    
    const handleSendingMessage = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/message/chatroom/replay/${chatRoomID}`, {
                reciever: owner,
                message: message
            })
            setRefresh(!refresh)
        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        getRoom()
    }, [refresh])

    return (
        <div className="single_chatroom">
            chat room single chat room
            <div className="chat_container">
            {chatRoom.map(message => {
                return (
                   
                   <div className={message.sender.username === user ? "me" : "otheruser"}>
                   <p>send on : {new Date(message.created_at).toLocaleString()}</p>
                   <p>{message.sender.username} : {message.message_body}</p>
               
                   </div>
                )
            })}
            </div>
            <form>
                <div className="user">
                    <label htmlFor="message">message</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols="30" rows="10">send message</textarea>
                </div>
                <button type="button" onClick={(e) => handleSendingMessage(e)}>send message</button>
            </form>

            {console.log("chatRoom =>", chatRoom)}
            {console.log(chatRoomID)}
            {console.log("sender => ", sender)}
            {console.log("owner => ", owner)}
        </div>
    )
}

export default SingleChatRoom
