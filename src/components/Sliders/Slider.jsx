import React, { useState, useEffect } from "react";
import tmdbAPI, { movieType } from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";
// import { useHistory } from "react-router";

import { Pagination, Navigation, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "../Sliders/slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const [animeItems, setAnimeItems] = useState([]);

  useEffect(() => {
    const getAnimeItems = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbAPI.getMoviesList(movieType.popular, {
          params,
        });
        setAnimeItems(response.data.results.slice(0, 6));
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAnimeItems();
  }, []);
  return (
    <div className="slider ani-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
        grabCursor={true}
        spaceBetween={0}
        keyboard={true}
        mousewheel={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {animeItems.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SlideItem = (props) => {
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <>
      <div
        className="slide-item"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* <img
          src={apiConfig.originalImage(item.backdrop_path || item.poster_path)}
          alt=""
          className="ani-slide__img"
        /> */}
        <div className="slide-item__content container-md">
          <div className="slide-item__content__info">
            <h2 className="title">Title</h2>
            <div className="Overview"></div>
            <div className="slide-item__buttons">
              <button>Watch now</button>
              <button>Watch trailer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;

// {
//   /* <Swiper
//         grabCursor={true}
//         centeredSlides={true}
//         effect={"coverflow"}
//         loop={true}
//         keyboard={true}
//         mousewheel={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 20,
//           stretch: 0,
//           depth: 200,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[
//           Autoplay,
//           Pagination,
//           Navigation,
//           Mousewheel,
//           Keyboard,
//           EffectCoverflow,
//         ]}
//         className="mySwiper"
//       >
//       </Swiper> */
// }
