import React, { useState, useEffect } from "react";
import axios from "../../util/axiosInstance";
import { Link } from "react-router-dom";
import "./FavoritesList.scss";
import HeroImage from "../heroImage/HeroImage";
import image from "../../Images/laptop.jpg";

function FavoriteList() {
  const [articles, setArticles] = useState([]);
  const [owner, setOwner] = useState([]);

  const favoriteArticles = async () => {
    try {
      const response = await axios.get("/user/favorites");
      setArticles(response.data.favorite);
      setOwner(response.data.favorite.user_id);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    favoriteArticles();
  }, []);

  return (
    <div className="favorite_list">
      <HeroImage />
      {articles.length !== 0 ? (
        articles.map((article) => {
          return (
            <Link
              to={`/category/${article.category}/${article._id}`}
              key={article._id}
            >
              <div className="card">
                <div className="fav_image">
                  <img src={image} alt="Favorite Article" />
                </div>
                <div className="middle_column">
                  <h2> {article.articlename}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae harum neque alias Facere
                  </p>
                  <div className="fav_toggle">Remove from Favorites</div>
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
            </Link>
          );
        })
      ) : (
        <h1>there is no favorite articles</h1>
      )}
    </div>
  );
}

export default FavoriteList;
