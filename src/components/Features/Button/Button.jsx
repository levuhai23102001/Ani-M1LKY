import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "../Button/button.scss";

const Button = (props) => {
  return (
    <>
      <button
        className={`ani-button ${props.cName}`}
        onClick={props.onClick ? () => props.onClick() : null}
      >
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

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
