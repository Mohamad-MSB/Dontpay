
import React, { useState, useEffect } from "react";

import axios from "../../util/axiosInstance";
import { Link, useParams } from "react-router-dom";
import "./FavoritesList.scss";
import HeroImage from "../heroImage/HeroImage";
import image from "../../Images/laptop.jpg";

function FavoriteList() {
  const [articles, setArticles] = useState([]);
  const [owner, setOwner] = useState([]);

  const [refresh, setRefresh] = useState(false)

  const favoriteArticles = async () => {
    try {
      const response = await axios.get("/user/favorites");
      setArticles(response.data.favorite);
      setOwner(response.data.favorite.user_id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeFromFavoriteList = async (id) => {
  try {
    await axios.get(`/user/favorites/remove/${id}`);
    setRefresh(!refresh)
    
  } catch (error) {
    console.log(error.message);
  }
  }

  useEffect(() => {
    favoriteArticles();
  }, [refresh]);

  return (
    <div className="favorite_list">
      <HeroImage />
      {articles.length !== 0 ? (
        articles.map((article) => {
          return (
           <>
           <Link
           to={`/category/${article.category}/${article._id}`}
           key={article._id}
         >  <div className="fav_image">
         <img src={image} alt="Favorite Article" />
       </div></Link>
         <div className="card">
        
         <div className="middle_column">
           <h2> {article.articlename}</h2>
           <p>
             {article.description}
           </p>
           <button onClick={() => removeFromFavoriteList(article._id)} className="fav_toggle">Remove from Favorites</button>
           {console.log(article._id)}
         </div>
         <div className="right_column">
           <div>22/07/2021</div>
           <div>
             <span>25336</span>
             <span> </span>
             <span>Pinneberg</span>
           </div>
           <div>Shipping is Possible</div>
           <div>
             Owner :{owner}
             {article.user_id !== null ? (
               <h4>{article.user_id.username} </h4>
             ) : (
               <h4>no username</h4>
             )}
           </div>
         </div>
       </div>
           </>
          );
        })
      ) : (
        <h1>there is no favorite articles</h1>
      )}

    </div>
  );
}

export default FavoriteList;
