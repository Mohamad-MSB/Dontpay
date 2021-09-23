import React, {useEffect, useState, useContext} from 'react';
import './homepage.scss';
import axios from '../../util/axiosInstance';
import { Link } from 'react-router-dom';
import { ContextAPI} from '../../store/context';
import firasIMG from './dont-pay.jpg';
import HeroImage from '../../components/heroImage/HeroImage';


function HomePage() {

    const [newArticles, setNewArticles] = useState([]);

    const { search } = useContext(ContextAPI);

    const articles = async () => {
    try {
            const response = await axios.get('/article/new');

            setNewArticles(response.data.articles)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() =>{
        articles()
    }, [])

    return (
        <div className="homepage">

            <div className="heroImage">
            <HeroImage />
            </div>
            
            <div className="container_articles">
            {newArticles.length === 0 ? <h1>there is no articles</h1> : search ? newArticles.filter(item => item.articlename.startsWith(search)).map(article => {
                return (
                    <Link to={`/category/${article.category}/${article._id}`} key={article._id} className="article">
                        
                    <img src={firasIMG} alt="test for now" />
                  
                    
                    <div className="thumbnail_text">
                    <p>{article.articlename}</p>
                    <p>Note : {article.note}</p>
                    </div>
                    </Link>
                )
            }) : newArticles.map(article => {
                return (
                    <Link to={`/category/${article.category}/${article._id}`} key={article._id} className="article">
                        
                    <img src={firasIMG} alt="test for now" />
                  
                    
                    <div className="thumbnail_text">
                    <p>{article.articlename}</p>
                    <p>Note : {article.note}</p>
                    </div>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default HomePage;

