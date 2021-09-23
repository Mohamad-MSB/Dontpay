import React from 'react';
import { Link } from 'react-router-dom';

function ChatRooms({item}) {
    return (
        <div>
            <Link to={`/chatroom/${item.article_id._id}/${item.reciever._id}`}>{item.article_id.articlename}</Link>
        </div>
    )
}

export default ChatRooms
