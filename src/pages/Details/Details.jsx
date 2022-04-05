import React from "react";
import CharacterLists from "./CharacterLists";
import KaisenBanner from "../../assets/banners/Jujutsukaisen.jpg";
import KaisenImg from "../../assets/images/anime/jujutsukaisen.jpg";
import "./details.scss";
const Details = () => {
  return (
    <>
      <div className="details-wrapper">
        <div
          className="details-banner"
          style={{ backgroundImage: `url(${KaisenBanner})` }}
        ></div>
        <div className="anime-content">
          <div className="anime-content__poster">
            <img
              src={KaisenImg}
              alt=""
              className="anime-content__poster__img"
            />
          </div>
          <div className="anime-content__info">
            <h1 className="title">Jujutsu Kaisen</h1>
            <div className="genres">
              <span className="genres__item">Action</span>
              <span className="genres__item">Fantasy</span>
              <span className="genres__item">Comedy</span>
              <span className="genres__item">Magic</span>
              <span className="genres__item">Horror</span>
            </div>
            <p className="overview">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <div className="character">
              <h2>Characters</h2>
              <CharacterLists />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
