import React, { useState } from "react";
import axios from "axios";
import Excerption from "./Excerption";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  if (!categories.length) {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        setCategories(response.data);
      });
  }

  return (
    <div>
      <h1>Categories</h1>
      <ul className="list">
        {categories.map((category) => (
          <li className="list__button" key={category}>
            <button
              className="list__button-text"
              onClick={(e) => setCategoryName(e.target.value)}
              value={category}
            >
              {category}
            </button>
          </li>
        ))}
        <li className="list__button" key="random">
          <button
            className="list__button-text"
            onClick={(e) => setCategoryName(e.target.value)}
            value="random"
          >
            random
          </button>
        </li>
      </ul>
      <Excerption category={categoryName} />
    </div>
  );
};

export default Categories;
