import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './articles.scss';
import firasIMG from './dont-pay.jpg';
import axios from '../../util/axiosInstance';

// 2 september


function Articles({ article, category, itemId }) {


    return (
        <Link key={itemId} to={`/category/${category}/${article._id}`} className="article">
            <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${article.articleimage}`} alt="test for now" />
            <div className="thumbnail_text">
                <p>{article.articlename}</p>
                <p>Note : {article.note}</p>
            </div>
        {console.log(article.articleimage)} 
        </Link>
    )
}

export default Articles
