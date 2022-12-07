import React, { useState, useEffect } from "react";

import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";

import tmdbAPI from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";

import "swiper/css";

const CharacterList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbAPI.credits(category, props.id);
      setCasts(res.data.cast.slice(0, 10));
    };
    getCredits();
  }, [category, props.id]);

  return (
    <div className="characters">
      <Swiper
        slidesPerView={5}
        grabCursor={true}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper__character"
      >
        {casts.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="characters__item">
              <img
                className="characters__item__img"
                src={apiConfig.posterImage(item.profile_path)}
                alt=""
              />
              <p className="characters__item__name">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CharacterList;
