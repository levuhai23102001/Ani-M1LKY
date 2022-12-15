import React, { useEffect, useRef, useState } from "react";
import SearchResult, { SearchItem } from "./SearchResult";
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
  const resultRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    });
  });

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

  useEffect(() => {
    function handleHideResults(event) {
      if (
        showResult &&
        !resultRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setShowResult(false);
      }
    }
    window.addEventListener("click", handleHideResults);
    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener("click", handleHideResults);
    };
  }, [showResult]);

  return (
    <div style={{ position: "relative" }}>
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
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className="clear-btn" onClick={handleClear}>
            <ClearRoundedIcon />
          </button>
        )}

        {/* <RestartAltRoundedIcon className="loading" /> */}
      </div>
      {showResult && searchResult.length > 0 ? (
        <SearchResult ref={resultRef}>
          <h4 className="search-title">Results</h4>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </SearchResult>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
