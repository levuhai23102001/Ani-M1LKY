import React from "react";
import GotoubunImg from "../../assets/images/anime/5toubun.jpg";
import TonikawaImg from "../../assets/images/anime/tonikawa.jpg";
import CardX from "../../components/Card/CardX";
import AniList from "../../components/AniList/AniList";
const Romance = () => {
  return (
    <>
      <AniList>
        <CardX
          img={GotoubunImg}
          name="Gotoubun No Hanayome Movie"
          episode="OVA"
        />
        <CardX img={TonikawaImg} name="Tonikaku Kawaii" episode="EP12" />
      </AniList>
    </>
  );
};

export default Romance;
