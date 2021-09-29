import axios from "axios";
import React, { useState } from "react";
import "./Excerption.css";
import imageSrc from "../images/clipart1131480.png";

const Excerption = ({ category }) => {
  const [excerptionReq, setExcerptionReq] = useState({
    loading: false,
    excerption: null,
    categoryName: null,
  });

  if (
    (!excerptionReq.excerption && !excerptionReq.loading) ||
    (category === "random" &&
      category !== excerptionReq.categoryName &&
      !excerptionReq.loading &&
      excerptionReq.excerption)
  ) {
    setExcerptionReq({ loading: true });
    axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
      setExcerptionReq({
        loading: false,
        excerption: response.data,
        categoryName: category,
      });
    });
  } else if (
    category !== "" &&
    category !== excerptionReq.categoryName &&
    !excerptionReq.loading &&
    excerptionReq.excerption
  ) {
    setExcerptionReq({ loading: true });
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        setExcerptionReq({
          loading: false,
          excerption: response.data,
          categoryName: category,
        });
      });
  }

  return (
    <div className="excerption">
      <div className="excerption__text">
        <p>{excerptionReq?.excerption?.value ?? ""}</p>
        <img src={imageSrc} alt="Chack" />
      </div>
    </div>
  );
};

export default Excerption;
