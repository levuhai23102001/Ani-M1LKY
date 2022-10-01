import React, { useEffect } from "react";
import Section from "../../components/Sections/Section";
import ButtonLink from "../../components/Features/Button/ButtonLink";
import { ListGenreData as GenreData } from "../../components/Navbar/NavbarData,";
import { Outlet } from "react-router-dom";
import ListItem from "../../components/ListItem/ListItem";
import Aos from "aos";
import "aos/dist/aos.css";
const Genre = () => {
  // useEffect(() => {
  //   Aos.init();
  // }, []);

  return (
    <>
      <div className="wrapper">
        <div className="genre-wrapper">
          <Section title="Anime List" className="ani-genre-title">
            <ListItem cName="list-item-genre">
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
            </ListItem>
          </Section>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Genre;
