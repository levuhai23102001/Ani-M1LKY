import React from "react";
import ListEpisode from "./ListEpisode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FavAniData } from "../../AniData/AniData";
import CardX from "../../components/Card/CardX";
import ListItem from "../../components/ListItem/ListItem";
import Player from "./Player";
import "./watch.scss";
import "swiper/css";
const Watch = () => {
  return (
    <>
      <div className="wrapper">
        <div className="watch-wrapper">
          <div className="ani-watch">
            <Player />
            <ListEpisode />
          </div>
          <div className="ani-watch__similar">
            <div className="ani-watch__similar__title">
              <h2>Similar</h2>
            </div>
            <ListItem>
              <Swiper
                slidesPerView={6}
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
      </div>
    </>
  );
};

export default Watch;
