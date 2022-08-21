import React, { useEffect, useState } from "react";
import ButtonPlay from "../Features/Button/ButtonPlay";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Skeleton from "@mui/material/Skeleton";
import "./CardX.scss";

const ItemCard = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  // const { loading = true } = props;
  return (
    <div className="ani-card">
      <div className="card-rank">
        <span>{props.rank}</span>
      </div>

      {loading ? (
        <div className="card-ep">
          <span>{props.episode}</span>
        </div>
      ) : null}

      {loading ? (
        <div className="card-top">
          <img className="card-img" src={props.img} alt="" />
          <div className="overlay">
            <ButtonPlay />
          </div>
        </div>
      ) : (
        <Skeleton variant="rectangular" animation="wave" height={307} />
      )}
      <div className="card-content">
        {loading ? (
          <h3 className="card-title">{props.name}</h3>
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

export default ItemCard;
