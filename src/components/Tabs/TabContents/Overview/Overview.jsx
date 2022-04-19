import React, { useRef, useState } from "react";
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
          <span className="overview__subtitle__divide-line"></span>
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
        <p>
          Twilight, or "Loid Forger," quickly adopts the unassuming orphan Anya
          to play the role of a six-year-old daughter and prospective Eden
          Academy student. For a wife, he comes across Yor Briar, an
          absent-minded office worker who needs a pretend partner of her own to
          impress her friends. However, Loid is not the only one with a hidden
          nature. Yor moonlights as the lethal assassin "Thorn Princess." For
          her, marrying Loid creates the perfect cover. Meanwhile, Anya is not
          the ordinary girl she appears to be; she is an esper, the product of
          secret experiments that allow her to read minds. Although she uncovers
          their true identities, Anya is thrilled that her new parents are cool
          secret agents! She would never tell them, of course. That would ruin
          the fun.
        </p>
      </div>
    </>
  );
};

export default Overview;
