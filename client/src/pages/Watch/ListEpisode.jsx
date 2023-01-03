import React from "react";
import bgEp from "../../assets/images/anime/bg-ep.jpg";

const ListEpisode = (props) => {
  return (
    <>
      <div className="ani-watch__ep__container">
        <div className="ani-watch__list">
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
          <Episode
            img={bgEp}
            title="Episode 2 - from u, 2000 years ago"
            view="2310K"
          />
        </div>
      </div>
    </>
  );
};

const Episode = (props) => {
  return (
    <>
      <div className="ani-watch__ep__card">
        <div className="ani-watch__ep__left">
          <img src={props.img} alt="" className="ani-watch__ep__img" />
        </div>
        <div className="ani-watch__ep__right">
          <div className="ani-watch__info">
            <h3 className="ani-watch__info__title">{props.title}</h3>
          </div>
          <div className="ani-watch__desc">
            <p className="ani-watch__desc__view">{props.view} Views</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListEpisode;
