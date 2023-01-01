import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import CardSkeleton from "../Features/Skeleton/CardSkeleton/CardSkeleton";

import CardX from "../Card/CardX";
import Loader from "../Features/Loader/Loader";

import tmdbAPI, { category, movieType, tvType } from "../../api/tmdbAPI";
import apiConfig from "../../api/apiConfig";

import "./aniGrid.scss";

const AniGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const params = { with_genres: 16, page: page };

    try {
      const response = await tmdbAPI.getTvListWithAll({
        params,
      });
      setItems([...items, ...response.data.results]);
      setTotalPage(response.data.total_pages);
      setPage(page + 1);
      setLoading(false);
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
        loader={page < totalPage ? <Loader /> : null}
        endMessage={<h2>Ayyo!! You have see it all</h2>}
      >
        <div className="ani-grid">
          {loading && <CardSkeleton cards={20} />}
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
