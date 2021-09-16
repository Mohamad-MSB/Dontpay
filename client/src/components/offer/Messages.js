import React, {useState} from 'react';
import axios from '../../util/axiosInstance';
import { useParams } from "react-router-dom";

function Messages() {

    const [message, setMessage] = useState("")
    const [result, setResult] = useState([])
    const {id} = useParams();


    const handleSendingMessage = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post(`/message/send/${id}`, {
                message: message
            })

            setResult(response.data.message)
        } catch (error) {
            console.log(error.message);
        }
        
    }


    return (
        <div>
            
        <form >

        <div className="user">
        <label htmlFor="message">message</label>
        <input onChange={(e) => setMessage(e.target.value)} type="text" />
        </div>

        <button type="button" onClick={(e) => handleSendingMessage(e)}>send message</button>
        
        </form>
        {console.log("id",id)}
        {console.log(message)}
        </div>
    )
}

export default Messages
