import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { ContextAPI } from '../../store/context'
import { Link } from 'react-router-dom';

function UserArticleList() {

    const [article, setArticles] = useState([]);
    const { userId } = useContext(ContextAPI)

    const getMyArticle = async () => {

        try {
            const response = await axios.get(`/user/myarticle/${userId}`);
            setArticles(response.data.article)
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getMyArticle()
    }, [])


    return (
        <div>
            <h1>My Article</h1>

            {article.map(item => (
                <Link key={item} to={`/category/${item.category}/${item._id}`} className="link">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="title">
                    <p>{item.description}</p>
                    </div>
                </Link>

            )
            )}
        
        </div>
    )
}

export default UserArticleList
