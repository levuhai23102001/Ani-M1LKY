import React, { useState, useEffect, useRef } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import DesktopMacRoundedIcon from "@mui/icons-material/DesktopMacRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ToggleTheme from "./ToggleTheme";
import "./popover.scss";

const MoreBtn = () => {
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
      <li className="menu-item more-popover">
        <div onClick={() => setIsOpen(!isOpen)} className="more-btn">
          <MoreHorizIcon />
        </div>
        <div className="more-popover-container">
          <ul
            className={
              isOpen ? "more-popover-list active" : "more-popover-list"
            }
            ref={popoverRef}
          >
            <li className="more-popover-item ani-language">
              <div className="popover-title">
                <span className="popover-label">
                  <FontDownloadRoundedIcon />
                  <span className="popover-label__txt">Languages</span>
                </span>
                <span className="popover-label__lang">Vietnamese</span>
              </div>
            </li>
            <li className="more-popover-item ani-theme">
              <div className="popover-title">
                <span className="popover-label">
                  <NightlightRoundedIcon />
                  <span className="popover-label__txt">Dark theme</span>
                </span>
                <ToggleTheme />
              </div>
            </li>
            <li className="more-popover-item add-desktop">
              <div className="popover-title">
                <span className="popover-label">
                  <DesktopMacRoundedIcon />
                  <span className="popover-label__txt">Add to desktop</span>
                </span>
              </div>
            </li>
            <li className="more-popover-item ">
              <div className="popover-title">
                <span className="popover-label">
                  <SettingsRoundedIcon />
                  <span className="popover-label__txt">Settings</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default MoreBtn;
