import React from "react";
import CharacterList from "./CharacterList";
import TrailerList from "./TrailerList";
import CardX from "../../components/Card/CardX";
import ListItem from "../../components/ListItem/ListItem";
import { FavAniData } from "../../AniData/AniData";
import { Swiper, SwiperSlide } from "swiper/react";
import KaisenBanner from "../../assets/banners/Jujutsukaisen.jpg";
import KaisenImg from "../../assets/images/anime/jujutsukaisen.jpg";
import "swiper/css";
import "./details.scss";
const Details = () => {
  return (
    <>
      <div className="details-wrapper">
        <div
          className="details-banner"
          style={{ backgroundImage: `url(${KaisenBanner})` }}
        ></div>
        <div className="anime-content container">
          <div className="anime-content__poster">
            <img
              src={KaisenImg}
              alt=""
              className="anime-content__poster__img"
            />
            <div className="overlay"></div>
          </div>
          <div className="anime-content__info">
            <h1 className="title">Jujutsu Kaisen Season 1</h1>
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
              <CharacterList />
            </div>
          </div>
        </div>
        <div className="container">
          <TrailerList trailer="https://www.youtube.com/embed/eGSL-l95VXw" />
          <TrailerList trailer="https://www.youtube.com/embed/-iun6KPT4SM" />
        </div>
        <div className="container">
          <div className="trailer__title">
            <h2>Similar</h2>
          </div>
          <ListItem>
            <Swiper
              slidesPerView={5}
              freeMode={true}
              className="mySwiper__similar"
            >
              {FavAniData.map((item, index) => (
                <SwiperSlide>
                  <CardX
                    key={index}
                    img={item.img}
                    name={item.name}
                    episode={item.episode}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </ListItem>
        </div>
      </div>
    </>
  );
};

export default Details;
