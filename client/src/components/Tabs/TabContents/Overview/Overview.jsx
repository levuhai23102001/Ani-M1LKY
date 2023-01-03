import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./overview.scss";
const Overview = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="overview">
        <h2 className="overview__title">Attack On Titan Final Season</h2>
        <div className="overview__subtitle">
          <span>Update at 23:10 every Saturday</span>
          <span className="overview__divide-line"></span>
          <span className="overview__subtitle__view">2310K Views</span>
          <div className="overview__subtitle__tag-genre">
            <span className="tag-genre__txt">Action</span>
            <span className="tag-genre__txt">Fantasy</span>
            <span className="tag-genre__txt">Drama</span>
          </div>
          <div className="btn-details" onClick={handleShowDetails}>
            <span>Details</span>
            <ArrowDropDownIcon
              fontSize="medium"
              className={showDetails ? "flip" : ""}
            />
          </div>
        </div>
        <OverviewContent cName={showDetails ? "show" : ""} />
      </div>
    </>
  );
};

const OverviewContent = (props) => {
  return (
    <>
      <div className={`overview__content ${props.cName}`}>
        <div className="overview__content__info--row">
          <span>Anime</span>
          <span className="overview__divide-line"></span>
          <span>Japan</span>
        </div>
        <div className="overview__content__info--row">
          <span>Starting: 23/10/2001</span>
        </div>
        <div className="overview__content__info--row">
          <span>Full</span>
        </div>
        <div className="overview__content__info--row">
          <span style={{ marginRight: 5, color: "#666" }}>Initial</span>
          <span>進撃の巨人 The Final Season part 2</span>
        </div>
        <p className="overview__content__desc">
          The story of "Attack on Giant" describes that a hundred years ago,
          mysterious giant monsters appeared inexplicably in the world, and they
          continued to cruel and cannibalized. Humans could hardly fight against
          them. Finally, humans built three towering walls with a width of 3
          meters and a height of 50 meters. There has not been a giant attack
          for a hundred years. People have become accustomed to the life inside
          the wall. They are numb to peace, afraid of adventure and change.
          Giants flooded into the town. 10-year-old Allen saw the tragedy of her
          mother being bitten by the giant. Allen vowed to destroy all the
          giants.
        </p>
      </div>
    </>
  );
};

export default Overview;
