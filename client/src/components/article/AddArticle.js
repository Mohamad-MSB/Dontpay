import React, { useState } from 'react';
import axios from '../../util/axiosInstance';


function AddArticle() {

    const [articlename, setArticlename] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [note, setNote] = useState("")
    const [quantity, setQuantity] = useState("")
    const [imagename, setImagename] = useState("")
    const [category, setCategory] = useState("")
    const [alert, setAlert] = useState("")
  

    const addhandler = async (e) => {

        e.preventDefault();

        try {
            let data = {
            user_id: window.localStorage.getItem("userID"),
            articlename: articlename,
            description: description,
            status: status,
            note: note,
            quantity: quantity,
            imagename: imagename,
            category: category};

            const response = await axios.post('/article/add', data)
            setAlert(response.data.message);
            e.target.reset();
            
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div>
        <form onSubmit={addhandler}>
        <input onChange={(e) => setArticlename(e.target.value)} type="text" name="articlename" placeholder="articlename" />
        <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="description" />
        <input onChange={(e) => setStatus(e.target.value)} type="text" name="status" placeholder="status" />
        <input onChange={(e) => setNote(e.target.value)} type="text" name="note" placeholder="note" />
        <input onChange={(e) => setQuantity(e.target.value)} type="text" name="quantity" placeholder="quantity"/>
        <input onChange={(e) => setImagename(e.target.value)} type="text" name="imagename" placeholder="imagename"/>
        <input onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="category"/>
        <input type="submit" value="add article name" />
        </form>
        <div className="alert">
        {alert ? <h4>{alert}</h4> : ""}
        </div>
        </div>
    )
}

export default AddArticle





