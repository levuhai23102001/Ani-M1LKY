import React from "react";
import "boxicons";
import "./upToTop.scss";
const UpToTop = () => {
  //scroll to top
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="btn__up-to-top" onClick={handleScrollTop}>
      <div className="btn-icon">
        <box-icon type="solid" name="upvote" color="white"></box-icon>
      </div>
    </div>
  );
};

export default UpToTop;
