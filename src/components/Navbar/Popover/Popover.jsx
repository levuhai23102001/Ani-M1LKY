import React, { useState, useEffect, useRef } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import DesktopMacRoundedIcon from "@mui/icons-material/DesktopMacRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ToggleTheme from "./ToggleTheme";
import "./popover.scss";

const Popover = () => {
  //Open Popover dropdown
  const [isOpen, setIsOpen] = useState(false);
  //Popover dropdown ref
  const popoverRef = useRef();
  //Handle Click Outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    window.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="more-btn">
        <MoreHorizIcon />
      </div>
      <div className="popover-container">
        <ul
          className={isOpen ? "popover-list active" : "popover-list"}
          ref={popoverRef}
        >
          <PopoverListItem />
        </ul>
      </div>
    </>
  );
};

const PopoverListItem = () => {
  return (
    <>
      <li className="popover-item ani-language">
        <div className="popover-title">
          <span className="popover-label">
            <FontDownloadRoundedIcon />
            <span className="popover-label__txt">Languages</span>
          </span>
          <span className="popover-label__lang">Vietnamese</span>
        </div>
      </li>
      <li className="popover-item ani-theme">
        <div className="popover-title">
          <span className="popover-label">
            <NightlightRoundedIcon />
            <span className="popover-label__txt">Dark theme</span>
          </span>
          <ToggleTheme />
        </div>
      </li>
      <li className="popover-item add-desktop">
        <div className="popover-title">
          <span className="popover-label">
            <DesktopMacRoundedIcon />
            <span className="popover-label__txt">Add to desktop</span>
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
    </>
  );
};

export default Popover;
