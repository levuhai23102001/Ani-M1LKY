import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "../Features/Search/Search";
import Button, { OutlineButton } from "../Features/Button/Button";
import Dropdown from "./Dropdown/Dropdown";
import { NavbarData } from "./NavbarData,";
import Popover from "../Navbar/Popover/Popover";
import PopoverN from "../Navbar/Popover/PopoverN";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RestoreIcon from "@mui/icons-material/Restore";

import "../Navbar/navbar.scss";

function Navbar() {
  //Dropdown Menu
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="ani-navbar navbar">
        <div className="navbar-container">
          <div className="navbar-main-menu">
            <Link to="/" className="navbar-brand">
              <img src="" alt="" className="navbar-brand__logo" />
              <span className="navbar-brand__name">ANI M1LKY</span>
            </Link>
            <div className="main-menu-container">
              <ul className="navbar-menu-left">
                {NavbarData.map((item, index) =>
                  item.title === "Anime" ? (
                    <li
                      className="menu-item"
                      key={index}
                      onMouseEnter={() => setDropdown(true)}
                      onMouseLeave={() => setDropdown(false)}
                    >
                      <NavLink to={item.path} className={item.className}>
                        <span>{item.title}</span>
                      </NavLink>
                      {dropdown && <Dropdown />}
                    </li>
                  ) : (
                    <li className="menu-item" key={index}>
                      <NavLink end to={item.path} className={item.className}>
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <Search />
          <div className="navbar-minor-menu">
            <div className="minor-menu-container">
              <ul className="navbar-menu-right">
                <li className="ani-navbar-topup">
                  <div className="topup-btn">
                    <div className="topup-icon"></div>
                    Top Up
                  </div>
                </li>
                <li className="menu-item notify-popover">
                  <PopoverN />
                </li>
                <li className="menu-item">
                  <Link to="/favorites" className="menu-item-link">
                    <FavoriteBorderIcon fontSize="medium" />
                  </Link>
                </li>
                <li className="menu-item">
                  <RestoreIcon fontSize="medium" />
                </li>
                <li className="menu-item more-popover">
                  <Popover />
                </li>
              </ul>
            </div>
            <div className="ani-nav-user-info">
              <OutlineButton name="Sign Up" cName="ani-btn-registration" />
              <OutlineButton name="Sign In" cName="ani-btn-login" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
