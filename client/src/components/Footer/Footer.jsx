import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <Link to="/" className="footer-logo">
            <img src="" alt="" className="footer-logo__img" />
            <span className="footer-brand__name">ANI M1LKY</span>
          </Link>
          <p className="footer-desc">
            Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            Lorem Ips
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/Milky2310/" target="blank">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/__.m1lkyy.__/" target="blank">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/iah_le" target="blank">
              <TwitterIcon />
            </a>
            <a
              href="https://www.youtube.com/channel/UCD1Najr25qtAW_gzvyYNzBA"
              target="blank"
            >
              <YouTubeIcon />
            </a>
            <a href="https://www.facebook.com/Milky2310/" target="blank">
              <LinkedInIcon />
            </a>
          </div>
          <p className="footer-copyright">@2022 by M1LKY</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Link</h3>
          <ul className="footer-links">
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 1
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 2
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 3
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 4
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Address</h3>
          <ul className="footer-links">
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 1
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 2
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 3
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 4
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">About</h3>
          <ul className="footer-links">
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 1
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 2
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 3
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item__link">
                Link 4
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
