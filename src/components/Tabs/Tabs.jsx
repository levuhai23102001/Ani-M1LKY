import React, { useEffect, useRef, useState } from "react";
import "./tabs.scss";
const Tabs = () => {
  const [tabs, setTabs] = useState(0);

  const tabActive = useRef(".tabs-item.active");
  const tabLine = useRef(null);

  useEffect(() => {
    tabLine.current.getBoundingClientRect().Left =
      tabActive.current.offsetLeft + "px";
    tabLine.current.getBoundingClientRect().width =
      tabActive.current.offsetWidth + "px";
  }, [tabs]);

  return (
    <>
      <div className="tabs">
        <div
          className={tabs === 0 ? "tabs-item active" : "tabs-item"}
          onClick={() => setTabs(0)}
        >
          <span>Overview</span>
        </div>
        <div
          className={tabs === 0 ? "tabs-item active" : "tabs-item"}
          onClick={() => setTabs(1)}
        >
          <span>Comments</span>
        </div>
        <div
          className={tabs === 0 ? "tabs-item active" : "tabs-item"}
          onClick={() => setTabs(2)}
        >
          <span>Rating</span>
        </div>
        <div className="tabs-line" ref={tabLine}></div>
      </div>
      <div className="tab-content">
        <div className={tabs === 0 ? "tab-pane active" : "tab-pane"}>
          <p>Overview Contents</p>
        </div>
        <div className={tabs === 1 ? "tab-pane active" : "tab-pane"}>
          <p>Comments Contents</p>
        </div>
        <div className={tabs === 2 ? "tab-pane active" : "tab-pane"}>
          <p>Rating Star Contents</p>
        </div>
      </div>
    </>
  );
};

export default Tabs;
