import React from "react";
import CardX from "../../components/Card/CardX";
import Aot4Img from "../../assets/images/anime/aot4.jpg";
import KaisenImg from "../../assets/images/anime/jujutsukaisen.jpg";
import GotoubunImg from "../../assets/images/anime/5toubun.jpg";
import TonikawaImg from "../../assets/images/anime/tonikawa.jpg";
import ListItem from "../../components/ListItem/ListItem";
const AllAnime = () => {
  return (
    <>
      <ListItem>
        <CardX img={Aot4Img} name="Attack On Titan Season 4" episode="EP8" />
        <CardX
          img={GotoubunImg}
          name="Gotoubun No Hanayome Movie"
          episode="OVA"
        />
        <CardX img={KaisenImg} name="Jujutsu Kaisen" episode="EP12" />
        <CardX img={TonikawaImg} name="Tonikaku Kawaii " episode="EP12" />
      </ListItem>
    </>
  );
};

export default AllAnime;
