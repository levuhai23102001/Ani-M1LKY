import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "../../Skeleton/CardSkeleton/cardSkeleton.scss";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div class="card-skeleton" key={index}>
        <div class="card-skeleton-img">
          <Skeleton height={307} />
        </div>
        <div class="card-skeleton-bottom">
          <div class="card-skeleton-title">
            <Skeleton height={15} />
          </div>
          <div class="card-skeleton-title__small">
            <Skeleton width={100} height={8} />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
