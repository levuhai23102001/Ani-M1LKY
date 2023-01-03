import React, { useEffect, useRef, useState } from "react";
import SearchResult, { SearchItem } from "./SearchResult";
import tmdbAPI, { category } from "../../../api/tmdbAPI";
import { useDebounce } from "../../../Hooks";
import SearchIcon from "@mui/icons-material/Search";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";

import "../Search/search.scss";

function Search(props) {
  //states
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  //ref
  const inputRef = useRef();
  const resultRef = useRef();

  //fetch api search results
  useEffect(() => {
    if (!debouncedValue.trim()) {
      return;
    }
    const getSearch = async () => {
      setLoading(true);

      const params = { query: debouncedValue };

      const response = await tmdbAPI.search(category.tv, { params });
      setSearchResult(response.data.results);
      setLoading(false);
    };
    getSearch();
    // fetch(
    //   `https://api.themoviedb.org/3/search/tv?api_key=3c25efec2428a20e51e79d6884070527&page=1&query=${encodeURIComponent(
    //     debounced
    //   )}`
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setSearchResult(response.results);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //   });
  }, [debouncedValue]);

  //hide search results
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

  // const handleSearch = (e) => {
  //   e.preventDefault();
  // };

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const onChangeSearch = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="navbar-searchBox">
        <button className="search-btn" onMouseDown={(e) => e.preventDefault()}>
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
        {!!searchValue && !loading && (
          <button className="clear-btn" onClick={handleClear}>
            <ClearRoundedIcon />
          </button>
        )}
        {loading && <RestartAltRoundedIcon className="loading" />}
      </div>
      {showResult && searchResult.length > 0 ? (
        <SearchResult ref={resultRef}>
          <h4 className="search-title">Results</h4>
          {searchResult.map((result, index) => (
            <SearchItem key={index} item={result} category={category.tv} />
          ))}
        </SearchResult>
      ) : null}
    </div>
  );
}

export default Search;
