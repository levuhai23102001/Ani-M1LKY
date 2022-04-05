import React from "react";
import "./listItem.scss";
const ListItem = (props) => {
  return <div className={`ani-list-item ${props.cName}`}>{props.children}</div>;
};

export default ListItem;
