import React from "react";
import Slider from "../../components/Sliders/Slider";
import Section from "../../components/Sections/Section";
import CardX from "../../components/Card/CardX";
import { NewAniData } from "../../AniData/AniData";
import ListItem from "../../components/ListItem/ListItem";
function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="home-wrapper">
          <Slider />
          <Section className="ani-newest" title="Newest Anime">
            <ListItem cName="list-item-update">
              {NewAniData.map((item, index) => (
                <CardX
                  key={index}
                  img={item.img}
                  name={item.name}
                  episode={item.episode}
                />
              ))}
              {NewAniData.map((item, index) => (
                <CardX
                  key={index}
                  img={item.img}
                  name={item.name}
                  episode={item.episode}
                />
              ))}
            </ListItem>
          </Section>
          <Section className="ani-popular" title="Popular Anime">
            <ListItem cName="list-item-update">
              {NewAniData.map((item, index) => (
                <CardX
                  key={index}
                  img={item.img}
                  name={item.name}
                  episode={item.episode}
                />
              ))}
              {NewAniData.map((item, index) => (
                <CardX
                  key={index}
                  img={item.img}
                  name={item.name}
                  episode={item.episode}
                />
              ))}
            </ListItem>
          </Section>
          <Section className="ani-recommend" title="Recommend Anime">
            <ListItem cName="list-item-update">
              {NewAniData.map((item, index) => (
                <CardX
                  key={index}
                  img={item.img}
                  name={item.name}
                  episode={item.episode}
                />
              ))}
              {NewAniData.map((item, index) => (
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
}

export default Home;
