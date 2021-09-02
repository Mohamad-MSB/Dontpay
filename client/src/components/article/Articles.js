import React from 'react';
import { Link } from 'react-router-dom';


function Articles({article, category, itemId}) {
    return (
        <div key={itemId}>
            <h3>{article.articlename}</h3>
            <Link to={`/category/${category}/${article._id}`}>article name {article.articlename}</Link>
        </div>
    )
}

export default Articles
