import React, { useEffect } from "react";
import Section, { SectionContent } from "../../components/Sections/Section";
import AniGrid from "../../components/AniGrid/AniGrid";
import { category, movieType, tvType } from "../../api/tmdbAPI";

// import { Outlet } from "react-router-dom";

const Genre = () => {
  return (
    <>
      <div className="wrapper">
        <div className="allAni-wrapper">
          <Section>
            <SectionContent cName="ani-all">
              <div className="title">
                <h1 className="title-name">Anime List</h1>
              </div>
              <AniGrid category={category.tv} />
            </SectionContent>
          </Section>
        </div>
      </div>
    </>
  );
};

export default Genre;
