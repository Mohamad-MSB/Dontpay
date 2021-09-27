import React, { useState, useEffect } from "react";
import axios from "../../util/axiosInstance";

import HeroImage from "../../components/heroImage/HeroImage";
import "./addArticle.scss";

// 2 september

function AddArticle() {

    const [articlename, setArticlename] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [note, setNote] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [alert, setAlert] = useState("");

    const [categoriesOption, setCategoriesOption] = useState([]);
    const [statusOption, setStatusOption] = useState([]);


    

    const addhandler = async (e) => {
        e.preventDefault();   
        
        
        const formData = new FormData(e.target);

        const res = await axios.post('/article/imageupload', formData, {
            headers: {
                "content-Type":"multipart/form-data"
            }
        });


        try {
            let data = {
                user_id: window.localStorage.getItem("userID"),
                articlename: articlename,
                description: description,
                status: status,
                note: note,
                quantity: quantity,
                articleimage: res.data.articleimage,
                category: category
            };

            const response = await axios.post('/article/add', data)
            setAlert(response.data.message);
            e.target.reset();
        } catch (error) {
            console.log(error.message);
        }

    
  };

  const getOptions = async () => {
    try {
      const response = await axios.get("/article/categorieslist");
      setCategoriesOption(response.data.categories);
      setStatusOption(response.data.status);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <div className="article_container">

      <div className="heroImage">
        <HeroImage />
      </div>

      <h2>Add your Article</h2>

      <div className="container_form_cont">

         
        <form onSubmit={addhandler}>

          <div className="article_name">
            <label htmlFor="articlename">Article Name</label>
            <input
              onChange={(e) => setArticlename(e.target.value)}
              type="text"
              name="articlename"
              placeholder="articlename"
            />
          </div>

          <div className="article_options">
            <div className="category">
              <select
                onChange={(e) => setCategory(e.target.value)}
                name="categories"
              >
                <option value={null}>choose category</option>
                {categoriesOption &&
                  categoriesOption.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>

            <div className="status">
              <select onChange={(e) => setStatus(e.target.value)} name="status">
                <option value={null}>choose status</option>
                {statusOption &&
                  statusOption.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="text"
              name="quantity"
              placeholder="quantity"
            />
          </div>

          <div className="description">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              id="description"
              cols="30"
              rows="10"
            >
              article details
            </textarea>
          </div>

          <div className="note">
            <label htmlFor="note">Note</label>
            <input
              onChange={(e) => setNote(e.target.value)}
              type="text"
              name="note"
              placeholder="note"
            />
          </div>

          <div className="upload">
            <input
              accept="image/*"
              type="file"
              name="photo"
              id="img1"
              style={{ display: "none" }}
            />{" "}
            <label htmlFor="img1">Upload Image </label>
            <input
              type="file"
              name="uploadfile"
              id="img2"
              style={{ display: "none" }}
            />{" "}
            {/* <label htmlFor="img2">Click hier to upload image 2</label>
            <input
              type="file"
              name="uploadfile"
              id="img3"
              style={{ display: "none" }}
            />{" "}
            <label htmlFor="img3">Click hier to upload image 3</label> */}
          </div>

          <div className="submit">
            <input type="submit" value="add Article" />
          </div>
        </form>
      </div>

      <div className="alert">{alert ? <h4>{alert}</h4> : ""}</div>
    </div>
  );
}

export default AddArticle;
