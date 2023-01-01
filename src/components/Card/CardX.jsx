import React, { useEffect, useState } from "react";

import ButtonPlay from "../Features/Button/ButtonPlay";

import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { category } from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";

import "./CardX.scss";

const CardX = (props) => {
  const item = props.item;

  const poster = apiConfig.posterImage(item.poster_path || item.backdrop_path);

  const url = "/" + category[props.category] + "/" + item.id;

  return (
    <div className="ani-card">
      <div className="card-rank">
        <span>{props.rank}</span>
      </div>
      <div className="card-ep">
        <span>{item.vote_average}</span>
      </div>
      <div className="card-top">
        <img className="card-img" src={poster} alt="" />
        <div className="overlay">
          <FavoriteBorderIcon fontSize="medium" className="btn-fav" />
          <ButtonPlay link={url} />
          <ShareRoundedIcon />
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.title || item.name}</h3>
        <div className="card-bottom">
          <div className="card-view">
            <VisibilityIcon fontSize="small" />
            <span>{item.vote_count} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardX;
