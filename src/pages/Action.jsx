import React from "react";
import ItemCard from "../components/Card/ItemCard";
import Aot4Img from "../assets/images/anime/aot4.jpg";
import KaisenImg from "../assets/images/anime/jujutsukaisen.jpg";
import ListItem from "../components/ListItem/ListItem";
const Action = () => {
  return (
    <>
      <ListItem>
        <ItemCard img={Aot4Img} name="Attack On Titan Season 4" episode="EP8" />
        <ItemCard img={KaisenImg} name="Jujutsu Kaisen" episode="EP12" />
      </ListItem>
    </>
  );
};

export default Action;
