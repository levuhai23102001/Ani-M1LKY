import React from "react";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import GojoImg from "../../assets/images/characters/gojo.jpg";
import "swiper/css";
const CharacterList = () => {
  return (
    <div className="characters">
      <Swiper
        slidesPerView={5}
        grabCursor={true}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper__character"
      >
        <SwiperSlide>
          <div className="characters__item">
            <img className="characters__item__img" src={GojoImg} alt="" />
            <p className="characters__item__name">Gojo Satoru</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="characters__item">
            <img className="characters__item__img" src={GojoImg} alt="" />
            <p className="characters__item__name">Gojo Satoru</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="characters__item">
            <img className="characters__item__img" src={GojoImg} alt="" />
            <p className="characters__item__name">Gojo Satoru</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="characters__item">
            <img className="characters__item__img" src={GojoImg} alt="" />
            <p className="characters__item__name">Gojo Satoru</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="characters__item">
            <img className="characters__item__img" src={GojoImg} alt="" />
            <p className="characters__item__name">Gojo Satoru</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="characters__item">
            <img className="characters__item__img" src={GojoImg} alt="" />
            <p className="characters__item__name">Gojo Satoru</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="characters__item">
            <img className="characters__item__img" src={GojoImg} alt="" />
            <p className="characters__item__name">Gojo Satoru</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="characters__item">
            <img className="characters__item__img" src={GojoImg} alt="" />
            <p className="characters__item__name">Gojo Satoru</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CharacterList;
