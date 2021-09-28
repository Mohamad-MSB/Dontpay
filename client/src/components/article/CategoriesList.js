import React, { useEffect, useState } from "react";
import axios from "../../util/axiosInstance";
import { Link } from "react-router-dom";
import "./categoriesList.scss";
import HeroImage from "../../components/heroImage/HeroImage";

import electronicsImage from '../../Images/category/appliance-electronics-industry (1).jpg'

// 2 september

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axios.get("/article/categorieslist");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <div className="heroImage">
        <HeroImage />
      </div>
      <div id="category" className="category">
        {categories.map((item) => (
          <div className="category_card">
            <Link className="category_link" key={item} to={`/category/${item}`}>
              <div className="middle">
                <div className="text">{item}</div>
              </div>
              <div className="category_image">
                <img src={item === "electronics" ? electronicsImage : ""} alt={item} />
              </div>
              <div className="category_title">
                <p style={{textTransform: "uppercase"}}>{item}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
