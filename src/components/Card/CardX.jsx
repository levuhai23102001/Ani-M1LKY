import React, { useEffect, useState } from "react";
import ButtonPlay from "../Features/Button/ButtonPlay";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Skeleton from "@mui/material/Skeleton";

import tmdbAPI from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";

import "./CardX.scss";

const CardX = (props) => {
  const item = props.item;

  const poster = apiConfig.posterImage(item.poster_path || item.backdrop_path);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className="ani-card">
      <div className="card-rank">
        <span>{props.rank}</span>
      </div>

      {loading ? (
        <div className="card-ep">
          <span>{item.vote_average}</span>
        </div>
      ) : null}

      {loading ? (
        <div className="card-top">
          <img className="card-img" src={poster} alt="" />
          <div className="overlay">
            <ButtonPlay />
          </div>
        </div>
      ) : (
        <Skeleton variant="rectangular" animation="wave" height={307} />
      )}
      <div className="card-content">
        {loading ? (
          <h3 className="card-title">{item.title || item.name}</h3>
        ) : (
          <Skeleton animation="wave" variant="text" height={15} />
        )}
        {loading ? (
          <div className="card-bottom">
            <div className="card-view">
              <VisibilityIcon fontSize="small" />
              <span>15.000 views</span>
            </div>
            <FavoriteBorderIcon fontSize="medium" className="btn-fav" />
          </div>
        ) : (
          <Skeleton animation="wave" variant="text" height={12} width={150} />
        )}
      </div>
    </div>
  );
};

export default CardX;
