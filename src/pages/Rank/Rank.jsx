import React, { useState } from "react";
import CardZ from "../../components/Card/CardZ";
import CardX from "../../components/Card/CardX";
import ListItem from "../../components/ListItem/ListItem";
import Section from "../../components/Sections/Section";
import { FavAniData } from "../../AniData/AniData";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
const Rank = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <>
      <div className="wrapper">
        <div className="fav-wrapper">
          <Section title="Top 20 Anime" className="ani-fav-title">
            <div className="btn-list-layout">
              <ViewListRoundedIcon
                style={
                  !showCard
                    ? { background: "#ff3377", border: "1px solid #ff3377" }
                    : {}
                }
                fontSize="medium"
                onClick={() => setShowCard(false)}
              />
              <GridViewRoundedIcon
                style={
                  showCard
                    ? { background: "#ff3377", border: "1px solid #ff3377" }
                    : {}
                }
                fontSize="medium"
                onClick={() => setShowCard(true)}
              />
            </div>
            <ListItem cName="list-item-fav">
              {showCard
                ? FavAniData.map((item, index) => (
                    <CardZ
                      key={index}
                      img={item.img}
                      name={item.name}
                      episode={item.episode}
                    />
                  ))
                : FavAniData.map((item, index) => (
                    <CardX
                      key={index}
                      img={item.img}
                      name={item.name}
                      episode={item.episode}
                    />
                  ))}
            </ListItem>
          </Section>
        </div>
      </div>
    </>
  );
};

export default Rank;
