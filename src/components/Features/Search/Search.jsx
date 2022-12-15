import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import "../Search/search.scss";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const handleSearch = () => {
    console.log("clicked");
  };

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const onChangeSearch = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div className="navbar-searchBox">
      <button className="search-btn" type="submit" onClick={handleSearch}>
        <SearchIcon fontSize="medium" className="search-icon" />
      </button>

      <input
        ref={inputRef}
        value={searchValue}
        className="search-input"
        type="text"
        placeholder="Search animes and videos"
        onChange={onChangeSearch}
      />
      {!!searchValue && (
        <button className="clear-btn" onClick={handleClear}>
          <ClearRoundedIcon />
        </button>
      )}

      {/* <RestartAltRoundedIcon className="loading" /> */}
      {props.children}
    </div>
  );
}

export default Search;
