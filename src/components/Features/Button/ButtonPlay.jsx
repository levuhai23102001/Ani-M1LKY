import React from "react";
import { Link } from "react-router-dom";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import "./buttonPlay.scss";
const ButtonPlay = (props) => {
  return (
    <Link to={props.link} className="btn-play">
      <PlayArrowRoundedIcon className="btn-play-icon" fontSize="large" />
    </Link>
  );
};

export default ButtonPlay;
