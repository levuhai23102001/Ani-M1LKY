import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import tmdbAPI from "../../api/tmdbAPI";

const TrailerList = (props) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbAPI.getVideos(category, props.id);
      setVideos(res.data.results.slice(0, 5));
    };
    getVideos();
  }, [category, props.id]);

  return (
    <>
      {videos.map((item, index) => (
        <Trailer key={index} item={item} />
      ))}
    </>
  );
};

const Trailer = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="trailer">
      <div className="trailer__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        style={{ borderRadius: 12 }}
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default TrailerList;
