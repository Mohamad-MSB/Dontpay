import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { ContextAPI } from '../../store/context';
import './singleChatRoom.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const arrowStyle = { color: '#9c8f1b' }


function SingleChatRoom({ id, reciever, setId }) {

    const [chatRoom, setChatRoom] = useState([])

    const [owner, setOwner] = useState({})
    const [sender, setSender] = useState({})

    const { userId, user } = useContext(ContextAPI);

    const [message, setMessage] = useState("")
    const [refresh, setRefresh] = useState(false)

    const [chatRoomID, setChatRoomID] = useState("")


    const getRoom = async () => {

        try {
            const response = await axios.get(`/message/chatroom/${id}/${reciever}`);
            setChatRoom(response.data.chat)
            setChatRoomID(response.data.id)
            if (response.data.chat[0].sender._id === userId) {
                setOwner(response.data.chat[0].reciever._id)
                setSender(response.data.chat[0].sender._id)
            } else if (response.data.chat[0].reciever._id === userId) {
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
            setMessage("")

        } catch (error) {
            console.log(error.message);
        }
    }



    useEffect(() => {
        getRoom()
    }, [refresh, chatRoomID])

    return (
        <div className="single_chatroom">

            <div onClick={() => setId("")} className="chat_close">X</div>
            <div className="chat_container">
                {chatRoom.map(message => {
                    return (
                        <>
                            

                            {message.sender.username === user ? <div key={message._id} className="me">
                                <p className="message_content" style={{color: "#fff"}}><span style={{color:"#fff"}}>{message.sender.username}</span> : {message.message_body}</p>
                                <p className="message_date">{new Date(message.created_at).toLocaleString()}</p>
                            </div> : <div key={message._id} className="otheruser">
                                <p className="message_content" style={{color:"#cc611e"}}>{message.message_body} : <span style={{color: "#cc611e"}}>{message.sender.username}</span> </p>
                                <p className="message_date">{new Date(message.created_at).toLocaleString()}</p>
                            </div>}



                        </>
                    )
                })}
            </div>
            <form className="form_chat">
                <div className="user">
                    <textarea onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols="30" rows="10" placeholder="write a message" value={message}></textarea>
                    <span onClick={(e) => handleSendingMessage(e)} className="send_icon"><ArrowForwardIcon style={arrowStyle} /></span>
                </div>
            </form>
        </div>
    )
}

export default SingleChatRoom
