import React from "react";
import "./cardZ.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Heart from "../Features/Heart/Heart";
import Button from "../Features/Button/Button";
import ButtonPlay from "../Features/Button/ButtonPlay";
const CardZ = (props) => {
  const handleClickFav = () => {
    console.log("clicked");
  };
  return (
    <div className="ani-cardZ">
      <div className={props.showRank}>
        <span>{props.rank}</span>
      </div>
      <div className="cardZ-top">
        <div className="cardZ-ep">
          <span>{props.episode}</span>
        </div>
        <img className="cardZ-img" src={props.img} alt="" />
      </div>
      <div className="cardZ-content">
        <h3 className="cardZ-title">{props.name}</h3>
        <p className="cardZ-genre">Fantasy / Action / Drama</p>
        <div className="cardZ-play-btn">
          <ButtonPlay />
        </div>
        <div className="cardZ-view">
          <VisibilityIcon fontSize="small" />
          <span>15.000 views</span>
        </div>
      </div>
      <div className="cardZ-fav-icon" onClick={handleClickFav}>
        <Heart />
      </div>
    </div>
  );
};

export default CardZ;
