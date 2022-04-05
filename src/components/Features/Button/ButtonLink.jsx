import React from "react";
import "../Button/button.scss";
import { NavLink } from "react-router-dom";
const ButtonLink = (props) => {
  return (
    <div className="ani-btn-group">
      <NavLink end to={props.path} className={`ani-button ${props.cName}`}>
        <span>{props.type}</span>
      </NavLink>
    </div>
  );
};

export default ButtonLink;
