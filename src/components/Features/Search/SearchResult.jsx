import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { category } from "../../../api/tmdbAPI";
import apiConfig from "../../../api/apiConfig";
import aot4 from "../../../assets/images/anime/aot4.jpg";

import "../Search/searchResult.scss";

const SearchResult = (props, ref) => {
  return (
    <div ref={ref} className="search-result">
      {props.children}
    </div>
  );
};

export const SearchItem = (props) => {
  const item = props.item;

  const poster = apiConfig.posterImage(item.poster_path || item.backdrop_path);

  const url = "/" + category[props.category] + "/" + item.id;

  return (
    <Link to={url} className="search-item__link">
      <div className="search-item">
        <div className="search-item__left">
          <img className="search-item__img" src={poster} alt="" />
        </div>
        <div className="search-item__info">
          <h2 className="search-item__info__title">
            {item.title || item.name}
          </h2>
          <div className="search-item__info__genre">
            {item.genres &&
              item.genres.slice(0, 5).map((genre, index) => (
                <span key={index} className="genres__item">
                  {genre.name}
                </span>
              ))}
          </div>
          <div className="search-item__info__views">
            <span>10.000 views</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default forwardRef(SearchResult);
