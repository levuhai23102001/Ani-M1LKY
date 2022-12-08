import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterList from "./CharacterList";
import TrailerList from "./TrailerList";
import CardX from "../../components/Card/CardX";
import AniList from "../../components/AniList/AniList";

import tmdbAPI from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";

import { FavAniData } from "../../AniData/AniData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./details.scss";
const Details = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbAPI.detail(category, id, {
        params: {},
      });
      setItem(response.data);
      console.log(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <div className="details-wrapper">
          <div
            className="details-banner"
            style={{
              backgroundImage: `url(${apiConfig.backgroundImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="anime-content container">
            <div className="anime-content__poster">
              <img
                src={apiConfig.posterImage(item.poster_path)}
                alt=""
                className="anime-content__poster__img"
              />
              <div className="overlay"></div>
            </div>
            <div className="anime-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, index) => (
                    <span key={index} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="character">
                <h2>Characters</h2>
                <CharacterList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <TrailerList id={item.id} />
          </div>
          <div className="container">
            <div className="trailer__title">
              <h2>Similar</h2>
            </div>
            <AniList>
              <Swiper
                slidesPerView={5}
                freeMode={true}
                className="mySwiper__similar"
              >
                {FavAniData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardX
                      img={item.img}
                      name={item.name}
                      episode={item.episode}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </AniList>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
