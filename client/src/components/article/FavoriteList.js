import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
import { Link } from "react-router-dom";
import './FavoritesList.scss';
import HeroImage from "../heroImage/HeroImage";
// import FavoriteArticle from './FavoriteArticle';

function FavoriteList() {

    const [articles, setArticles] = useState([]);

    const favoriteArticles = async () => {
        try {
            const response = await axios.get('/user/favorites');
            setArticles(response.data.favorite)
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
                        </Link>
                    
                )
            }) : <h1>there is no favorite articles</h1>}
            {console.log(articles)}
        </div>
    )
}

export default FavoriteList
