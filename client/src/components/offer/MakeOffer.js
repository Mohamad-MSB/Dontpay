import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { ContextAPI } from '../../store/context';
import { Draggable, Droppable } from 'react-drag-and-drop';

function MakeOffer() {

    const [article, setArticles] = useState([]);
    const { id } = useContext(ContextAPI);

    const [drop , setDrop] = useState([]);
    const [walet, setWalet] = useState([]);

    const getMyArticle = async () => {

        try {
            const response = await axios.get(`/user/myarticle/${id}`);
            setArticles(response.data.article)
            setWalet(response.data.article)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDrop = (data) => {
        console.log(data);
        const droppedArticle = article.find((item) => item._id === data.article);
        setDrop([...drop, droppedArticle]);
        //1 . find the index of the droppedArticle in walet and set
        const indexDroppedArticle = article.indexOf(droppedArticle);
        // [].findIndex

        // slice 
        const restItem = walet.splice(indexDroppedArticle,1)
        // 2. set the walet to the result of the slice
        console.log('indexDroppedArticle :>> ', indexDroppedArticle);
        console.log('restItem :>> ', restItem);
    }


    useEffect(() => {
        getMyArticle()
    }, [])


    return (
        <div>
            my article are : 
            <div style={{display:"flex"}}>
            <ul style={{width:"200px", height: "200px", background: "green"}}>
            {walet.map(item => <Draggable key={item._id} type="article" data={item._id}><li>{item.articlename}</li></Draggable>)}
            </ul>
            <Droppable
                types={['article']}
                onDrop={handleDrop}
                >
                <ul className="Smoothie" style={{width:"200px", height: "200px", background: "dodgerblue"}}>
                {drop.map(item => <li>{item.articlename}</li>)}
                </ul>
            </Droppable>
        </div>
        
        </div>
    )
}

export default MakeOffer


