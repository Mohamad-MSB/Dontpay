import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { ContextAPI } from '../../store/context'
import { Link } from 'react-router-dom';
import './userArticleList.scss';
import firasIMG from '../../pages/homepage/dont-pay.jpg';
import HeroImage from "../../components/heroImage/HeroImage";

function UserArticleList() {

    const [article, setArticles] = useState([]);
    const { userId } = useContext(ContextAPI)

    const getMyArticle = async () => {

        try {
            const response = await axios.get(`/user/myarticle/user/${userId}`);
            setArticles(response.data.article)
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getMyArticle()
    }, [])


    return (
        <div className="container_article">



<div className="heroImage">
        <HeroImage />
      </div>

          <div className="article_card">
          {article.map(item => (
                <Link key={item} to={`/myarticle/${item._id}`} className="article">

                <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${item.articleimage}`} alt="test for now" />
              
                
                <div className="thumbnail_text">
                <p>{item.articlename}</p>
                <p>Note : {item.note}</p>
                </div>
                </Link>

              

            )
            )}


          </div>
        {console.log(article.map(id => id._id))}
        </div>
    )
}

export default UserArticleList
