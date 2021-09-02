import React, {useState, useEffect} from 'react';
import axios from '../../util/axiosInstance';
import { useParams } from 'react-router-dom';

function SingleArticle() {

    const [selectedArticle, setSelectedArticle] = useState([]);
    const [user, setuser] = useState([]);

    const {articlename, description, status, note, quantity, imagename } = selectedArticle;

    const {category, id} = useParams();

    const singleArticle = async (category, id) => {
        try {
            const response = await axios.get(`/article/category/${category}/${id}`);
            setSelectedArticle(response.data.article);
            setuser(response.data.user)
        } catch (error) {
            console.log(error.message);
        }
    }

     useEffect(() => {
            singleArticle(category, id)
     }, [id])


    return (
        <div >
        
            <h1>username :  {user.username} </h1>
            <h1>selected article name:  {articlename} </h1>
            <h1>selected article description:  {description} </h1>
            <h1>selected article status:  {status} </h1>
            <h1>selected article note:  {note} </h1>
            <h1>selected article quantity:  {quantity} </h1>
            <h1>selected article imagename:  {imagename} </h1>
            <h1>selected article category:  {category} </h1>

        </div>
    )
}

export default SingleArticle
