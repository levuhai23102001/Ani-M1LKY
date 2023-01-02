import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import tmdbAPI, { category, tvType } from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";
import PlayCircle from "@mui/icons-material/PlayCircleOutlineRounded";
import Button from "../../components/Features/Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "../Sliders/slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const [animeItems, setAnimeItems] = useState([]);

  useEffect(() => {
    const getAnimeItems = async () => {
      const params = { with_genres: 16 };
      try {
        const response = await tmdbAPI.getTvList(tvType.popular, {
          params,
        });
        setAnimeItems(response.data.results.slice(0, 7));
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
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        grabCursor={true}
        spaceBetween={0}
        keyboard={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {animeItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <SlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {animeItems.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </div>
  );
};

const SlideItem = (props) => {
  const navigate = useNavigate();

  const item = props.item;

  const background = apiConfig.backgroundImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbAPI.getVideos(category.tv, item.id);

    if (videos.data.results.length > 0) {
      const videSrc =
        "https://www.youtube.com/embed/" + videos.data.results[1].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <>
      <div
        className={`slide-item ${props.className}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="slide-item__content container">
          <div className="slide-item__content__poster">
            <img
              src={apiConfig.posterImage(item.poster_path)}
              alt=""
              className="slide-item__img"
            />
          </div>
          <div className="slide-item__content__info">
            <h2 className="title">{item.title || item.name}</h2>
            <div className="overview">{item.overview}</div>
            <div className="buttons">
              <Button
                name="WATCH NOW"
                cName="watch-now-btn"
                onClick={() => navigate("/tv/" + item.id)}
              />
              <div className="watch-trailer-btn" onClick={setModalActive}>
                <PlayCircle fontSize="large" />
                <span>WATCH TRAILER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TrailerModal = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="600px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
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
