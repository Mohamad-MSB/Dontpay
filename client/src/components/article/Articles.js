import React from 'react';
import { Link } from 'react-router-dom';
import './articles.scss';
import firasIMG from './dont-pay.jpg'

// 2 september


function Articles({ article, category, itemId }) {
    return (
        <Link key={itemId} to={`/category/${category}/${article._id}`} className="article">
            <img src={firasIMG} alt="test for now" />
            <div className="thumbnail_text">
                <p>{article.articlename}</p>
                <p>Note : {article.note}</p>

            </div>

        </Link>
    )
}

export default Articles
