import React from "react";

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
