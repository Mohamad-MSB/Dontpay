import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { useParams, useHistory } from 'react-router-dom';
import './SingleArticleStyle.scss';
import HeroImage from '../heroImage/HeroImage';
import { ContextAPI } from "../../store/context";
import { Draggable, Droppable } from 'react-drag-and-drop';


// 2 september

function SingleArticle() {

    const history = useHistory();
    const { userId } = useContext(ContextAPI);
    const { category, id } = useParams();

    const [selectedArticle, setSelectedArticle] = useState([]);
    const { articlename, description, status, note, created, } = selectedArticle;

    const [user, setUser] = useState("");
    const [address, setAddress] = useState({});

    // sending message state
    const [message, setMessage] = useState("");
    const [sendMessage, setSendMessage] = useState(false);

    // make offer
    const [makeoffer, setMakeoffer] = useState(false)
    const [myArticle, setMyArticle] = useState([])
    const [drop, setDrop] = useState([]);
    const [walet, setWalet] = useState([]);

    const [remove, setRemove] = useState(false);


    // to get one article
    const singleArticle = async (category, id) => {
        try {
            const response = await axios.get(`/article/category/${category}/${id}`);
            setSelectedArticle(response.data.article);
            setUser(response.data.article.user_id);
            setAddress(response.data.address)
        } catch (error) {
            console.log(error.message);
        }
    }

    // set the article to favorite list
    const makeFavorite = async (id) => {
        try {
            await axios.put(`/user/addToFavorite/${id}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    // to remove the article from my Articles list
    const removeArticle = async (category, id) => {
        try {
            await axios.delete(`/article/category/${category}/${id}`);
            history.push(`/category/${category}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    const removedArticle = () => {
        setRemove(true)
        removeArticle(category, id)
    }

    // sending message
    let owner = user._id;
    const handleSendingMessage = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/message/sendmessage/${id}/${owner}`, {
                message: message
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    // make offer to user  
    const getMyArticle = async () => {
        try {
            const response = await axios.get(`/user/myarticle/user/${userId}`);
            setMyArticle(response.data.article)
            setWalet(response.data.article)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDrop = (data) => {
        const droppedArticle = myArticle.find((item) => item._id === data.article);
        setDrop([...drop, droppedArticle]);
        const indexDroppedArticle = myArticle.indexOf(droppedArticle);
        walet.splice(indexDroppedArticle, 1)
    }




    useEffect(() => {
        singleArticle(category, id)
        getMyArticle()
    }, [id, remove])


    return (
        <div className="single_article">


            <HeroImage />

            <div className="image_offer">
                <div className="image"> <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${selectedArticle.articleimage}`} alt="" /> </div>
                <div className="offer">

                    {userId !== user._id && <div className="user_button">
                    <button onClick={() => setSendMessage(!sendMessage)}>Send Message</button>
                    <button onClick={() => setSendMessage(false) & setMakeoffer(!makeoffer)}>Make offer</button>
                    <button onClick={() => makeFavorite(id)}>Add to Favorites</button>
                    <button>Report Advert</button>
                </div>}
                    {userId === user._id && <button onClick={() => removedArticle()}>Delete Item</button>}

                    <div className="user">
                        <h3>{user.username}</h3>
                        <p className="address">
                            <span>{address.zipcode}</span>
                            <span>{address.city}</span>
                        </p>
                    </div>

                </div>
            </div>
            <div className="details">
                <div className="title">
                    <h2>{articlename}</h2>
                    <p>Status: {status}</p>
                    <p>Note : {note}</p>
                    <span className="create_date"> {new Date(created).toLocaleDateString()}</span>

                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
            </div>

            {sendMessage ? <form >

                <div className="user">
                    <label htmlFor="message">message</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols="30" rows="10">send message</textarea>
                </div>

                <button type="button" onClick={(e) => handleSendingMessage(e)}>send message</button>

            </form> : makeoffer ? <div className="offer_container">
                <div style={{ display: "flex" }}>
                    <ul style={{ width: "200px", height: "200px", background: "green" }}>
                        {walet.map(item => <Draggable key={item._id} type="article" data={item._id}><li>{item.articlename}</li></Draggable>)}
                    </ul>
                    <Droppable
                        types={['article']}
                        onDrop={handleDrop}
                    >
                        <ul className="Smoothie" style={{ width: "200px", height: "200px", background: "dodgerblue" }}>
                            {drop.map(item => <li>{item.articlename}</li>)}
                        </ul>
                    </Droppable>
                </div>
                <button type="button">send the offer</button>

            </div> : ""}
            {console.log(singleArticle)}
        </div>
    )
}

export default SingleArticle
