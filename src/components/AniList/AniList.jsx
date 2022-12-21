import React, { useState, useEffect } from "react";

import CardX from "../Card/CardX";

import tmdbAPI, { category } from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";

import "./aniList.scss";

const AniList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = { with_genres: 16 };

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbAPI.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbAPI.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbAPI.similar(props.category, props.id);
      }
      setItems(response.data.results.slice(0, 12));
    };
    getList();
  });

  return (
    <div className={`ani-list-item ${props.cName}`}>
      {items.map((item, index) => (
        <CardX key={index} item={item} category={props.category} />
      ))}
    </div>
  );
};

export default AniList;
