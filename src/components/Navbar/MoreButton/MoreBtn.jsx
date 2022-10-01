import React, { useState, useEffect, useRef } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../MoreButton/moreBtn.scss";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";

const MoreBtn = () => {
  //Open Popover dropdown
  const [isOpen, setIsOpen] = useState(false);
  //Popover dropdown ref
  const popoverRef = useRef();
  //Handle Click Outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && event.target !== popoverRef.current) {
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
                  <span className="popover-label__txt">Ngôn ngữ</span>
                </span>
              </div>
            </li>
            <li className="more-popover-item ani-theme">Item 2 </li>
            <li className="more-popover-item add-desktop">Item 3 </li>
            <li className="more-popover-item ">Item 4</li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default MoreBtn;
