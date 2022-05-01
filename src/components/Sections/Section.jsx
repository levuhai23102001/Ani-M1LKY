import React from "react";
import "../Sections/section.scss";
import Skeleton from "@mui/material/Skeleton";
const Section = (props) => {
  const { loading = true } = props;

  return (
    <section className={`section-ani ${props.className}`}>
      <div className="title">
        {loading ? (
          <h1 className="title-name">{props.title}</h1>
        ) : (
          <Skeleton variant="text" height={50} width={220} />
        )}
      </div>
      <SectionContent>{props.children}</SectionContent>
    </section>
  );
};

const SectionContent = (props) => {
  return (
    <>
      <div className="section-content">{props.children}</div>
    </>
  );
};

export default Section;
