import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
import { Link } from "react-router-dom"
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
        <div>
            {articles.length !== 0 ? articles.map(article => {
                return (
                    <div key={article._id} className="card">
                   <h2> {article.articlename}</h2> 
                   <Link to={`/category/${article.category}/${article._id}`}>{article.articlename}</Link>
                    </div>
                )
            }) : <h1>there is no favorite articles</h1>}
            {console.log(articles)}
        </div>
    )
}

export default FavoriteList
