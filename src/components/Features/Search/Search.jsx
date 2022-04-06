import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "../Search/search.scss";

function Search() {
  const navSearchBox = useRef();
  const [wide, setWide] = useState(false);
  const [search, setSearch] = useState("");

  const handleFocusSearchBox = () => {
    setWide(true);
  };
  const handleBlurSearchBox = () => {
    setWide(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div
      className={wide ? "navbar-searchBox wide" : "navbar-searchBox"}
      onFocus={handleFocusSearchBox}
      onBlur={handleBlurSearchBox}
      ref={navSearchBox}
    >
      <SearchIcon fontSize="medium" />
      <input
        value={search}
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
