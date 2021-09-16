import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { useParams, Link, useHistory } from 'react-router-dom';
import './SingleArticleStyle.scss';
import HeroImage from '../heroImage/HeroImage';
import { ContextAPI } from "../../store/context";

// 2 september

function SingleArticle() {

    const history = useHistory();
    const { userId } = useContext(ContextAPI);
    const { category, id } = useParams();

    const [selectedArticle, setSelectedArticle] = useState([]);
    const [user, setUser] = useState("");
    const [address, setAddress] = useState({});

    const [remove, setRemove] = useState(false);

    const { articlename, description, status, note, quantity, imagename, created, } = selectedArticle;


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

    const makeFavorite = async (id) => {
        try {
            await axios.put(`/user/addToFavorite/${id}`);
        } catch (error) {
            console.log(error.message);
        }
    }


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


    useEffect(() => {
        singleArticle(category, id)
    }, [id, remove])


    return (
        <div className="single_article">


            <HeroImage />

            <div className="image_offer">
                <div className="image"> <img src="http://localhost:3001/uploads/articleimages/image-1631093043504.png" alt="" /> </div>
                <div className="offer">
                    <Link to={`/messages/${user._id}`}>Send Message</Link>
                    <Link to="/makeoffer">Make Offer</Link>

                    <button onClick={() => makeFavorite(id)}>Add to Favorites</button>
                    {userId === user._id && <button onClick={() => removedArticle()}>Delete Item</button>}
                    

                    <button>Report Advert</button>
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

            {console.log("selected article component",selectedArticle.user_id)}
            {console.log("selected article component",user._id, userId)}
        </div>
    )
}

export default SingleArticle
