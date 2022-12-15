import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Search from "../Features/Search/Search";
import Catalog from "../Features/Search/Catalog";
import Button, { OutlineButton } from "../Features/Button/Button";
import Dropdown from "./Dropdown/Dropdown";
import { NavbarData } from "./NavbarData,";
import Popover, { PopoverContent } from "../Navbar/Popover/Popover";
import ToggleTheme from "./Popover/ToggleTheme";

import {
  MoreHorizIcon,
  NotifiIcon,
  FavoriteBorderIcon,
  FontDownloadRoundedIcon,
  NightlightRoundedIcon,
  DesktopMacRoundedIcon,
  SettingsRoundedIcon,
  RestoreIcon,
} from "../../assets/Icons/Icons";

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
          <Search>
            <Catalog />
          </Search>
          <div className="navbar-minor-menu">
            <div className="minor-menu-container">
              <ul className="navbar-menu-right">
                <li className="ani-navbar__top-up">
                  <div className="top-up-btn">
                    <div className="top-up-icon"></div>
                    Top Up
                  </div>
                </li>
                <li className="menu-item notify-popover">
                  <Popover icon={<NotifiIcon />}>
                    <PopoverContent>No Notifications</PopoverContent>
                  </Popover>
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
                  <Popover icon={<MoreHorizIcon />}>
                    <PopoverContent>
                      <li className="popover-item ani-language">
                        <div className="popover-title">
                          <span className="popover-label">
                            <FontDownloadRoundedIcon />
                            <span className="popover-label__txt">
                              Languages
                            </span>
                          </span>
                          <span className="popover-label__lang">
                            Vietnamese
                          </span>
                        </div>
                      </li>
                      <li className="popover-item ani-theme">
                        <div className="popover-title">
                          <span className="popover-label">
                            <NightlightRoundedIcon />
                            <span className="popover-label__txt">
                              Dark theme
                            </span>
                          </span>
                          <ToggleTheme />
                        </div>
                      </li>
                      <li className="popover-item add-desktop">
                        <div className="popover-title">
                          <span className="popover-label">
                            <DesktopMacRoundedIcon />
                            <span className="popover-label__txt">
                              Add to desktop
                            </span>
                          </span>
                        </div>
                      </li>
                      <li className="popover-item settings">
                        <div className="popover-title">
                          <span className="popover-label">
                            <SettingsRoundedIcon />
                            <span className="popover-label__txt">Settings</span>
                          </span>
                        </div>
                      </li>
                    </PopoverContent>
                  </Popover>
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
