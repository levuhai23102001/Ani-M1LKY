import React from "react";
import GotoubunImg from "../assets/images/anime/5toubun.jpg";
import TonikawaImg from "../assets/images/anime/tonikawa.jpg";
import ItemCard from "../components/Card/ItemCard";
import ListItem from "../components/ListItem/ListItem";
const Romance = () => {
  return (
    <>
      <ListItem>
        <ItemCard
          img={GotoubunImg}
          name="Gotoubun No Hanayome Movie"
          episode="OVA"
        />
        <ItemCard img={TonikawaImg} name="Tonikaku Kawaii" episode="EP12" />
      </ListItem>
    </>
  );
};

export default Romance;
