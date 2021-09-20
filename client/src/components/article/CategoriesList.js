import React, { useEffect, useState } from "react";
import axios from "../../util/axiosInstance";
import { Link } from "react-router-dom";
import "./categoriesList.scss";
import testImage from "../../Images/laptop.jpg";
import HeroImage from "../../components/heroImage/HeroImage";

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
    <div className="category">

      <div className="heroImage">
        <HeroImage />
      </div>

      <div className="category_list">
        {categories.map((item) => (
          <Link key={item} to={`/category/${item}`} className="link">
            <div className="image">
              <img src={testImage} alt={item} />
            </div>
            <div className="title">
              <p>{item}</p>
            </div>
          </Link>
        ))}
      </div>


     
    </div>
  );
}

export default CategoriesList;
