import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

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
  return (
    <Link to="#" className="search-item__link">
      <div className="search-item">
        <div className="search-item__left">
          <img className="search-item__img" src={aot4} alt="" />
        </div>
        <div className="search-item__info">
          <h2 className="search-item__info__title">Attack On Titan Season 4</h2>
          <div className="search-item__info__genre">
            <span>Action</span> / <span>Action</span> / <span>Action</span>
          </div>
          <span className="search-item__info__views">10.000 views</span>
        </div>
      </div>
    </Link>
  );
};

export default forwardRef(SearchResult);
