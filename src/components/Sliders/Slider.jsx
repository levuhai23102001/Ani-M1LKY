import React, { useState, useEffect } from "react";
import tmdbAPI, { movieType } from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";

import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  AotBanner,
  KaisenBanner,
  DSlayerBanner,
  NarutoBanner,
  DragonBallBanner,
  TokyoRevengersBanner,
} from "../../assets/BannerData";

import "../Sliders/slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerList = [
  KaisenBanner,
  AotBanner,
  NarutoBanner,
  TokyoRevengersBanner,
  DragonBallBanner,
  DSlayerBanner,
];

const Slider = () => {
  const [animeItems, setAnimeItems] = useState([]);

  useEffect(() => {
    const getAnimeItems = async () => {
      const params = { page: 3 };
      const response = await tmdbAPI.getMoviesList(movieType.popular, {
        params,
      });
      setAnimeItems(response.data.results);
      console.log(response.data.results.slice(0, 5));
    };
    getAnimeItems();
    // const getAnimeItems = async () => {
    //   try {
    //     const params = { page: 1 };
    //     const response = await tmdbAPI.getMoviesList(movieType.popular, {
    //       ...params,
    //     });
    //     setAnimeItems(response.results.slice(1, 4));
    //     console.log(response);
    //   } catch (error) {
    //     console.log("Failed:", error);
    //   }
    // };
    // getAnimeItems();
  }, []);

  return (
    <div className="slider ani-slider">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        effect={"coverflow"}
        loop={true}
        keyboard={true}
        mousewheel={true}
        // navigation={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          Mousewheel,
          Keyboard,
          EffectCoverflow,
        ]}
        className="mySwiper"
      >
        {BannerList.map((item, index) => (
          <SwiperSlide key={index} id={index}>
            <img src={item} alt="" className="ani-banner__img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
