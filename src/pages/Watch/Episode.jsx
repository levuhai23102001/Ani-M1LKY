import React from "react";
import bgEp from "../../assets/images/anime/bg-ep.jpg";

const Episode = (props) => {
  return (
    <>
      <div className="ani-watch__ep__card">
        <div className="ani-watch__ep__left">
          <img src={bgEp} alt="" className="ani-watch__ep__img" />
        </div>
        <div className="ani-watch__ep__right">
          <div className="ani-watch__info">
            <h3 className="ani-watch__info__title">
              Episode 2 - from u, 2000 years
            </h3>
          </div>
          <div className="ani-watch__desc">
            <p className="ani-watch__desc__view">2310K Views</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Episode;
