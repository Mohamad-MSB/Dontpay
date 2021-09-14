import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { ContextAPI } from '../../store/context'

function UserArticleList() {

    const [article, setArticles] = useState([]);
    const { id } = useContext(ContextAPI)

    const getMyArticle = async () => {

        try {
            const response = await axios.get(`/user/myarticle/${id}`);
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
            my article are : 
       
        {console.log(article)}
        </div>
    )
}

export default UserArticleList
