import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
import { useParams } from 'react-router-dom';
import Articles from './Articles';
import './viewcategory.scss';

// 2 september

function ViewCategory() {

    const [articles, setArticles] = useState([]);

    const { category, id } = useParams();


    const getArticles = async (category) => {
        try {
            const response = await axios.get(`/article/category/${category}`);
            setArticles(response.data.articles)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArticles(category)
    },[])

    return (
        <div className="atricl_container">

        <div className="article_list">
            {articles.length === 0 ? <h1>there is no articles in this category</h1> : articles.map((article) => <Articles key={article._id} article={article} category={category} itemId={id}/>)}
        </div>
        </div>

    )
}

export default ViewCategory