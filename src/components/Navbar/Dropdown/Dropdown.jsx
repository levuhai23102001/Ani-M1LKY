import React from "react";
import { Link } from "react-router-dom";
import { ListGenreData } from "../NavbarData,";
import AotBanner from "../../../assets/banners/AOT_banner.jpeg";
import "../Dropdown/dropdown.scss";

const Dropdown = () => {
  return (
    <>
      <ul className="dropdown-menu">
        {ListGenreData.map((item, index) => (
          <div key={index} className="dropdown-menu-item">
            <Link to={item.path} className="dropdown-menu-item__link">
              <img src={AotBanner} alt="" />
              <span>{item.title}</span>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
