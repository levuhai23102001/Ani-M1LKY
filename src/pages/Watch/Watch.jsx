import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ListEpisode from "./ListEpisode";
import aot4 from "../../assets/images/anime/aot4.jpg";
import Video from "../Watch/video.webm";
import "./watch.scss";

const Watch = () => {
  return (
    <>
      <div className="wrapper">
        <div className="watch-wrapper">
          <div className="ani-watch">
            <div className="ani-watch__main__container">
              <div className="ani-watch__theater-section">
                <div className="ani-watch__header">
                  <div className="logo-ani">
                    <img className="logo-ani__img" src={aot4} alt="" />
                  </div>
                  <div className="info-ani">
                    <div className="info-ani__content">
                      <h2 className="info-ani__title">
                        Episode 1 - From you, 2000 years ago
                      </h2>
                      <div className="info-ani__toolbar">
                        <div className="info-ani__toolbar__btnFav">
                          <FavoriteBorderIcon fontSize="small" />
                          <span>Favorite</span>
                        </div>
                        <div className="info-ani__toolbar__btnShare">
                          <ReplyOutlinedIcon fontSize="small" />
                          <span>Share</span>
                        </div>
                      </div>
                    </div>
                    <div className="info-ani__subtitle"></div>
                  </div>
                </div>
                <div className="ani-player">
                  <div className="ani-player__controls"></div>
                  <div className="video-player">
                    <video src={Video} autoPlay></video>
                  </div>
                </div>
                <div className="ani-watch__footer"></div>
              </div>
            </div>
            <div className="ani-watch__ep__container">
              <ListEpisode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
