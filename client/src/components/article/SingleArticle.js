import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
import { useParams, Link, useHistory } from 'react-router-dom';
import './SingleArticleStyle.scss'

// 2 september

function SingleArticle() {

    const history = useHistory();

    const [selectedArticle, setSelectedArticle] = useState([]);
    const [user, setUser] = useState([]);
    const [address, setAddress] = useState({});

    const [remove, setRemove] = useState(false);

    const { articlename, description, status, note, quantity, imagename, created,  } = selectedArticle;

    const { category, id } = useParams();

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

            <div className="image_offer">
                <div className="image">article image</div>
                <div className="offer">
                    <Link to="/">send message</Link>
                    <Link to="/">make a new offer</Link>

                    <button onClick={() => makeFavorite(id)}>Add to Favorites</button>
                    <button onClick={() => removedArticle()}>Delete item</button>

                    <button>report advert</button>
                    <div className="user">
                        <h3>{user.username}</h3>
                        <p>
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
                    <p>Created at : {created}</p>

                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
            </div>

            {console.log(selectedArticle, address)}
        </div>
    )
}

export default SingleArticle
