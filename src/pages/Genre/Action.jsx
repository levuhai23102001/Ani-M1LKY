import React from "react";
import CardX from "../../components/Card/CardX";
import Aot4Img from "../../assets/images/anime/aot4.jpg";
import KaisenImg from "../../assets/images/anime/jujutsukaisen.jpg";
import ListItem from "../../components/ListItem/ListItem";
const Action = () => {
  return (
    <>
      <ListItem>
        <CardX img={Aot4Img} name="Attack On Titan Season 4" episode="EP8" />
        <CardX img={KaisenImg} name="Jujutsu Kaisen" episode="EP12" />
      </ListItem>
    </>
  );
};

export default Action;
