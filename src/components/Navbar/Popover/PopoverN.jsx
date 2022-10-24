import React, { useState, useEffect, useRef } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import DesktopMacRoundedIcon from "@mui/icons-material/DesktopMacRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ToggleTheme from "./ToggleTheme";
import "./popoverN.scss";

const PopoverN = () => {
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
      <div onClick={() => setIsOpen(!isOpen)} className="notify-btn">
        <NotificationsNoneIcon />
      </div>
      <div className="popoverN-container">
        <ul
          className={isOpen ? "popoverN-list active" : "popoverN-list"}
          ref={popoverRef}
        >
          <PopoverNListItem />
        </ul>
      </div>
    </>
  );
};

const PopoverNListItem = () => {
  return (
    <>
      <li className="popoverN-item ani-language">
        <div className="popoverN-title">
          <span className="popoverN-label">
            <FontDownloadRoundedIcon />
            <span className="popoverN-label__txt">Languages</span>
          </span>
          <span className="popoverN-label__lang">Vietnamese</span>
        </div>
      </li>
      <li className="popoverN-item ani-theme">
        <div className="popoverN-title">
          <span className="popoverN-label">
            <NightlightRoundedIcon />
            <span className="popoverN-label__txt">Dark theme</span>
          </span>
          <ToggleTheme />
        </div>
      </li>
      <li className="popoverN-item add-desktop">
        <div className="popoverN-title">
          <span className="popoverN-label">
            <DesktopMacRoundedIcon />
            <span className="popoverN-label__txt">Add to desktop</span>
          </span>
        </div>
      </li>
      <li className="popoverN-item settings">
        <div className="popoverN-title">
          <span className="popoverN-label">
            <SettingsRoundedIcon />
            <span className="popoverN-label__txt">Settings</span>
          </span>
        </div>
      </li>
    </>
  );
};

export default PopoverN;
