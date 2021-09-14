import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { Link } from "react-router-dom";
import './FavoritesList.scss';
import HeroImage from "../heroImage/HeroImage";
import { ContextAPI } from "../../store/context";

function FavoriteList() {

    const [articles, setArticles] = useState([]);
    const [owner, setOwner] = useState([])

    const favoriteArticles = async () => {
        try {
            const response = await axios.get('/user/favorites');
            setArticles(response.data.favorite)
            setOwner(response.data.favorite.user_id)
        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        favoriteArticles()
    }, [])

    return (
        <div className="favorite_list">
            <HeroImage/>
            {articles.length !== 0 ? articles.map(article => {
                return (
                        <Link to={`/category/${article.category}/${article._id}`} key={article._id}>
                            <div className="card">
                            <h2> {article.articlename}</h2>
                            </div>
                            <div>Owner : {article.user_id !== null ? <h4>{article.user_id.username} </h4> : <h4>no username</h4>}</div>
                        </Link>
                    
                )
            }) : <h1>there is no favorite articles</h1>}

            {console.log(articles)}
        </div>
    )
}

export default FavoriteList
