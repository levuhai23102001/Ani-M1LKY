import React from "react";
import Slider from "../../components/Sliders/Slider";
import Section, { SectionContent } from "../../components/Sections/Section";
import AniList from "../../components/AniList/AniList";
import { category, movieType, tvType } from "../../api/tmdbAPI";
import { OutlineButton } from "../../components/Features/Button/Button";
import Skeleton from "@mui/material/Skeleton";

import "../Home/home.scss";

function Home(props) {
  const { loading = true } = props;
  return (
    <>
      <div className="wrapper">
        <div className="home-wrapper">
          <Slider />
          {/* popular */}
          <Section>
            <SectionContent cName="ani-popular">
              <div className="section-content__header">
                <div className="title">
                  {loading ? (
                    <h1 className="title-name">Anime Popular</h1>
                  ) : (
                    <Skeleton variant="text" height={50} width={220} />
                  )}
                </div>
                <OutlineButton name="View more" cName="viewMore-btn" />
              </div>

              <AniList category={category.tv} type={tvType.popular} />
            </SectionContent>
          </Section>
          {/* top_rated */}
          <Section className="ani-top_rated">
            <SectionContent cName="ani-top_rated">
              <div className="section-content__header">
                <div className="title">
                  {loading ? (
                    <h1 className="title-name">Anime Top rated</h1>
                  ) : (
                    <Skeleton variant="text" height={50} width={220} />
                  )}
                </div>
                <OutlineButton name="View more" cName="viewMore-btn" />
              </div>

              <AniList category={category.tv} type={tvType.top_rated} />
            </SectionContent>
          </Section>
          {/* on_the_air */}
          <Section>
            <SectionContent cName="ani-on_the_air">
              <div className="section-content__header">
                <div className="title">
                  {loading ? (
                    <h1 className="title-name">Airing today</h1>
                  ) : (
                    <Skeleton variant="text" height={50} width={220} />
                  )}
                </div>
                <OutlineButton name="View more" cName="viewMore-btn" />
              </div>

              <AniList category={category.tv} type={tvType.on_the_air} />
            </SectionContent>
          </Section>
        </div>
      </div>
    </>
  );
}

export default Home;
