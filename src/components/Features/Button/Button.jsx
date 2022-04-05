import React from "react";
import "../Button/button.scss";

const ButtonLogin = ({ name, cName }) => {
  return (
    <div className="ani-btn-group">
      <button type="button" className={`ani-button ${cName}`}>
        <span>{name}</span>
      </button>
    </div>
  );
};

export default ButtonLogin;
