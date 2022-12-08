import React from "react";
import Slider from "../../components/Sliders/Slider";
import Section from "../../components/Sections/Section";
import AniList from "../../components/AniList/AniList";

import { category, movieType, tvType } from "../../api/tmdbAPI";

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="home-wrapper">
          <Slider />
          <Section className="ani-newest" title="Popular Anime">
            <AniList category={category.tv} type={tvType.popular} />
          </Section>
          <Section className="ani-top_rated" title="Top rated Anime">
            <AniList category={category.tv} type={tvType.top_rated} />
          </Section>
          <Section className="ani-on_the_air" title="Airing Today">
            <AniList category={category.tv} type={tvType.on_the_air} />
          </Section>
        </div>
      </div>
    </>
  );
}

export default Home;
