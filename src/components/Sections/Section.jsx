import React from "react";
import "../Sections/section.scss";

const Section = (props) => {
  return <section className="section-ani">{props.children}</section>;
};

export const SectionContent = (props) => {
  return (
    <>
      <div className={`section-content ${props.cName}`}>{props.children}</div>
    </>
  );
};

export default Section;
