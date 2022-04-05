import React from "react";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./buttonPlay.scss";
const ButtonPlay = () => {
  return (
    <Link to="/:id" className="btn-play">
      <PlayArrowIcon className="btn-play-icon" />
    </Link>
  );
};

export default ButtonPlay;
