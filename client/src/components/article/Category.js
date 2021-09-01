import React, { useState } from 'react';
import SelectedArticle from './SelectedArticle';
import { useParams, useHistory } from 'react-router-dom';

function Category({article, id}) {

    const [selectedArticle, setSelectedArticle] = useState(article)


    // const item = selectedArticle.filter(item => item.id)

    const setArticle = (item) => {
        setSelectedArticle(item)

        console.log("hello hi ", item);
    }


    return (
        <div>
            <h1 style={{color:"red"}}>article name</h1>
            {article.map(item => {
                return (
                    <div key={item._id} onClick={() => setArticle(item)} className="container">
                    <h1>{item.articlename}</h1>
                    </div>
                )
            })}

            <SelectedArticle selected={selectedArticle} id={id}/>

        </div>
    )
}

export default Category