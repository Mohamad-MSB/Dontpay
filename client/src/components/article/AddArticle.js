import React, { useState, useEffect } from "react";
import axios from '../../util/axiosInstance';

function AddArticle() {
  const [articlename, setArticleName] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("")
  const [note, setNote] = useState("")
  const [quantity, setQuantity] = useState("")
  const [articleimage, setArticleImage] = ("")
  const [category, setCategory] = useState("");

  const addHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/article/add", {
        articlename: articlename,
        description: description,
        status: status,
        note: note,
        quantity: quantity,
        articleimage: articleimage,
        category: category,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <div className="article_name">
          <label htmlFor="articleName">articleName</label>
          <input
            onChange={(e) => setArticleName(e.target.value)}
            type="text"
            id="articleName"
          />
        </div>

        <div className="category">
          <label htmlFor="categoryName">articleName</label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            id="categoryName"
          />
        </div>

        <div className="status">
          <label htmlFor="statusName">StatusName</label>
          <input
            onChange={(e) => setStatus(e.target.value)}
            type="text"
            id="StatusName"
          />
        </div>

        <div className="quantity">
          <label htmlFor="quantityName">QuantityName</label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            id="quantityName"
          />
        </div>

        <div className="description">
          <label htmlFor="descriptionName">Description </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="descriptionName"
          />
        </div>

        <div className="note">
          <label htmlFor="noteName">Note</label>
          <input
            onChange={(e) => setNote(e.target.value)}
            type="text"
            id="noteName"
          />
        </div>

        <div className="upload">
          <label htmlFor="upload">Upload Image</label>
          <input type="file" name="" id="upload" />
        </div>


        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddArticle;
