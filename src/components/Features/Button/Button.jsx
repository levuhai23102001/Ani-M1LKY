import React from "react";
import { NavLink } from "react-router-dom";

import "../Button/button.scss";

const Button = (props) => {
  return (
    <>
      <button className={`ani-button ${props.cName}`}>
        <span>{props.name}</span>
      </button>
    </>
  );
};

export const OutlineButton = (props) => {
  return (
    <>
      <button className={`ani-button-outline ${props.cName}`}>
        <span>{props.name}</span>
      </button>
    </>
  );
};

export const ButtonLink = (props) => {
  return (
    <>
      <NavLink
        end
        to={props.path}
        className={`ani-button-outline ${props.cName}`}
      >
        <span>{props.type}</span>
      </NavLink>
    </>
  );
};

export default Button;
