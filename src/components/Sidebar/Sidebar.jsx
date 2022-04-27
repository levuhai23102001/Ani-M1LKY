import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import WebhookIcon from "@mui/icons-material/Webhook";
import Filter1Icon from "@mui/icons-material/Filter1";
import ArrowIcon from "../../assets/Icons/arrow-sidebar.png";
import ArrowBackIcon from "../../assets/Icons/arrow-back-sidebar.png";
import "../Sidebar/sidebar.scss";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  // const [sidebarStorage, setSidebarStorage] = useState(() => {
  //   const storage = localStorage.getItem("sidebar");
  //   console.log(storage);
  //   return storage;
  // });
  // console.log(sidebarStorage);

  const sidebarRef = useRef();
  console.log(sidebarRef.current);

  // useEffect(() => {
  //   setSidebarStorage(() => {
  //     window.onbeforeunload = () => {
  //       localStorage.setItem("sidebar", sidebarRef.current);
  //     };
  //   });
  // }, [sidebarStorage]);

  return (
    <div
      className={collapse ? "ani-sidebar collapse" : "ani-sidebar"}
      id="side-bar"
      ref={sidebarRef}
    >
      <div className="ani-sidebar-container">
        <ul className="ani-sidebar-menu">
          <li className="sidebar-menu-item">
            <NavLink to="/favorites" className="menu-item__link ">
              <FavoriteBorderIcon fontSize="large" />
              <span className="menu-item-name">Favorite</span>
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink to="/rank" className="menu-item__link">
              <Filter1Icon fontSize="large" />
              <span className="menu-item-name">Rank</span>
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink to="/videos" className="menu-item__link">
              <WebhookIcon fontSize="large" />
              <span className="menu-item-name">Short Videos</span>
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink to="/gallery" className="menu-item__link">
              <LayersIcon fontSize="large" />
              <span className="menu-item-name">Gallery</span>
            </NavLink>
          </li>
        </ul>
        <div className="sidebar-spacing"></div>
        <div className="sidebar-menu-bottom">
          <div className="sidebar-menu-item">
            <a href="/download" target="_blank" className="menu-item__link">
              <FileDownloadOutlinedIcon fontSize="large" />
              <span className="menu-item-name">Download App</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="sidebar-arrow-btn"
        onClick={(e) => setCollapse(!collapse)}
      >
        {!collapse ? (
          <img src={ArrowBackIcon} alt="" className="sidebar-arrow-icon" />
        ) : (
          <img src={ArrowIcon} alt="" className="sidebar-arrow-icon" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
