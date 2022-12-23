import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import CardX from "../Card/CardX";
import Button from "../Features/Button/Button";
import Loader from "../Features/Loader/Loader";

import tmdbAPI, { category, movieType, tvType } from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";

import "./aniGrid.scss";

const AniGrid = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const params = { with_genres: 16 };
    try {
      const response = await tmdbAPI.getTvListWithAll({
        params,
      });
      setItems([...items, ...response.data.results]);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={getList}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="ani-grid">
          {items.map((item, i) => (
            <CardX category={props.category} item={item} key={i} />
          ))}
        </div>
      </InfiniteScroll>

      {/* <Loader /> */}
    </>
  );
};

export default AniGrid;
