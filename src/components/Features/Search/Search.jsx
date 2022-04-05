import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "../Search/search.scss";

function Search() {
  const navSearchBox = useRef();
  const [wide, setWide] = useState(false);

  const handleFocusSearchBox = () => {
    setWide(true);
  };
  const handleBlurSearchBox = () => {
    setWide(false);
  };

  return (
    <div
      className={wide ? "navbar-searchBox wide" : "navbar-searchBox"}
      onFocus={handleFocusSearchBox}
      onBlur={handleBlurSearchBox}
      ref={navSearchBox}
    >
      <SearchIcon fontSize="medium" />
      <input className="search-input" type="text" placeholder="Search" />
    </div>
  );
}

export default Search;
