import React, { useEffect } from "react";
import Section from "../../components/Sections/Section";
import { ButtonLink } from "../../components/Features/Button/Button";
import { ListGenreData as GenreData } from "../../components/Navbar/NavbarData,";
import { Outlet } from "react-router-dom";
import AniList from "../../components/AniList/AniList";
const Genre = () => {
  return (
    <>
      <div className="wrapper">
        <div className="genre-wrapper">
          <Section title="Anime List" className="ani-genre-title">
            <AniList cName="list-item-genre">
              <div className="genre-btn-list">
                {GenreData.map((item, index) => (
                  <ButtonLink
                    key={index}
                    cName={item.cName}
                    type={item.title}
                    path={item.path}
                  />
                ))}
              </div>
            </AniList>
          </Section>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Genre;
