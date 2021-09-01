import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
import { Link, useParams, useHistory } from 'react-router-dom';
import Category from './Category';
import './article.scss';

function Main() {

    const [article, setArticle] = useState([]);
    const [category, setCategory] = useState("main")
    const [option, setOption] = useState([])

    const { id } = useParams();


    const history = useHistory();

    const handleChange = (value) => {
        history.push(`/${value}`);
        setCategory(value)
    }


    useEffect(() => {

        setCategory(id)

        const getArticle = async () => {
            try {
                const response = await axios.get('/article/view')
                if (response.status === 200) {
                    setOption(response.data.option)
                    if(category !== "main"){
                        const data = response.data.article.filter(item => item.category === category)
                        setArticle(data)
                    } else {
                        setArticle(response.data.article)
                    }
                    }
            } catch (error) {
                console.log(error);
            }
        }
        getArticle()
    },[category, option])


    return (
        <div className="atricl_container">
          
            <select onChange={(e) => handleChange(e.target.value)} name="category" id="category">
                <option value="main">... choose one option ...</option>
               {option.map(item => <option key={item} value={item}>{item}</option>)}
            </select>

            <div className="category">
            {option.map(item => {
                return (
                    <div key={item} className="item">
                    <img src="" alt={item} />
                    <Link to={`/${item}`}>{item}</Link>
                    </div>
                )
            })}
            </div>

            
            {category === id ? <Category article={article} id={id}/> : null}
        </div>
    )
}

export default Main


// <option value="Electronics">Electronics</option>
// <option value="Sports">Sports</option>
// <option value="Collectables">Collectables</option>
// <option value="Home">Home</option>
// <option value="fashion">fashion</option>